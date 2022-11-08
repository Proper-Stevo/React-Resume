import { Parallax } from 'react-parallax';
import mountain from '../img/woods.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Starwars from '../img/starwars.jpg'
import Space from '../img/systembade.png';
import Resume from '../img/resume.jpg';
import Pines from '../img/nationalPark.jpeg';
import Bank from '../img/bank.jpeg';
import Store from '../img/store.jpg'

const cardArray = [
    {
        project: 'Space-Invaders',
        url: 'https://stormy-sands-64982.herokuapp.com/',
        gbUrl: 'https://github.com/Proper-Stevo/SpaceInvaders',
        imgSrc: Space,
        description: 'Space Project'
    },
    {
        project: 'Resume Creator',
        url: 'https://fierce-ravine-29010.herokuapp.com/',
        gbUrl: 'https://github.com/cindyung56/resume-creator',
        imgSrc: Resume,
        description: 'Resume Creator made fun'
    },
    {
        project: 'Pondersa Pines',
        url: 'https://proper-stevo.github.io/ThePonderosaPines/',
        gbUrl: 'https://github.com/Proper-Stevo/ThePonderosaPines',
        imgSrc: Pines,
        description: 'A national park finder'
    },
    {
        project: 'Mobile Bank',
        url: 'https://easybankdemosb.netlify.app',
        gbUrl: 'https://github.com/Proper-Stevo/EasyBank',
        imgSrc: Bank,
        description: 'Front End Mentor Project'
    }, 
    {
        project: 'Store-Redux',
        url: 'https://floating-reef-85992.herokuapp.com/',
        gbUrl: 'https://github.com/Proper-Stevo/Store-Redux',
        imgSrc: Store,
        description: 'A store that uses Redux to checkout items and utilizes the count measures'
    },
    {
        project: 'Star-Wars API',
        url: 'https://sb-starwarsapi.netlify.app',
        gbUrl: 'https://github.com/Proper-Stevo/Star-Wars-API',
        imgSrc: Starwars,
        description: 'Star Wars API that gives information on planets, people and ships'
    }
]

const Projects = () => (
    <Parallax className='image2' bgImage={mountain} strength={800}>
        <div className='contentProjects' id='work'>
            <span className='img-txt'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {cardArray.map((item) => (
                        <Col>
                            <Card key={item.project} className='uno pop-out-card with-transform'>
                                <Card.Img variant="top" src={item.imgSrc} className='card-img'/>
                                <Card.Body className='text-center'>
                                    <Card.Title>{item.project}</Card.Title>
                                    <Card.Text className='card-txt'>
                                        <a class="card-text btn fa-solid fa-earth-americas" href={item.url} > Demo</a>
                                        <a class="card-text btn fa-brands fa-github" href={item.gbUrl}> github </a>
                                         <br />
                                         {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </span></div>
    </Parallax>
);

export default Projects

