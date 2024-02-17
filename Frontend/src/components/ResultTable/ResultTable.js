import { useState } from 'react';
import DetailModal from '../DetailModal/DetailModal';
import './ResultTable.css';

function ResultTable({ data }) {
    const [modalData, setModalData] = useState(null);
    const [popup, setPopup] = useState(false)

    const openDetailModal = (item) => {
        setModalData(item)
        setPopup(true)
    }

    const closeModal = () => {
        setModalData(null)
        setPopup(false)
    }

    return (
        <div className="table">
            <div className='table-body'>
                <div style={{ display: "flex", flexDirection: "column", width: "309px" }}>
                    <div className='table-head'><span>Name</span></div>
                    {data.map((item, index) => {
                        return <div className='table-cells'>
                            <div className='avatar'>
                                <div>A</div>
                            </div>
                            <div className='table-name-email'>
                                <span className='table-name' key={index}>{item.name}</span>
                                <span className='table-email' key={index}>{item.email}</span>
                            </div>
                        </div>
                    })}
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "309px" }}>
                    <div className='table-head'>
                        <span>Relevance Score</span>
                        <svg width="13.33" height="13.33" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.06004 6C6.21678 5.55444 6.52614 5.17873 6.93334 4.93942C7.34055 4.7001 7.8193 4.61262 8.28483 4.69247C8.75035 4.77232 9.17259 5.01434 9.47676 5.37568C9.78093 5.73702 9.94741 6.19434 9.94671 6.66666C9.94671 8 7.94671 8.66666 7.94671 8.66666M8.00004 11.3333H8.00671M14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8C1.33337 4.3181 4.31814 1.33333 8.00004 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    {data.map((item, index) => {
                        return <div className='table-cells'><span className='table-cell-text' key={index}>{item.relevance_score}</span></div>
                    })}
                </div>

                <div style={{ display: "flex", flexDirection: "column", width: "121px" }}>
                    <div className='table-head'><span>Resume Link</span></div>
                    {data.map((item, index) => {
                        return <div className='table-cells'><span className='table-cell-button' key={index}>{item.resume_link}</span></div>
                    })}
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "133px" }}>
                    <div className='table-head'><span></span></div>
                    {data.map((item, index) => {
                        return <div className='table-cells'><span className='table-cell-detail' onClick={()=>openDetailModal(item)} key={index}>View Details</span></div>
                    })}
                </div>
            </div>
            <DetailModal open={popup} toggle={closeModal} data={modalData} />
        </div>
    );
}

export default ResultTable;
