import { Parallax } from 'react-parallax';
import mountain from '../img/woods.jpg';
import Starwars from '../img/starwarsSS.png'
import Space from '../img/spaceSS.png';
import Resume from '../img/resumeSS.png';
import Pines from '../img/NPFSS.png';
import Bank from '../img/bankSS.png';
import Store from '../img/reduxSS.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from '../data/projectsData.json';
import Card from 'react-bootstrap/Card';
import urlBadge from '../img/urlBadge.png';
import gbBadge from '../img/gbBadge.png';
import pokeSearch from '../img/pokemonSS.png';
import secondBG from "../img/newBG2.jpg";

function Projects() {

    const { projectsInfo } = projectsData
    //     // render project image
    function DisplayProject(project) {

        const eachProject = Object.values(project);
        const thisProject = eachProject[0];

        switch (thisProject) {
            case "Ponderosa Pines":
                return <Card.Img className="project-img" src={Pines} alt="National Park Project" key="pines"/>;
            case "Orbital Odyssey":
                return <Card.Img className="project-img" src={Space} alt="Orbital Odyssey Project" key="space"/>;
            case "Resume Creator":
                return <Card.Img className="project-img" src={Resume} alt="Pokemon Data Types" key="resume"/>;
            case "Pokemon Search":
                return <Card.Img className="project-img" src={pokeSearch} alt="Pokemon Project" key="pokemon"/>;
            case "Easy Bank":
                return <Card.Img className="project-img" src={Bank} alt="Easy Bank Project" key="bank"/>;
            case "Star Wars API":
                return <Card.Img className="project-img" src={Starwars} alt="Star wars Project" key="wars" />;
        }
    }
    return (
        <Parallax className='image2' bgImage={secondBG} strength={800}>
            <div className='contentProjects' id='work'>
                <div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" id="theCards">
                    {projectsInfo.map((project, index) => {
                        return (
                            <div className="col">
                                <div className="card h-100" id="theCards">
                                <DisplayProject project={project.title} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{project.title}</h5>
                                            <p className="card-text">{project.description}</p>
                                            <div className='d-flex text-center justify-content-center'>
                                            < a href={project.demo} className='underline'>
                                                <img src={urlBadge} alt="names"/>
                                                <p>Website</p>
                                            </a>
                                            
                                            < a href={project.github} className='underline'>
                                                <img src={gbBadge} alt="github tags"/>
                                                <p>github</p>
                                            </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    })}
                     </div>
                </div >
            </div >
        </Parallax >
    );
};

export default Projects