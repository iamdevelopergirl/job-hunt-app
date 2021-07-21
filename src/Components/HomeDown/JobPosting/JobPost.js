import Seperator from '../../Shared/Seperator.js';
import SpanGrey from '../../Shared/SpanGrey.js';
import Button from '../../Shared/Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import './Jobs.css';

const JobPost = ({jobName, date, companyName, place, description}) => (
        <article className="job-article">
            <div className="job-heading">
                <span>
                        <a href="https://github.com/iamdevelopergirl" target="_blank" rel="noopener noreferrer">{jobName}</a>
                </span>
                <span>
                    {date}
                </span>
            </div>
            <div className="job-place">
                <span>
                    {companyName}
                </span>
                <span>
                    {place}
                </span>
            </div>
            <div className="job-desc">
                <span>{description}</span>
                <Button className="blue small" name={<FontAwesomeIcon icon={faGreaterThan}/>}/>
            </div>
        </article>
)

export default JobPost;