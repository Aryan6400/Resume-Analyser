import { LuUploadCloud } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { BiSolidFilePdf } from "react-icons/bi"
import './LandingPage.css'
import { useInput } from "../../context/InputContext"
import { useDropzone } from "react-dropzone"
import { useState } from "react"
import InputModal from "../Modal/Modal"
import { enqueueSnackbar } from "notistack"
import { storage } from "../../Firebase"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { v4 } from "uuid"
import ProgressDisc from "../ProgressDisc/ProgressDisc"

function LandingPage() {
    const [popup, setPopup] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([])
    const [selectedUrls, setSelectedUrls] = useState([])
    const [isChecked, setChecked] = useState(Array(selectedFiles.length).fill(true))
    const { inputFiles, setInputFiles, urls, setUrls, setInputData } = useInput()
    const [uploadProgress, setUploadProgress] = useState(Array(selectedFiles.length).fill(0));

    const onDrop = (files) => {
        const prevIndex = selectedFiles.length
        setSelectedFiles(prev=> [...prev, ...files])
        setInputFiles(prev => [...prev, ...files])
        setChecked(prev=>{
            const temp=Array(files.length).fill(true)
            const newChecked=[...prev,...temp]
            return newChecked
        })
        handleUpload(files, prevIndex)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/pdf': ['pdf'] } })

    const handleUpload = async (files, prevIndex) => {
        for (let i = 0; i < files.length; i++) {
            const fileRef = ref(storage, `/resumes/${files[i].name + v4()}`)
            const uploadTask = uploadBytesResumable(fileRef, files[i])

            uploadTask.on('state_changed', (snapshot) => {
                const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0)
                updateProgress(progress, i + prevIndex)
            }, (error) => {
                enqueueSnackbar(`File upload failed: ${error.message}`, { variant: "error" })
            }, () => {
                getDownloadURL(fileRef).then((downloadURL) => {
                    const id=urls.length
                    setUrls(prev => {
                        const newUrls = [...prev]
                        newUrls[i + id] = downloadURL
                        return newUrls
                    })
                    setSelectedUrls(prev => {
                        const newUrls = [...prev]
                        newUrls[i + prevIndex] = downloadURL
                        return newUrls
                    })
                })
            })
        }
    }

    const updateProgress = (progress, index) => {
        setUploadProgress(prevProgress => {
            const newProgress = [...prevProgress]
            newProgress[index] = progress
            return newProgress
        });
    }

    const getSize = (size) => {
        let newSize = ((Number(size)) / 1024).toFixed(1)
        if (newSize > 1024) {
            newSize = (newSize / 1024).toFixed(1)
            return `${newSize}MB`
        }
        return `${Number(newSize).toFixed(0)}KB`
    }

    const toggleFile = (index) => {
        if(isChecked[index]){
            setInputFiles(prev => {
                const newItems = [...prev]
                newItems[index]=null
                return newItems
            })
            setUrls(prev => {
                const newUrls = [...prev]
                newUrls[index]=null
                return newUrls
            })
        }
        else{
            setInputFiles(prev => {
                const newItems = [...prev]
                newItems[index]=selectedFiles[index]
                return newItems
            })
            setUrls(prev => {
                const newItems = [...prev]
                newItems[index]=selectedUrls[index]
                return newItems
            })
        }
        setChecked(prev=>{
            const newState = [...prev]
            newState[index]=!newState[index]
            return newState
        })
    }

    const closeModal = () => {
        setInputData({
            role:"",
            jd:"",
        })
        setPopup(false)
    }

    const handleSubmit = () => {
        if (inputFiles.length == 0) {
            enqueueSnackbar("Choose atleast one resume", { variant: "error" })
            return
        }
        setPopup(true)
    }

    console.log(selectedUrls, selectedFiles);
    console.log(urls, inputFiles);
    console.log(isChecked);

    return (
        <section className="landing-page">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "16px" }}>
                <div className="dropzone-container">
                    <div className="dropzone" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className="dropzone-icon">
                            <LuUploadCloud />
                        </div>
                        {
                            isDragActive ? <p>Drop the files here...</p> : <p><span>Click to upload PDF</span> or drag and drop</p>
                        }
                    </div>
                </div>
                {selectedFiles.length > 0 && <div className="selected-files">
                    {selectedFiles?.map((item, index) => {
                        return (
                            <div className="file-card" key={index} style={{
                                position:"relative",
                            }}>
                                {uploadProgress[index]!=100 && <div style={{position:"absolute", left:"0", width:`${uploadProgress[index]}%`, height:"100%", backgroundColor:"#F9FAFB", borderRadius:"12px"}}></div>}
                                <div style={{ display: "flex", gap: "12px"}}>
                                    <BiSolidFilePdf style={{zIndex:"5"}} className="pdf-icon" />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                        <span style={{zIndex:"5"}} className="filename">{item.name.slice(0, 45)}</span>
                                        <span style={{zIndex:"5"}} className="filesize">{getSize(item.size)} - {uploadProgress[index]}% uploaded</span>
                                    </div>
                                </div>
                                {uploadProgress[index]==100 ? <input type="checkbox" checked={isChecked[index]}  onChange={() => toggleFile(index)} className="remove-btn" />
                                : <ProgressDisc />
                                }
                            </div>
                        )
                    })}
                </div>}
                <div className="landing-page-btns">
                    <button onClick={() => {setInputFiles([]); setUrls([]); setSelectedFiles([]); setSelectedUrls([])}} className="cancel-btn">Cancel</button>
                    <button onClick={handleSubmit} className="submit-btn">Attach files</button>
                </div>
            </div>
            <InputModal open={popup} toggle={closeModal} />
        </section>
    )
}

export default LandingPage
