import { Parallax } from 'react-parallax';
import space from '../img/backgroundPort.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={space}  strength={800}>
        <div className='content'>
            <span className='img-txt'>Hello A Message Goes Here</span>
        </div>
    </Parallax>
);

export default ImageOne