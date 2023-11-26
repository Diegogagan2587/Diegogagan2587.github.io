import { useState } from 'react';
import Btn from './Btn';
import Tag from './Tag';
import PopUp from './PopUp';
const ProjectCard = ({ project,index }) => {
  const [popUp, setPopUp] = useState(false);
  const desktopFlexDirection = index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse";
  const handlePopUp = () => {
    console.log('pop up should open or close');
    setPopUp(!popUp);
    console.log('is Popup open?',popUp);
  };
  return (
    <div id='project-card' 
    className={`card bg-white border-2 rounded-xl p-4 flex flex-col ${desktopFlexDirection} 
    sm:items-center gap-3
    max-w-[343px] sm:max-w-[1156px] sm:max-h-[496px]`}>
      <div id='project-img' 
      className="container bg-slate-100 sm:overflow-hidden
      flex items-center justify-center
      h-10 sm:h-full sm:max-h-[448px] w-full sm:w-1/2 min-w-[295px] min-h-[220px] sm:min-w-[220px]
      rounded-md border-2">
         <img 
        src={project.img} 
        alt={`Screenshot of ${project.name}`} 
        className='object-cover sm:object-contain md:object-cover
        w-full h-full rounded-lg'
        /> 
      </div>
      <div id='project-info'
        className="card-body flex flex-col gap-3
        min-w-[295px] sm:min-w-auto sm:w-1/2 min-h-[288px]
      "
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
          <Btn text="See Project" onClick={()=>handlePopUp()}/>
          {popUp && <PopUp project={project} handlePopUp={handlePopUp}/>}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
