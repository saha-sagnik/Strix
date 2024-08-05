import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  // Get the webhook secret from environment variables
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  // Throw an error if the webhook secret is not defined
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Retrieve headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If any of the svix headers are missing, return an error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  // Parse the request body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Initialize the webhook with the secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    });
  }

  // Handle the event based on its type
  const eventType = evt.type;
  if (eventType === "user.created") {
    try {
      await db.user.create({
        data: {
          externalUserId: payload.data.id,
          username: payload.data.username,
          imageUrl: payload.data.image_url,
        }
      });
    } catch (err) {
      console.error('Error saving user to the database:', err);
      return new Response('Error saving user to the database', {
        status: 500
      });
    }
  }

  return new Response('', { status: 200 });
}
