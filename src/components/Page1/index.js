import React from "react";
import logo from "../../logo.svg";

function Page1() {
    return <div className='bg-black h-screen flex justify-center items-center flex-col'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className='text-white'>Page 1</h1>
        </div>;
}

export default Page1;
