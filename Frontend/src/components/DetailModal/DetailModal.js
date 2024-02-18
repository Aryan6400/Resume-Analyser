import Modal from 'react-modal'
import { IoClose } from "react-icons/io5"
import './DetailModal.css'
import { useState } from 'react';
import { Divider } from '@mui/material';

function DetailModal({ open, toggle, data }) {

    const [tab, setTab] = useState(1);

    const getTechStack = (tech_stack) => {
        let result = '';
        tech_stack.map((item, index) => {
            if (index == 0) result = result + item
            else result = result + ", " + item
        })
        return result
    }

    function stringAvatar(name) {
        return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }

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
                        <div>{stringAvatar(data.name)}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p className='detail-modal-text'>{data.name}</p>
                        <p className='detail-modal-supporting-text'>{data.email}</p>
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
                    <div style={{ alignItems: "center" }} className='detail-row'>
                        <span className='detail-row-label'>Name:</span>
                        <span className='detail-row-value'>{data.verdict.college_detail.name}</span>
                    </div>
                    <div style={{ alignItems: "center" }} className='detail-row'>
                        <span className='detail-row-label'>Branch:</span>
                        <span className='detail-row-value'>{data.verdict.college_detail.branch}</span>
                    </div>
                    <div style={{ alignItems: "center" }} className='detail-row'>
                        <span className='detail-row-label'>Degree:</span>
                        <span className='detail-row-value'>{data.verdict.college_detail.degree}</span>
                    </div>
                    <div style={{ alignItems: "center" }} className='detail-row'>
                        <span className='detail-row-label'>CGPA:</span>
                        <span className='detail-row-value'>{data.verdict.college_detail.cgpa}</span>
                    </div>
                    <div style={{ alignItems: "center" }} className='detail-row'>
                        <span className='detail-row-label'>Start:</span>
                        <span className='detail-row-value'>{data.verdict.college_detail.start}</span>
                    </div>
                    <div style={{ alignItems: "center" }} className='detail-row'>
                        <span className='detail-row-label'>End:</span>
                        <span className='detail-row-value'>{data.verdict.college_detail.end}</span>
                    </div>
                </div>}



                {tab == 2 && <div className='project-detail'>
                    {data.verdict.projects.map((project, index) => {
                        return (
                            <>
                                <div key={index} className='project-container'>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Title:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{project.title}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Description:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{project.short_description}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Tech Stack:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{getTechStack(project.tech_stack)}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Start Month:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{project.time_duration.start}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>End Month:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{project.time_duration.end}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Duration:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{project.time_duration.duration && project.time_duration.duration != "" && `${project.time_duration.duration} Months`}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Relevancy:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{project.relevancy_score}</span>
                                    </div>
                                </div>
                                <Divider key={index} />
                            </>
                        )
                    })}
                </div>}



                {tab == 3 && <div className='experience-detail'>
                    {data.verdict.professional_experience.map((exp, index) => {
                        return (
                            <>
                                <div key={index} className='project-container'>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Role:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{exp.role}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Organisation:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{exp.organisation}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Description:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{exp.short_description}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Tech Stack:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{getTechStack(exp.tech_stack)}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Start Month:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{exp.time_duration.start}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>End Month:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{exp.time_duration.end}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Duration:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{exp.time_duration.duration && exp.time_duration.duration != "" && `${exp.time_duration.duration} Months`}</span>
                                    </div>
                                    <div className='detail-row'>
                                        <span className='detail-row-label'>Relevancy:</span>
                                        <span style={{ lineHeight: "20px" }} className='detail-row-value'>{exp.relevancy_score}</span>
                                    </div>
                                </div>
                                <Divider key={index} />
                            </>
                        )
                    })}
                </div>}
            </div>
        </Modal>
    );
}

export default DetailModal