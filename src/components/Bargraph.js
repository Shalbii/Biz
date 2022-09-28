import React from "react";
import "./Bargraph.css";

import { BiDotsVerticalRounded } from 'react-icons/bi';
export default function Bargraph() {
  return (
    <>
      <div className="bargraph">
        <div className="bargraph_title">
          <label>Campaignwise Prospect Count</label>
          <div>< BiDotsVerticalRounded /></div>
        </div>
        <div className="bargraph_graph">
          <ul>
            <li>
              <label className="bargraph_graph_bluetitle">8</label>
              <div className="bargraph_graph_blue"></div>
              <label >Cam 1</label>
            </li>
            <li>
              <label className="bargraph_graph_greentitle">7</label>
              <div className="bargraph_graph_green"></div>
              <label>Cam 2</label>

            </li>
            <li>
              <label className="bargraph_graph_orangetitle">10</label>
              <div className="bargraph_graph_orange"></div>
              <label>Cam 3</label>



            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
