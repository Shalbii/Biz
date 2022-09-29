import React from "react";
//topbar
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu, } from "react-icons/ai";
import "./style/app.css";
import { RiArrowRightSLine } from "react-icons/ri";

//import { useNavigate } from "react-router-dom";
//import { useState } from "react";
import "./TasklistPages/titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";

//left
import { FaRegCompass } from 'react-icons/fa';
import { BsMessenger, BsFillChatDotsFill, BsThreeDots} from "react-icons/bs";
import { AiTwotoneStar, } from "react-icons/ai";
import "./TasklistPages/LeftBar.css";

// filter bar 
import "./TasklistPages/Filterbar.css";
import { BsFillCheckCircleFill, BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai"
import { MdEdit, MdDelete } from "react-icons/md"
import { VscListFlat } from "react-icons/vsc"
import { CgMenuGridR } from "react-icons/cg"
import { FaList } from "react-icons/fa"

//main 
//import React from "react";
import "./TasklistPages/Mainlist.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiTick } from "react-icons/ti";


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
                </div>
            </div>
        </>
    );
}
//title
            function TitleBar() {
        return (
            <>
                <div className="titlebar_top">
                    <div className="titlebar_top_col1">
                        <div className="titlebar_bagSquare">
                            <GiBeachBag className="titlebar_bagIcon" />
                        </div>
                        <label>LeadList</label>
                    </div>
                    <div className="titlebar_top_col2">
                        <div className="titlebar_top_col21">
                            <HiDownload className="titlebar_downloadIcon" />
                            <label>Bulk Import</label>
                        </div>
                        <div className="titlebar_top_col22">
                            <BsFillPlusCircleFill className="titlebar_plusIcon" />
                            <label>Add Lead</label>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    //left
    function LeftBar() {
        return (
            <>

                <div className="leftbar">
                    <div className="leftbar_whitecircle"><BsFillChatDotsFill /></div>
                    <div className="leftbar_whitecircle1">
                        <FaRegCompass />
                    </div>
                    <div className="leftbar_whitecircle2">
                        <AiTwotoneStar />
                    </div>
                    <div className="leftbar_whitecircle3">
                        <BsMessenger />
                    </div>
                </div>
            </>
        );
    }

    //filter 

    function Filterbar() {
        return <>
            <div className="filterbar">
                <div className="filterbar_column1">
                    <BsFillCheckCircleFill className="filterbar_column1_cirleicon" />
                    <label>Select All</label>
                </div>
                <div className="filterbar_column2">
                    <div className="filterbar_column2_inner1">
                        < BsFilter className="filterbar_column2_inner1_filtericon" />
                        <label>Filters</label>
                    </div>
                    <div className="filterbar_column2_inner2">
                        <AiOutlineSearch className="filterbar_column2_inner2_searchicon" />
                        <label>Search</label>
                    </div>
                    <div className="filterbar_column2_inner3">
                        <MdEdit className="filterbar_column2_inner3_editicon" />
                        <label>Edit</label>
                    </div>
                    <div className="filterbar_column2_inner4">
                        <MdDelete className="filterbar_column2_inner4_deleteicon" />
                        <label>Delete</label>
                    </div>
                </div>
                <div className="filterbar_column3">
                    <VscListFlat className="filterbar_column3_menuicon" />
                    <CgMenuGridR className="filterbar_column3_cgmenuicon" />
                    <FaList className="filterbar_column3_listicon" />
                </div>
            </div>
        </>
    }
    //mainkist
    function Mainlist() {
        return (
            <>
                <div>
                    <div className="box"></div>
                    <div className="header">
                        <div className="row1">
                            <ul>
                                <li>FirstName</li>
                                <li>LastName</li>
                                <li>Status</li>
                                <li>Created On</li>
                                <li>Email</li>
                                <li>Responses</li>
                                <li>Owner</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Innerbox">
                        <div className="list">
                            <div className="list_row_top">
                                <div className="list_whitecircle"></div>
                                <div className="list_row">
                                    <label>John</label>
                                    <label>Smith</label>
                                    <label>Confirmed</label>
                                    <label>2022-02-01</label>
                                    <label>larrywilson@nomail.com</label>
                                    <label>10</label>
                                    <label>Larry wilson</label>
                                    <div className="icon">
                                        <AiOutlineArrowRight />
                                    </div>
                                </div>
                            </div>
                            <ListRow />
                            <ListRow />
                            <ListRow />
                            <ListRow />
                            <div className="list_row7_top">
                                <div className="list_whitecircle7"><TiTick /></div>
                                <div className="list_row7">
                                    <label>John</label>
                                    <label>Smith</label>
                                    <label>Confirmed</label>
                                    <label>2022-02-01</label>
                                    <label>larrywilson@nomail.com</label>
                                    <label>10</label>
                                    <label>Larry wilson</label>
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                            <ListRow />
                            <ListRow />
                            <ListRow />
                            <ListRow />
                            <div><button className="Button">load more leads</button></div>
                        </div>
                    </div>
                </div>
            </>
        );


    }
    function ListRow() {
        return (<>
            <div className="list_row_top">
                <div className="list_whitecircle"></div>
                <div className="list_row">
                    <label>John</label>
                    <label>Smith</label>
                    <label>Confirmed</label>
                    <label>2022-02-01</label>
                    <label>larrywilson@nomail.com</label>
                    <label>10</label>
                    <label>Larry wilson</label>
                    <div className="icon">
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </div>
        </>)
    }

