const ProjectCard = ({ project }) => {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.liveVersion} className="btn btn-primary">
            Go to project
            </a>
        </div>
        </div>
    );
};
export default ProjectCard;