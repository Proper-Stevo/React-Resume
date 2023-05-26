import { Parallax } from 'react-parallax';
import Space from '../img/spaceSS.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from '../data/projectsData.json';
import Card from 'react-bootstrap/Card';
import urlBadge from '../img/urlBadge.png';
import gbBadge from '../img/gbBadge.png';
import pokeSearch from '../img/pokemonSS.png';
import secondBG from "../img/newBG2.jpg";
import resFront from "../img/resSS.png"

function Projects() {

    const { projectsInfo } = projectsData
       // render project image
    function DisplayProject(project) {

        const eachProject = Object.values(project);
        const thisProject = eachProject[0];

        switch (thisProject) {
            case "South Central With Love":
                return <Card.Img className="project-img" src={resFront} alt="National Park Project" key="pines"/>;
            case "Orbital Odyssey":
                return <Card.Img className="project-img" src={Space} alt="Orbital Odyssey Project" key="space"/>;
            case "Pokemon Search":
                return <Card.Img className="project-img" src={pokeSearch} alt="Pokemon Project" key="pokemon"/>;
        }
    }
    return (
        <Parallax className='image2' bgImage={secondBG} strength={800}>
            <div className='contentProjects' id='work'>
                <div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="theCards">
                    {projectsInfo.map((project, index) => {
                        return (
                            <div className="col" key={index}>
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
                                                <p>Github</p>
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