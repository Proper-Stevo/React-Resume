import { Parallax } from 'react-parallax';
import firecamp from '../img/backgroundThree 2.jpg';
import env from '../img/email.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const ContactInfo = () => (
    <Parallax className='image3' bgImage={firecamp} strength={800}>
        <div className="contact-content" id="contact">
            <div className='contact-display'>Contact Me <img src={env}></img></div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" placeholder="Message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <style type='text/css'>
        {`
        .btn-flat {
            background-color: white;
            color: black;
        }
        .btn-xl {
            padding: 1rem 1rem;
            font-size: 1rem;
        }
            `}
      </style>
      <a href='mailto:steven.barrios92@gmail.com'>
      <Button variant="flat" type="submit" size='xl' className='border border-danger rounded-pill'>
        Submit
      </Button>
      </a>
    </Form>
        </div>
    </Parallax>
);

export default ContactInfo