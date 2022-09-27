import React from "react";

import { BsFillBellFill } from "react-icons/bs";
import { AiFillCloseCircle, AiOutlineMenu, } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

import { BsMessenger, BsFillStarFill } from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";

import "./style/app.css";
export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbar_circle">
                    <AiOutlineMenu />
                </div>
                <label className="topbar_Names">Company</label>
                <ul>
                    <li> Dashboard </li>
                    <li>Leads</li>
                    <li>Campaigns</li>
                    <li>Prospects</li>
                    <li>Accounts</li>
                </ul><div>
                    <div className="topbar_search">
                        <BiSearch />
                        <input type="text" placeholder="Search any products,clients"></input>
                        <RiArrowRightSLine />
                    </div></div>
                <div className="topbar_user">
                    <FaUserCircle className="topbar_user_icon" />
                    <label>Clayton Santos</label>
                </div>
                <div className="topbar_circle">
                    <BsFillBellFill />
                </div>
                <div className="topbar_circle">
                    <AiFillCloseCircle />
                </div>
            </div>

            <div className="Leftbar">
                <div className="Leftbar_circle">
                <div className="Leftbar_circle_1">
                    <IoMdCompass /></div>
                    <div className="Leftbar_circle_1">
                        <BsFillStarFill />
                        <div className="Leftbar_circle_1">
                            <BsMessenger />
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}


