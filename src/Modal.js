import { useState } from "react";
import React from "react";
import "./style/modal.css";
export default function Page() {


    
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };

    return (
        <>
            < Popscreen show={show} setShow={setShow} />
            <div className="Main">
                Sample
                <button onClick={handleClick}> Click Me!</button>
            </div>
        </>

    );
}

function Popscreen({ show, setShow }) {
    const handleClose = () => {
        setShow(false);
    };
    return show ? (
        <div className="modalbox">
            <div className="modal">
                <h1> Welcome</h1>

                <button onClick={handleClose} >Close </button>
            </div></div>
    ) : (
        <></>

    );


}