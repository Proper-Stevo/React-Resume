import { Parallax } from 'react-parallax';
import space from '../img/backgroundPort.jpg'



const Home = () => (
    <Parallax className='image' bgImage={space} strength={800}>
        <div className='contentOne text-center' id='home'>
            <span className='img-txt'><h1>Welcome To Stevo's Page!</h1>
                <hr /> A Los Angeles based Full Stack Developer. <br />
                <br />
                <a className='btn btn-secondary mx-4' href="https://sites.google.com/site/gdocs2direct/">
                    Resume    
                </a>
                <a className='btn btn-secondary mx-4' href="#contact">
                    Contact 
                </a>
                <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
            </span>
        </div>
    </Parallax>
);

export default Home

