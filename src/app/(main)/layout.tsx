import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({children} : {children : React.ReactNode}) => {
    return (     
        <>
            <Navbar />

            <div className="flex">
                <aside className="h-[100vh] hidden md:block w-[300px]">
                    <Sidebar />
                </aside>
                <div className="p-5 w-full md:max-w-[1140px]">
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default MainLayout;