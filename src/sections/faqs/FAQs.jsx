import  { useEffect } from "react";
import "./faqs.css";
import data from "./data";
import FAQ from "./FAQ";
import Aos from "aos";
import "aos/dist/aos.css";

const FAQs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section id="faqs">
            <h2>Frequently Asked Question</h2>
            <p>
                Here are some questions I usually get. Click to toggle the answer, and if you still
                have some more questions, shoot me a message from the contact section!
            </p>
            <div className="container faqs__container" data-aos="fade-in">
                {data.map((faq) => (
                    <FAQ key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    );
};

export default FAQs;
