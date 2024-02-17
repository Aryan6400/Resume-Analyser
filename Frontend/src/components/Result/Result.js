import { Divider } from '@mui/material';
import './Result.css';
import ResultTable from '../ResultTable/ResultTable';

function Result() {

    const data = [
        {
            name: "Aryan", email: "aryan@gmail.com", relevance_score: "100", resume_link: "Link"
        },
        {
            name: "Aryan", email: "aryan@gmail.com", relevance_score: "100", resume_link: "Link"
        },
        {
            name: "Aryan", relevance_score: "100", resume_link: "Link"
        },
        {
            name: "Aryan", email: "aryan@gmail.com", relevance_score: "100", resume_link: "Link"
        },
        {
            name: "Aryan", relevance_score: "100", resume_link: "Link"
        },
        {
            name: "Aryan", email: "aryan@gmail.com", relevance_score: "100", resume_link: "Link"
        }
    ]

    return (
        <div className="result">
            <div className='result-header'>
                <div className='result-header-content'>
                    <h2>4 Resumes filtered</h2>
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
                        <ResultTable data={data} />
                    </div>
                </div>
                <Divider />
                <div className='result-content'>
                    <div className='result-label'>
                        <p className='result-text'>Recommended Profiles</p>
                        <p className='result-supporting-text'>Resumes fit for the Job role</p>
                    </div>
                    <div className='result-body-content'>
                        <ResultTable data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
