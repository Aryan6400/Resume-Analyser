import { createContext, useContext, useEffect, useState } from "react";

const InputContext = createContext();

function InputProvider({children}){
    const [inputData, setInputData] = useState({
        role:"",
        jd:"",
    });
    const [urls, setUrls] = useState([]);
    const [inputFiles, setInputFiles] = useState([]);

    useEffect(()=>{
        setInputData(prev=>prev)
        setInputFiles(prev=>prev)
        setUrls(prev=>prev)
    },[])

    return (
        <InputContext.Provider value={{inputData, setInputData, urls, setUrls, inputFiles, setInputFiles}}>
            {children}
        </InputContext.Provider>
    )
}

export const useInput = () => {
    return useContext(InputContext);
}

export default InputProvider;