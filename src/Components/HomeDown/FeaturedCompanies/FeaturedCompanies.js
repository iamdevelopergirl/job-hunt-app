import '../Common.css';
import Company from './Company.js';


const companyName = [
    "GrandParade", "Seargin", "DEX Ventures", 
    "NBC", "SVT SP Zoo", "DG Tech", 
    "PickSaas", "BlackRose", "FrontKom"
];

const FeaturedCompanies = () => {
    
    const companies = companyName.map((elem, index) => {
        return <Company name={elem} key={index}/>
    })
    return (
        <section className="companies-container">
            <div className="home-down-title">
                Featured companies
            </div>
            <div className="companies">
                {companies}
            </div>
        </section>
    )
}

export default FeaturedCompanies;

