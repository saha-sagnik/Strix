"use client"

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface Containerprops{
    children: React.ReactNode;
}

const Container = ({
    children,
}:Containerprops) => {
    const matches = useMediaQuery("(max-width: 1024px)");
    const{
        collapsed,
        onCollapse,
        onExpand,
    } = useSidebar((state)=>state);

    useEffect(() => {
        if (matches){
            onCollapse();
        }
        else{
            onExpand();
        }
    },
    [matches, onCollapse, onExpand]);


    return (  
        <div className={cn("flex-1", collapsed ? "ml-[70px]" :
             "ml-[70px] lg:ml-60")}>
            {children}
        </div>   
        
    );
}
 
export default Container;
<div>

</div>