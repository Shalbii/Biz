import React from "react";

import {  BsBellFill,BsThreeDots } from "react-icons/bs";
import { AiOutlineMenu, } from "react-icons/ai";

import { BiSearch, BiDotsVerticalRounded } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

import { BsMessenger, BsFillStarFill } from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";

import "./style/app.css";
export default function Topbar() {
    return (
        <>

            <div className="topbar">
                <div className="topbar_col1">
                    <div className="topbar_col1_circle">
                        <AiOutlineMenu className="topbar_col1_circle_icon" />
                    </div>


                    <label>Company</label>
                </div>
                <div className="topbar_col2">
                    <ul>
                        <li>Dashboard</li>
                        <li>Leads</li>
                        <li>Campaign</li>
                        <li>Prospects</li>
                        <li>Account</li>
                        <li><BsThreeDots />
                        </li>
                    </ul>
                </div>

                <div className="topbar_col3">
                    <BiSearch />
                    <input type="text" placeholder="Search any products,clients"></input>
                    <RiArrowRightSLine />
                </div>
                <div className="topbar_col4">
                    <label>Clayton Santos</label>
                </div></div>
            {/* <div className="topbar_circle">
                    <BsFillBellFill />
                </div>
                <div className="topbar_circle">
                    <AiFillCloseCircle />
                </div> */}


            <div className="Leftbar">
                <div className="Leftbar_circle">
                    {/* <div className="Leftbar_circle_1"> */}
                    <IoMdCompass /> </div>
                {/* <div className="Leftbar_circle_1"> */}
                <div className="Leftbar_circle">
                    <BsFillStarFill /></div>
                {/* <div className="Leftbar_circle_1"> */}
                <div className="Leftbar_circle">
                    <BsMessenger /></div>
            </div>



            <div className="List">
                <div className="List_r1">
                    <label>User List</label>
                    < BiDotsVerticalRounded className="icon" />
                </div>
                <Shalby />
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
                <Shalby></Shalby>
            </div>
        
        </>
    );
}


{/* <div className="List_r1_a">
                    <div className="List_r1_a_circle">
                        <BsBellFill className="List_r1_a_circle_icon" />
                    </div>
                    <label className="label">Shalby</label>
                    <button>Pending</button>
                </div> */}

function Shalby() {
    return (
        <>
            <div className="List_r1_a">
                <div className="List_r1_a_circle">
                    <BsBellFill className="List_r1_a_circle_icon" />
                </div>
                <label className="label">Shalby</label>
                <button>Pending</button>
            </div>
        </>
    );
}