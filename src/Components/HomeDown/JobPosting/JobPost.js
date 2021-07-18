import Seperator from '../../Shared/Seperator.js';
import SpanGrey from '../../Shared/SpanGrey.js';
import Button from '../../Shared/Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Jobs.css';

const JobPost = ({jobName, date, companyName, place, description}) => (
        <article className="job-article">
            <div className="job-heading">
                <span>
                        <a href="https://github.com/iamdevelopergirl" target="_blank" rel="noopener noreferrer">{jobName}</a>
                </span>
                <SpanGrey string={date}/>
            </div>
            <div className="job-place">
                <span>
                    {companyName}
                </span>
                <SpanGrey string={place}/>
            </div>
            <div className="job-desc">
                <SpanGrey string={description}/>
                <Button className="blue small" name={<FontAwesomeIcon icon={faArrowRight}/>}/>
            </div>
        </article>
)

export default JobPost;