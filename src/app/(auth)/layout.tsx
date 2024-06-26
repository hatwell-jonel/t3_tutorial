import React from "react";
import ThemeToggler from "@/components/ThemeToggler";

const AuthLayout = ({children} : {children : React.ReactNode}) => {
    return (     
        <div className="h-[100vh] flex justify-center items-center relative">
            {children}


            <div className="absolute bottom-5 right-0">
                <ThemeToggler />
            </div>
        </div>
    );
}
 
export default AuthLayout;