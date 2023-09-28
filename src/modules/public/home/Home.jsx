import HeroComponent from './components/Hero/Hero';
import WeMakeItEasySection from './components/WeMakeItEasy/WeMakeItEasy';
import NewWaySection from './components/NewWaySection/NewWaySection';
import Testimonials from './components/Testimonials/Testimonials';
import Subscription from './components/Subscription/Subscription';
import LatestProperties from './components/LatestProperties/LatestProperties';

let sectionExampleForRent = {
    title: 'Most Recent Properties For Rent',
    description: 'For Rent',
    buttonText: 'Browse Properties For Rent',
};

let sectionExampleForBuy = {
    title: 'Most Recent Properties For Sale',
    description: 'For Sale',
    buttonText: 'Browse Properties For Sale',
};

const Home = () => {
    return (
        <>
            <HeroComponent />
            <WeMakeItEasySection />
            <NewWaySection />
            <LatestProperties
                section={sectionExampleForBuy}
                endpoint={'for-sale'}
            />
            <LatestProperties
                section={sectionExampleForRent}
                endpoint={'for-rent'}
            />
            <Testimonials />
            <Subscription />
        </>
    );
};

export default Home;
