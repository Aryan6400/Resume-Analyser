import Modal from 'react-modal'
import { IoClose } from "react-icons/io5"
import './Modal.css'
import { Backdrop, CircularProgress, FormControl, TextField, TextareaAutosize } from '@mui/material'
import { useInput } from '../../context/InputContext'
import { useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { useResult } from '../../context/ResultContext'
import { useState } from 'react'

function InputModal({ open, toggle }) {
    const navigate = useNavigate()
    const { inputData, setInputData, inputFiles, setInputFiles, urls, setUrls } = useInput()
    const { setRelevantData, setNotRelevantData } = useResult()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!inputData.role || inputData.role == '' || !inputData.jd || inputData.jd == '') {
            enqueueSnackbar("Fill the required fields", { variant: "error" })
            return
        }
        setLoading(true);
        const formData = new FormData()
        formData.append("role", inputData.role)
        formData.append("jd", inputData.jd)
        inputFiles.forEach((file) => {
            if(file!=null) formData.append("resumes", file)
        })
        urls.forEach((url) => {
            if(url!=null) formData.append("urls", url)
        })
        try {
            const response = await fetch("http://127.0.0.1:8000/api/index/", {
                method: "POST",
                body: formData
            })
            const result = await response.json()
            console.log(result)
            const relevant = result.filter((item) => {
                if (item.score >= 70) return item
            })
            const notRelevant = result.filter((item) => {
                if (item.score < 70) return item
            })
            setRelevantData(relevant)
            setNotRelevantData(notRelevant)
            setInputFiles([])
            setUrls([]);
            setInputData({
                role: "",
                jd: "",
            })
            setLoading(false)
            navigate('/result')
        } catch (error) {
            setLoading(false)
            enqueueSnackbar(`Server Error: ${error.message}`, { variant: "error" })
            console.error(error)
        }
    }

    return (
        <>
            <Backdrop
                sx={{ color: "#fff", zIndex: 10 }}
                open={loading}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
            <Modal
                isOpen={open}
                style={{
                    content: {
                        margin: 'auto',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: "12px",
                        boxShadow: '0px 20px 24px -4px #10182814',
                        maxWidth: '600px',
                        height: '510px',
                        zIndex:"10"
                    },
                }}
            >
                <div className='modal-header'>
                    <div className='modal-header-content'>
                        <div className='modal-header-icon'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0913 5.72222H19.0451C19.5172 5.72222 19.7533 5.72222 19.8914 5.82149C20.0118 5.9081 20.0903 6.04141 20.1075 6.18877C20.1272 6.35767 20.0125 6.56403 19.7832 6.97677L18.3624 9.53435C18.2792 9.68403 18.2376 9.75887 18.2213 9.83812C18.2069 9.90827 18.2069 9.98062 18.2213 10.0508C18.2376 10.13 18.2792 10.2049 18.3624 10.3545L19.7832 12.9121C20.0125 13.3248 20.1272 13.5312 20.1075 13.7001C20.0903 13.8475 20.0118 13.9808 19.8914 14.0674C19.7533 14.1667 19.5172 14.1667 19.0451 14.1667H11.6135C11.0224 14.1667 10.7268 14.1667 10.501 14.0516C10.3024 13.9504 10.1409 13.7889 10.0397 13.5903C9.92466 13.3645 9.92466 13.0689 9.92466 12.4778V9.94444M6.23021 20.5L2.00799 3.61111M3.59137 9.94444H11.4024C11.9936 9.94444 12.2892 9.94444 12.515 9.8294C12.7136 9.7282 12.8751 9.56672 12.9763 9.3681C13.0913 9.14231 13.0913 8.84672 13.0913 8.25556V3.18889C13.0913 2.59772 13.0913 2.30214 12.9763 2.07634C12.8751 1.87773 12.7136 1.71625 12.515 1.61505C12.2892 1.5 11.9936 1.5 11.4024 1.5H3.64329C2.90596 1.5 2.53729 1.5 2.28514 1.65278C2.06414 1.78668 1.89993 1.99699 1.82363 2.24387C1.73657 2.52555 1.82599 2.88321 2.00483 3.59852L3.59137 9.94444Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            <p className='role'>Add Role</p>
                            <p className='jd'>Add the job description</p>
                        </div>
                    </div>
                    <div onClick={() => toggle()} className='modal-close-icon'>
                        <IoClose />
                    </div>
                </div>
                <div className='modal-content'>
                    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div className='role-input'>
                            <FormControl className='role-input-box' fullWidth>
                                <label id="role-label">Role*</label>
                                <TextField
                                    style={{ borderRadius: "8px" }}
                                    labelId="role-label"
                                    value={inputData.role}
                                    onChange={(e) => setInputData({ ...inputData, role: e.target.value })}
                                    required
                                >
                                </TextField>
                            </FormControl>
                        </div>
                        <div className='jd-input'>
                            <FormControl className='jd-input-box' fullWidth>
                                <label id="jd-label">Job Description*</label>
                                <TextareaAutosize
                                    labelId="jd-label"
                                    className='jd-textarea'
                                    value={inputData.jd}
                                    onChange={(e) => setInputData({ ...inputData, jd: e.target.value })}
                                    required
                                    minRows={6}
                                    maxRows={6}
                                >
                                </TextareaAutosize>
                            </FormControl>
                        </div>
                    </form>
                </div>
                <div className='modal-btns'>
                    <button onClick={() => toggle()} className="cancel-btn">Cancel</button>
                    <button onClick={handleSubmit} className="submit-btn">Submit</button>
                </div>
            </Modal>
        </>
    );
}

export default InputModal
