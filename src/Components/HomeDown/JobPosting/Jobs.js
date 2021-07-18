import './Jobs.css';
import JobPost from './JobPost.js';
import '../Common.css'
import Seperator from '../../Shared/Seperator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const jobDesc = [
    {
        jobName: "Junior Java Developer", 
        date: "2 hours ago", 
        companyName: "PickSaaS",
        place: "WroClaw, Polska", 
        description: "I am currently looking for a Java developer. Project \
        for public sector. Location: Wroclaw (during the pandemic, remote work) \
        $ upto PLN 550 net / MD B2B"
    },
    {
        jobName: "Junior Project Manager", 
        date: "3 hours ago", 
        companyName: "Frontkom",
        place: "Lublin, Polska", 
        description: "Join us in the Lublin office to build innovative long- \
        term projects. Exciting international clients and \
        partners and a work environment focussed on \
        learning and growth awaits you!"
    },
    {
        jobName: "Junior Project Manager", 
        date: "1 day ago", 
        companyName: "Frontkom",
        place: "Lublin, Polksa", 
        description: "I am currently looking for a Java developer. Project \
        for public sector. Location: Wroclaw (during the pandemic, remote work) \
        $ upto PLN 550 net / MD B2B"
    }
]

const Jobs = ({strings}) => {

    let job = jobDesc.map((elem, index) => {
        let seperator;
        if(index === 2){
            seperator = null;
        }
        else{
            seperator = <Seperator className="auto-height"/>
        }
        return (
            <div className="jobs--container">
                <JobPost {...elem}/>
                {seperator}
            </div>
        )    
    });
    
    
    return (
        <section className="job-offers-container">
            <div className="heading-container">
                <div className="home-down-title">
                    Newest Job Offers
                </div>
                <div className="all-job-offer-link-container">
                    <a className="all-offer-link" href="https://github.com/iamdevelopergirl" target="_blank" rel="noopener noreferrer">View all job offers {<FontAwesomeIcon icon={faArrowRight}/>}</a>
                </div>
            </div>
            <div className="jobs-container">
                {job}
            </div>
        </section>
    )
}

export default Jobs;