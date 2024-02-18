import { Divider } from '@mui/material'
import './Result.css'
import ResultTable from '../ResultTable/ResultTable'
import { useResult } from '../../context/ResultContext'

function Result() {
    const {relevantData, notRelevantData} = useResult()

    return (
        <div className="result">
            <div className='result-header'>
                <div className='result-header-content'>
                    <h2>{Number(relevantData.length)+Number(notRelevantData.length)} Resumes filtered</h2>
                    <p>Purpose Selection</p>
                </div>
                <Divider />
            </div>
            <div className='result-body'>
                <div className='result-content'>
                    <div className='result-label'>
                        <p className='result-text'>Recommended Profiles</p>
                        <p className='result-supporting-text'>Resumes fit for the Job role</p>
                    </div>
                    <div className='result-body-content'>
                        {relevantData.length>0 && <ResultTable data={relevantData} />}
                    </div>
                </div>
                <Divider />
                <div className='result-content'>
                    <div className='result-label'>
                        <p className='result-text'>Non-Recommended Profiles</p>
                        <p className='result-supporting-text'>Resumes that don't fit for the Job role</p>
                    </div>
                    <div className='result-body-content'>
                        {notRelevantData.length>0 && <ResultTable data={notRelevantData} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
