import Modal from 'react-modal'
import { IoClose } from "react-icons/io5"
import './DetailModal.css'
import { useState } from 'react';
import { Divider } from '@mui/material';

function DetailModal({ open, toggle, data }) {

    const [tab, setTab] = useState(1);

    return (
        <Modal
            isOpen={open}
            style={{
                content: {
                    margin: 'auto',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: "12px",
                    gap: "16px",
                    boxShadow: '0px 20px 24px -4px #10182814',
                    width: '640px',
                    height: '468px',
                    padding: "0"
                },
            }}
        >
            <div className='detail-modal-header'>
                <div className='detail-modal-header-content'>
                    <div className='avatar'>
                        <div>A</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p className='detail-modal-text'>Aryan Singh</p>
                        <p className='detail-modal-supporting-text'>aryansingh@gmail.com</p>
                    </div>
                </div>
                <div onClick={() => toggle()} className='modal-close-icon' style={{ top: "-20px", right: "0" }}>
                    <IoClose />
                </div>
            </div>
            <div className='detail-modal-cards'>
                <div className='detail-modal-tab'>
                    <div onClick={() => setTab(1)} className={`tab-button ${tab == 1 ? "active-button" : ""}`}>
                        College
                    </div>
                    <div onClick={() => setTab(2)} className={`tab-button ${tab == 2 ? "active-button" : ""}`}>
                        Project
                    </div>
                    <div onClick={() => setTab(3)} className={`tab-button ${tab == 3 ? "active-button" : ""}`}>
                        Professional Experience
                    </div>
                </div>
            </div>
            <div className='detail-modal-details'>
                {tab == 1 && <div className='detail-modal-details-container'>
                    <div className='detail-row'>
                        <span className='detail-row-label'>Name:</span>
                        <span className='detail-row-value'>Aryan Singh</span>
                    </div>
                    <div className='detail-row'>
                        <span className='detail-row-label'>Branch:</span>
                        <span className='detail-row-value'>Civil Engineering</span>
                    </div>
                    <div className='detail-row'>
                        <span className='detail-row-label'>Degree:</span>
                        <span className='detail-row-value'>B.Tech</span>
                    </div>
                    <div className='detail-row'>
                        <span className='detail-row-label'>CGPA:</span>
                        <span className='detail-row-value'>8.7</span>
                    </div>
                    <div className='detail-row'>
                        <span className='detail-row-label'>Start:</span>
                        <span className='detail-row-value'>01 Dec 2020</span>
                    </div>
                    <div className='detail-row'>
                        <span className='detail-row-label'>End:</span>
                        <span className='detail-row-value'>01 May 2025</span>
                    </div>
                </div>}



                {tab == 2 && <div className='project-detail'>
                    {/* {data.projects.map((project, index) => { */}
                    <div className='project-container'>
                        <div className='detail-row'>
                            <span style={{ fontSize: "16px", fontWeight: "600" }} className='detail-row-label'>Project 1</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-value'>This is the first project</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Tech Stack:</span>
                            <span className='detail-row-value'>Node.js, Express.js, MongoDb, React.js</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Time Duration:</span>
                            <span className='detail-row-value'>Jun 23 to Aug 23 (3 months)</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Relevancy:</span>
                            <span className='detail-row-value'>4</span>
                        </div>
                    </div>
                    <Divider />
                    <div className='project-container'>
                        <div className='detail-row'>
                            <span style={{ fontSize: "16px", fontWeight: "600" }} className='detail-row-label'>Project 2</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-value'>This is the second project</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Tech Stack:</span>
                            <span className='detail-row-value'>Node.js, Express.js, MongoDb, React.js</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Time Duration</span>
                            <span className='detail-row-value'>Jun 22 to Aug 22 (3 months)</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Relevancy</span>
                            <span className='detail-row-value'>2</span>
                        </div>
                    </div>
                    {/* })} */}
                </div>}



                {tab == 3 && <div className='experience-detail'>
                    {/* {data.projects.map((project, index) => { */}
                    <div className='project-container'>
                        <div className='detail-row'>
                            <span style={{ fontSize: "16px", fontWeight: "600" }} className='detail-row-label'>Software Engineer</span>
                            <span className='detail-row-label'>Leap&Scale</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-value'>This is the first internship in 3rd year summer.</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Tech Stack:</span>
                            <span className='detail-row-value'>Node.js, Express.js, MongoDb, React.js</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Time Duration:</span>
                            <span className='detail-row-value'>Jul 23 to Aug 23 (2 months)</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Relevancy:</span>
                            <span className='detail-row-value'>3</span>
                        </div>
                    </div>
                    <Divider />
                    <div className='project-container'>
                        <div className='detail-row'>
                            <span style={{ fontSize: "16px", fontWeight: "600" }} className='detail-row-label'>Fullstack Engineer</span>
                            <span className='detail-row-label'>PlatinumRx</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-value'>This is the first internship with real work in 4th year spring.</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Tech Stack:</span>
                            <span className='detail-row-value'>Node.js, Express.js, MongoDb, React.js</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Time Duration:</span>
                            <span className='detail-row-value'>Feb 24 to Aug 24 (6 months)</span>
                        </div>
                        <div className='detail-row'>
                            <span className='detail-row-label'>Relevancy:</span>
                            <span className='detail-row-value'>5</span>
                        </div>
                    </div>
                    {/* })} */}
                </div>}
            </div>
        </Modal>
    );
}

export default DetailModal


// Title
// Description
// Tech Stack
// Time Duration: start to end (duration_month)
// Relevancy

// Title
// Description
// Tech Stack
// Time Duration: start to end (duration_month)
// Relevancy