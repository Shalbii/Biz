import "./titlebar.css";
import React from "react";
import { GiBeachBag } from "react-icons/gi";
//import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";


export default function TitleBar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebar_bagSquare">
            <GiBeachBag className="titlebar_bagIcon" />
          </div>
          <label>LeadList</label>
        </div>
        {/* <div className="titlebar_top_col2">
          <div className="titlebar_top_col21">
            <HiDownload className="titlebar_downloadIcon" />
            <label>Bulk Import</label>
          </div> */}
        <div className="titlebar_top_col22">
          <BsFillPlusCircleFill className="titlebar_plusIcon" />
          {/* <label>Add Lead</label> */}
          <button onClick={handleClick} > ADD LEAD</button>
        </div>
        {/* </div> */}
        </div>
      </>
      );
}





//<div>< Form show={show} setShow={setShow} /></div>

//function Form({ show, setShow }) {


//}