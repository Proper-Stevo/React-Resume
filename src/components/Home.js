import { Parallax } from 'react-parallax';
import space from '../img/backgroundPort.jpg';
import NewNew from '../img/newSpacePhoto.jpg'
import Nav from 'react-bootstrap/Nav';
import BG1 from "../img/newBG3.jpg";



const Home = () => (
    <Parallax className='image' bgImage={BG1} strength={800}>
         <Nav defaultActiveKey="/home" className="flex-column side-nav"  id="navBar">
            <Nav.Link href="#home" id="navHome">Home <i class="fa-solid fa-house-chimney fa-2xl"></i></Nav.Link>
            <Nav.Link href="#work" id="navProjects">Projects <i class="fa-solid fa-code-branch fa-2xl"></i></Nav.Link>
            <Nav.Link href="#resume" id="navResume">Resume <i class="fa-regular fa-file-lines fa-2xl"></i></Nav.Link>
            <Nav.Link href="#contact" id="navContact">Contact Me <i class="fa-solid fa-paper-plane fa-2xl"></i></Nav.Link>
        </Nav>
        <div className='contentOne text-center' id='home'>
            <span className='img-txt'><h1>Welcome To Steven's Page!</h1>
                <hr /> A Los Angeles based Full Stack Developer. <br />
                <br />
                <a className='btn btn-secondary mx-4' href="https://drive.google.com/uc?export=download&id=1dtPi01RSqlHNCkx9yNYaQrh_-BeHQPKz">
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

