import { Parallax } from 'react-parallax';
import mountain from '../img/woods.jpg';
import Starwars from '../img/starwarsSS.png'
import Space from '../img/spaceSS.png';
import Resume from '../img/resumeSS.png';
import Pines from '../img/NPFSS.png';
import Bank from '../img/bankSS.png';
import Store from '../img/reduxSS.png';
import '../styling/project.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from '../data/projectsData.json';
import Card from 'react-bootstrap/Card';
import urlBadge from '../img/urlBadge.png';
import gbBadge from '../img/gbBadge.png';


function Projects() {

    const { projectsInfo } = projectsData
    //     // render project image
    function DisplayProject(project) {

        const eachProject = Object.values(project);
        const thisProject = eachProject[0];

        switch (thisProject) {
            case "Ponderosa Pines":
                return <Card.Img className="project-img" src={Pines} alt="National Park Project" />;
            case "Orbital Odyssey":
                return <Card.Img className="project-img" src={Space} alt="Orbital Odyssey Project" />;
            case "Resume Creator":
                return <Card.Img className="project-img" src={Resume} alt="Resume Creator Project" />;
            case "Redux Store":
                return <Card.Img className="project-img" src={Store} alt="Redux Project" />;
            case "Easy Bank":
                return <Card.Img className="project-img" src={Bank} alt="Easy Bank Project" />;
            case "Star Wars API":
                return <Card.Img className="project-img" src={Starwars} alt="Star wars Project" />;
        }
    }
    return (
        <Parallax className='image2' bgImage={mountain} strength={800}>
            <div className='contentProjects' id='work'>
                <span>
                    <ul>
                        {projectsInfo.map((project, index) => {
                            return (
                                <li className="booking-card">
                                    <DisplayProject project={project.title} />
                                    <div className="book-container">
                                        <div className="content">
                                            <button className="btn">{project.title}</button>
                                        </div>
                                    </div>
                                    <div className="informations-container">
                                        <h2 className="title">{project.title}</h2>
                                        <p className="sub-title">{project.description}</p>
                                        <div className="more-information">
                                            <div className="info-and-date-container">
                                                <div className="box info">
                                                    <a href={project.demo} >
                                                        <img src={urlBadge} />
                                                        <p>Website</p>
                                                    </a>
                                                </div>
                                                <div className="box date">
                                                    <a href={project.github}>
                                                        <img src={gbBadge} />
                                                        <p>Github</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })};
                    </ul>
                </span>
            </div>
        </Parallax>
    );
};

export default Projects



