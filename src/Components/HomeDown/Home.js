import Jobs from './JobPosting/Jobs.js';
import FeaturedCompanies from './FeaturedCompanies/FeaturedCompanies.js';
import './Home.css';

const HomeDown = () => (
    <section className="home-desc-container">
        <Jobs/>
        <FeaturedCompanies/>
    </section>
)

export default HomeDown