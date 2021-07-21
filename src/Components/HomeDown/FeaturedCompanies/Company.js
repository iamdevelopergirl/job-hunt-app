import './FeaturedCompanies.css';
import icon_briefcase from '../../../Assets/icon_briefcase.svg';

const Company = ({logo, name}) => (
    <section className="company-container">
        <div className="company-logo">
            <img className="suitcase" src={icon_briefcase} alt="React Logo" />
        </div>
        <div className="company-name">
            {name}
        </div>
    </section>
)

export default Company;