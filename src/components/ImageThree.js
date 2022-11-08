import { Parallax } from 'react-parallax';
import firecamp from '../img/backgroundThree 2.jpg'

const ImageThree = () => (
    <Parallax className='image3' bgImage={firecamp}  strength={800}>
        <div className='content'>
            <span className='img-txt'>Hello A Message Goes Here</span>
        </div>
    </Parallax>
);

export default ImageThree