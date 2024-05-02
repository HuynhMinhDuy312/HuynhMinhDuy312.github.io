import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data.jsx";
import "./header.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile" data-aos="fade-in">
                    <img src={HeaderImage} alt="Header Portrait" />
                </div>
                <h3 data-aos="fade-up">Huỳnh Minh Duy</h3>
                <p data-aos="fade-up">
                    An ReactJs Developer seeks out for jobs. Please contact me
                    via my phone number or email for more details. I am excited
                    to see what&apos;s coming for us to discuss!
                </p>
                <div className="header__cta" data-aos="fade-up">
                    <a href="#contact" className="btn primary">
                        Let&apos;s Discuss
                    </a>
                    <a href="#portfolio" className="btn light">
                        My Work
                    </a>
                </div>
                <div className="header__socials">
                    {data.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
