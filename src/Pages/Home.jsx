import About from "./About";
import Banner from "./Banner";
import ServiceDescription from "./ServiceDescription";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <ServiceDescription/>
            <Services/>
        </div>
    );
};

export default Home;