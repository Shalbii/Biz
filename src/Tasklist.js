import Topbar from './TasklistPages/Topbar';
import LeftBar from './TasklistPages/LeftBar';
 import Filterbar from './TasklistPages/Filterbar';
import Mainlist from './TasklistPages/Mainlist';
import Titlebar from './TasklistPages/Titlebar';
import Form from './TasklistPages/Form';
import React from "react";
// import "./TasklistPages.css";



export default function Tasklist() {
    return (
        <>
            <div className='TasklistP'>
                <div className='TasklistP_content'>
                    {/* <div className='TasklistP_content_topbar'><Topbar /> */}
                        <div className='TasklistP_content_leftbar'><LeftBar />
                          <div className='TasklistP_content_filterbar'><Filterbar /> 
                                <div className='TasklistP_content_mainlist'><Mainlist />
                                    <div className='TasklistP_content_titlebar'><Titlebar />
                                        <div className='TasklistP_content_form'><Form />

                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                 </div> 
                </div>
            </div>
        </>
    );
}




