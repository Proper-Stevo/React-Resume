import { Parallax } from 'react-parallax';
import mountain from '../img/woods.jpg'

const ImageTwo = () => (
    <Parallax className='image2' bgImage={mountain}  strength={800}>
        <div className='content'>
            <span className='img-txt'>Hello A Message Goes Here</span>
        </div>
    </Parallax>
);

export default ImageTwo