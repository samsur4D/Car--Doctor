
import BAnner from './BAnner';
import About from './About';
import Services from './Services';


const Home = () => {
    return (
        <div>
          
                        <div className='rounded-2xl'>
                        <BAnner></BAnner>
                        <About></About>
                        <Services></Services>
                        </div>
        </div>
    );
};

export default Home;