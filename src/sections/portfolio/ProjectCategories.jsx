import { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectCategories = ({ categories, handleClick }) => {
    const [activeCategory, setActiveCategory] = useState("all");

    const handleChangeCategory = (activeCat) => {
        setActiveCategory(activeCat);
        handleClick(activeCat);
    };

    return (
        <div className="portfolio__categories">
            {categories.map((category) => (
                <CategoryButton
                    key={category}
                    category={category}
                    className={`btn cat__btn ${
                        activeCategory === category ? "primary" : "white"
                    }`}
                    handleChangeCategory={handleChangeCategory}
                />
            ))}
        </div>
    );
};

export default ProjectCategories;
