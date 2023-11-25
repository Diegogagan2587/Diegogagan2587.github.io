const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-white border-2 rounded-xl p-4 flex flex-col gap-3">
      <div className="container h-10 w-full bg-green-100 min-w-[295px] min-h-[220px]">
        {/* images will go here */}
      </div>
      <div className="card-body min-w-[295px] min-h-[288px] border-2">
        <h5 className="card-title font-bold text-3xl text-[#172B4D]">{project.name}</h5>
        <ul>
            <span>{project.company}</span>
            <li>{project.typeOfDev}</li>
            <li>{project.date}</li>
        </ul>
        <p className="card-text">{project.description}</p>
        <ul className="flex">
            {project.technologies.map((technology) => {
                return <li key={technology}>{technology}</li>
            })}
        </ul>
        <button className="border-2 bg-red-100">
            See Project
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;
