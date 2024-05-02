
import BAnner from './BAnner';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Products from './Products';
import Team from './Team';
import Choose from './Choose';
import Review from './Review';


const Home = () => {
    return (
        <div>
          
                        <div className='rounded-2xl'>
                        <BAnner></BAnner>
                        <About></About>
                        <Services></Services>
                        <Contact></Contact>
                        <Products></Products>
                        <Team></Team>
                        <Choose></Choose>
                        <Review></Review>
                        </div>
        </div>
    );
};

export default Home;