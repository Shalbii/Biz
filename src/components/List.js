import React from "react";
import "./List.css";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';
export default function List() {

    return (
        <div className="List">
            <div className="List_r1">
                <label>User List</label>
                < BiDotsVerticalRounded className="icon" />
            </div>
            <Shalby/>
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

    );
}


function Shalby(){
    return(
         <div className="List_r1_a">
                <div className="List_r1_a_circle">
                    <BsBellFill className="List_r1_a_circle_icon" />
                </div>
                <label className="label">Shalby</label>
                <button>Pending</button>
            </div>
    );
}