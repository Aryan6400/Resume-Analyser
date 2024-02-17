import { createContext, useContext, useEffect, useState } from "react";

const ResultContext = createContext();

function ResultProvider({children}){
    const [resultData, setResultData] = useState();

    return (
        <ResultContext.Provider value={{resultData, setResultData}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResult = () => {
    return useContext(ResultContext);
}

export default ResultProvider;