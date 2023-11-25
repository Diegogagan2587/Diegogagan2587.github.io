const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-white border-2 rounded-xl p-4 flex flex-col gap-3">
      <div className="container h-10 w-full bg-green-100 min-w-[295px] min-h-[220px]">
        {/* images will go here */}
      </div>
      <div className="card-body min-w-[295px] min-h-[288px] border-2">
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
