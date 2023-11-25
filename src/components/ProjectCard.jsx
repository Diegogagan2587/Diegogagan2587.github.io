import Btn from './Btn';
import Tag from './Tag';
const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-white border-2 rounded-xl p-4 flex flex-col gap-3">
      <div className="container h-10 w-full bg-green-100 min-w-[295px] min-h-[220px]">
        <img 
        src={project.img} 
        alt={`Screenshot of ${project.name}`} 
        className='object-cover w-full h-full rounded-lg'
        />
      </div>
      <div
        className="card-body min-w-[295px] min-h-[288px] border-2
      flex flex-col gap-3"
      >
        <h5 className="card-title font-bold text-3xl text-[#172B4D]">
          {project.name}
        </h5>
        <div className="flex items-center py-2 font-semibold text-sm">
          <span className="text-[#344563]">{project.company}</span>
          <ul className="flex list-disc gap-7 text-[#7A869A] pl-5">
            <li>{project.typeOfDev}</li>
            <li>{project.date}</li>
          </ul>
        </div>
        <p className="card-text text-[#344563]">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => {
            return <Tag key={technology} text={technology} />;
          })}
        </ul>
        <div>
          <Btn text="See Project" />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
