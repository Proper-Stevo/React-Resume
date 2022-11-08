import { Parallax } from 'react-parallax';
import space from '../img/backgroundPort.jpg'



const Home = () => (
    <Parallax className='image' bgImage={space} strength={800}>
        <div className='contentOne text-center'>
            <span className='img-txt'><h1>Welcome To Stevo's Page!</h1>
                <hr /> A Los Angeles based Full Stack Developer. <br />
                <a className='btn btn-secondary mx-4' href="https://sites.google.com/site/gdocs2direct/">
                    Resume    
                </a>
                <a className='btn btn-secondary mx-4' href="#contact">
                    Contact 
                </a>
            </span>
        </div>
    </Parallax>
);

export default Home

