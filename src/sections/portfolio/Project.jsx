import Card from "../../components/Card";

const Project = ({ project }) => {
    return (
        <Card className="portfolio__project">
            <div className="portfolio__project-image">
                <img src={project.image} alt="Portfolio Project" />
            </div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="portfolio__project-cta">
                {project.demo === "No demo" ? (
                    <a href="#" className="btn sm">
                        No Demo
                    </a>
                ) : (
                    <a
                        href={project.demo}
                        className="btn sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </a>
                )}
                {project.github === "No github" ? (
                    <a href="#" className="btn sm primary">
                        No github
                    </a>
                ) : (
                    <a
                        href={project.github}
                        className="btn sm primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                )}
            </div>
        </Card>
    );
};

export default Project;
