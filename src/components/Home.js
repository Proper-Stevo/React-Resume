import { Parallax } from 'react-parallax';
import Nav from 'react-bootstrap/Nav';
import BG1 from "../img/newBG3.jpg";



function Home() {
    return (
    <Parallax className='image' bgImage={BG1} strength={800}>
        <Nav defaultActiveKey="/home" className="flex-column side-nav" id="navBar">
            <Nav.Link href="#home" id="navHome">Home<i className="fa-solid fa-house-chimney fa-2xl"></i></Nav.Link>
            <Nav.Link href="#work" id="navProjects">Projects <i className="fa-solid fa-code-branch fa-2xl"></i></Nav.Link>
            <Nav.Link href="#resume" id="navResume">Resume <i className="fa-regular fa-file-lines fa-2xl"></i></Nav.Link>
            <Nav.Link href="#contact" id="navContact">Contact Me <i className="fa-solid fa-paper-plane fa-2xl"></i></Nav.Link>
        </Nav>
        <div className='contentOne text-center' id='home'>
            <span className='img-txt'><h1>Welcome To Steven's Page!</h1>
                <hr /> A Los Angeles based Full Stack Developer. <br />
                <br />
                <a className='btn btn-secondary mx-4' href="https://drive.google.com/uc?export=download&id=1iV5j5P_et0GTuy0DrwxBGn44veV339_i">
                    Resume
                </a>
                <a className='btn btn-secondary mx-4' href="#contact">
                    Contact
                </a>
                <a href="#aboutMe">
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
                </a>
            </span>
        </div>
    </Parallax>
    )
};

export default Home

