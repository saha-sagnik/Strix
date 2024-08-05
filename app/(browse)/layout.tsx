import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const BrowseLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {
    return ( 
        <>
        <Navbar/>
        <div className="flex h-full pt-20">
            <Sidebar/>
            {children}
        </div>
        </>
     );
}
 
export default BrowseLayout;