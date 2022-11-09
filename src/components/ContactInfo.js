import { Parallax } from 'react-parallax';
import firecamp from '../img/backgroundThree 2.jpg'
import env from '../img/email.png'

const ContactInfo = () => (
    <Parallax className='image3' bgImage={firecamp} strength={800}>
        <div className="contact-content" id="contact">
            <div className="contact-text">
                <h1 className="text-center"><img src={env} className="env"/>   Contact Me</h1>
                <form className="px-5 py-1">
                    <div className="form-group ">
                        <label for="name" className="py-1 ">
                            Name:
                        </label>
                        <input
                            value={"name"}
                            name="name"
                            onChange={"handleInputChange"}
                            type="text"
                            placeholder="name"
                            class="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label for="email" className="py-1 ">
                            Email address:
                        </label>
                        <input
                            value={"email"}
                            name="email"
                            onChange={"handleInputChange"}
                            type="email"
                            placeholder="email"
                            class="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label for="message" className="py-1 ">
                            Message:
                        </label>
                        <textarea
                            value={"message"}
                            name="message"
                            onChange={"handleInputChange"}
                            type="text"
                            placeholder="message"
                            class="form-control"
                            rows="3"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={"handleFormSubmit"}
                        class="btn btn-primary mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </Parallax>
);

export default ContactInfo