import './About.css';
import NavBar from '../components/NavBar';
import Title from '../components/Title'

const About = () => (
    <div className="bg-secondary mh-100">
        <Title />
        <NavBar />

        <h1 className="display-4 font-weight-bold text-sm-center p-3 text-white">Meet the Developer</h1>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-sm-8 mb-4">
                    <div className="card border-0 shadow">
                        <img src="./developer.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-2">Shrey Shah</h5>
                            <div className="card-text font-weight-bold text-black-50">Project Lead</div>
                            <p className="mt-3">
                                I am currently employed at Nutanix, Bangalore and working on the project as a hobby.
                                To learn and understand the Web Development nuances and to keep up with the advancements in the field.
                            </p>
                        </div>
                        <div className="justify-content-center text-center">
                            <ul className="social pl-3 pr-3 pb-3 mb-3 list-inline">
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/shrey-shah-661699114/" className="social-link"><i className="bi bi-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/shreyshah97" className="social-link"><i className="bi bi-github"></i></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/ShreySh97130579" className="social-link"><i className="bi bi-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/shrey_shah97/" className="social-link"><i className="bi bi-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/shrey.shah.1023" className="social-link"><i className="bi bi-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
);

export default About;