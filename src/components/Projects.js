import { Parallax } from 'react-parallax';
import mountain from '../img/woods.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const cardArray = [
    {
        project: 'Space-Invaders',
        url: 'https://stormy-sands-64982.herokuapp.com/',
        gbUrl: 'https://github.com/Proper-Stevo/SpaceInvaders',
        imgSrc: '../img/systembade',
        description: 'Space Project'
    },
    {
        project: 'Resume Creator',
        url: 'https://fierce-ravine-29010.herokuapp.com/',
        gbUrl: 'https://github.com/cindyung56/resume-creator',
        imgSrc: '../img/resume',
        description: 'Resume Creator made fun'
    },
    {
        project: 'Pondersa Pines',
        url: 'https://proper-stevo.github.io/ThePonderosaPines/',
        gbUrl: 'https://github.com/Proper-Stevo/ThePonderosaPines',
        imgSrc: '../img/nationalPark',
        description: 'A national park finder'
    },
    {
        project: 'Mobile Bank',
        url: 'https://easybankdemosb.netlify.app',
        gbUrl: 'https://github.com/Proper-Stevo/EasyBank',
        imgSrc: '../img/bank',
        description: 'Front End Mentor Project'
    }, 
    {
        project: 'Store-Redux',
        url: 'https://floating-reef-85992.herokuapp.com/',
        gbUrl: 'https://github.com/Proper-Stevo/Store-Redux',
        imgSrc: '',
        description: 'A store that uses Redux to checkout items and utilizes the count measures'
    },
    {
        project: 'Star-Wars API',
        url: 'https://sb-starwarsapi.netlify.app',
        gbUrl: 'https://github.com/Proper-Stevo/Star-Wars-API',
        imgSrc: '',
        description: 'Star Wars API that gives information on planets, people and ships'
    }
]

const Projects = () => (
    <Parallax className='image2' bgImage={mountain} strength={800}>
        <div className='content'>
            <span className='img-txt'>Hello A Message Goes Here
                <Row xs={1} md={2} className="g-4">
                    {cardArray.map((item) => (
                        <Col>
                            <Card key={item.project} className='uno'>
                                <Card.Img variant="top" src={item.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{item.project}</Card.Title>
                                    <Card.Text className='card-txt'>
                                        <a class="fa-solid fa-earth-americas" href={item.url}></a>
                                        <a class="fa-brands fa-github" href={item.gbUrl}></a>
                                         
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

