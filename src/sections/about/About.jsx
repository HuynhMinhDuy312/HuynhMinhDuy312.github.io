import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data.jsx";
import "./about.css";
import Card from "../../components/Card.jsx";

const About = () => {
    return (
        <section id="about" data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {data.map((item) => (
                            <Card key={item.id} className="about__card">
                                <span className="about__card-icon">
                                    {item.icon}
                                </span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))}
                    </div>
                    <p>
                        I have started to building projects since I was at 3rd
                        year University. With an experience of 2 years using
                        ReactJs, I am certain that I can build more projects in
                        the future!
                    </p>
                    <p>
                        Hi, my name is Huỳnh Minh Duy from Hồ Chí Minh city,
                        Vietnam. I&apos;m a front-end web developer with a
                        Bachelors degree in Knownledge Engineering. I am looking
                        forward to work with any companies that need a ReactJs
                        developer. For more details, please check out my resume
                        below!
                    </p>
                    <a href={CV} download className="btn primary">
                        Download CV <HiDownload />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
