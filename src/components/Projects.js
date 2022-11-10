import { Parallax } from 'react-parallax';
import mountain from '../img/woods.jpg';
import Starwars from '../img/starwars.jpg'
import Space from '../img/systembade.png';
import Resume from '../img/resume.jpg';
import Pines from '../img/nationalPark.jpeg';
import Bank from '../img/bank.jpeg';
import Store from '../img/store.jpg'


const Projects = () => (
    <Parallax className='image2' bgImage={mountain} strength={800}>
        <div className='contentProjects' id='work'>
      
            <span className='img-txt row'>
            <p className='text-center text-light project-title'>Projects</p>
                <figure class="snip1256">
                    <img src={Space} alt="solar system" />
                    <figcaption>
                        <h3>Space Odyssey</h3>
                        <p>A 3D based Solar System, full stack project that includes information on the planets when you select one. </p>
                        <a href='https://stormy-sands-64982.herokuapp.com/' class="read-more">Demo</a>
                        <a href='https://github.com/Proper-Stevo/SpaceInvaders' class="read-more">GitHub</a>
                    </figcaption>
                </figure>
                <figure class="snip1256">
                    <img src={Resume} alt="resume" />
                    <figcaption>
                        <h3>Resume Creator</h3>
                        <p>A React Resume Creator, a simple method to create a resume by answering some questions, fun and interactive. Choose from 4 templates.</p>
                        <a href='https://fierce-ravine-29010.herokuapp.com/' class="read-more">Demo</a>
                        <a href='https://github.com/cindyung56/resume-creator' class="read-more">GitHub</a>
                    </figcaption>
                </figure>
                <figure class="snip1256">
                    <img src={Pines} alt="National Park Badge" />
                    <figcaption>
                        <h3>Ponderosa Pines</h3>
                        <p>A Simple National Park Finder that gives information once you enter a park, give it a try!</p>
                        <a href='https://proper-stevo.github.io/ThePonderosaPines/' class="read-more">Demo</a>
                        <a href='https://github.com/Proper-Stevo/ThePonderosaPines' class="read-more">GitHub</a>
                    </figcaption>
                </figure>
                    <br />
                <figure class="snip1256">
                    <img src={Bank} alt="Mobile Bank App" />
                    <figcaption>
                        <h3>Bank Mobile Responsive</h3>
                        <p>This is a Front-End Mentor Project that showcases great mobile responsive page.</p>
                        <a href='https://easybankdemosb.netlify.app' class="read-more">Demo</a>
                        <a href='https://github.com/Proper-Stevo/EasyBank' class="read-more">GitHub</a>
                    </figcaption>
                </figure>
                <figure class="snip1256">
                    <img src={Store} alt="store" />
                    <figcaption>
                        <h3>Redux Store</h3>
                        <p>A Redux Store brand that was used to demonstrate the ability to use count and create store.</p>
                        <a href='https://floating-reef-85992.herokuapp.com/' class="read-more">Demo</a>
                        <a href='https://github.com/Proper-Stevo/Store-Redux' class="read-more">GitHub</a>
                    </figcaption>
                </figure>
                <figure class="snip1256">
                    <img src={Starwars} alt="Darth Vader" />
                    <figcaption>
                        <h3>Star Wars API</h3>
                        <p>A Star Wars API that gives information on planets, characters, ships and more!</p>
                        <a href='https://sb-starwarsapi.netlify.app' class="read-more">Demo</a>
                        <a href='https://github.com/Proper-Stevo/Star-Wars-API' class="read-more">GitHub</a>
                    </figcaption>
                </figure>
            </span></div>
    </Parallax>
);

export default Projects

