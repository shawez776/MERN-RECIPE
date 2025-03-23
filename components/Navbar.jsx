import React from "react";

const Navbar = () => {
    return (
        <>
        <div className="nav bg-dark p-2">
            <div className="left">
                <h2>FloverBook</h2>
            </div>
            <div className="right">
                <div divclassName ="btn btn-primary mx-2">Login</div>
                <div divclassName ="btn btn-warning mx-2">Register</div>
                <div divclassName ="btn btn-info mx-2">Add</div>
                <div divclassName ="btn btn-warning mx-2">Profile</div>
                <div divclassName ="btn btn-danger mx-2">LogOut</div>
                <div divclassName ="btn btn-light mx-2">Saved</div>
            </div>
        </div>
        </>
    );
};