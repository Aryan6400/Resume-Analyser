import { createContext, useContext, useEffect, useState } from "react";

const ResultContext = createContext();

function ResultProvider({children}){
    const [relevantData, setRelevantData] = useState([]);
    const [notRelevantData, setNotRelevantData] = useState([]);

    useEffect(()=>{
        setRelevantData(prev=>prev)
        setNotRelevantData(prev=>prev)
    },[])

    return (
        <ResultContext.Provider value={{relevantData, setRelevantData, notRelevantData, setNotRelevantData}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResult = () => {
    return useContext(ResultContext);
}

export default ResultProvider;