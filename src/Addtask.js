import React from "react";
import { GiBeachBag } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function Addtask() {

    const [show, setShow] = useState(false);
    // const handleClick = () => {
    //     setShow(!show);
    // };
    return (
        <>
            < Popscreen show={show} setShow={setShow} />
            <div className="AddtaskPage">
                <div className="r1">
                    <div className="r1_details">
                        <div className="r1_bagSquare">
                            <GiBeachBag className="r1_bagIcon" />
                        </div>
                        <label>ADD TASK</label>
                        <label>Log a call</label>
                        <label>Email</label>
                        <BsFillPlusCircleFill className="r1_plusIcon" />
                        <button> SAVE</button>
                    </div>
                </div>

                <div className="r2">
                    <label>Task list details</label>
                </div>

                <div className="r3">
                    <div className="r3_in">
                        <label>Subject</label>
                        <div className="rectangle"></div>
                    </div>
                    <div className="r3_in">
                        <label>Comments</label>
                        <div className="rectangle"></div>
                    </div>
                    <div className="r3_in">
                        <label>created on</label>
                        <div className="rectangle"></div>
                    </div>
                </div>


                <div className="r4">
                    <div className="r4_in">
                        <label>Assigned to</label>
                        <div className="rectangle"></div>
                    </div>
                    <div className="r4_in">
                        <label>Lead email id</label>
                        <div className="rectangle"></div>
                    </div>
                    <div className="r4_in">
                        <label>Status</label>
                        <div className="rectangle"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


// function Popscreen({ show, setShow }) {

// };
// return show ? (
//     <Addtask> </Addtask>
// ) : (
//     <></>
// )