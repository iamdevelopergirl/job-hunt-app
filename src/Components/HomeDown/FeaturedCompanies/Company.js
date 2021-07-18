import './FeaturedCompanies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

const Company = ({logo, name}) => (
    <section className="company-container">
        <div className="company-logo">
            <FontAwesomeIcon icon={faSuitcase} className="suitcase"/> 
        </div>
        <div className="company-name">
            {name}
        </div>
    </section>
)

export default Company;