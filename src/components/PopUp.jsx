import Tag from './Tag';
import Btn from './Btn';
import CloseIcon from '../assets/icons/close-popup-button.png'
import SeeProjectIcon from '../assets/icons/see-live-icon.png'
import SeeCodeIcon from '../assets/icons/see-source-icoin.png'

const PopUp = ({ project, handlePopUp }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md min-h-screen
    px-4
    "
    >
      <div className="bg-white rounded-lg p-4 z-10 flex flex-col gap-4">
        <div className='flex justify-between items-center p-1'>
          <h3 className="text-3xl font-bold text-[#172B4D] ">{project.name}</h3>
          <button onClick={() => handlePopUp()}>
            <img src={CloseIcon} alt="Close Icon" />
          </button>
        </div>

        <div className="flex items-center py-2 font-semibold text-sm">
          <span className="text-[#344563]">{project.company}</span>
          <ul className="flex list-disc gap-7 text-[#7A869A] pl-5">
            <li>{project.typeOfDev}</li>
            <li>{project.date}</li>
          </ul>
        </div>

        <div className="container h-10 w-full bg-green-100 min-w-[295px] min-h-[220px]">
          <img
            src={project.img}
            alt={`Screenshot of ${project.name}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <p className="text-[#344563]">{project.descriptionDesk}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => {
            return <Tag key={technology} text={technology} />;
          })}
        </div>
        <div className="flex items-center justify-center gap-2">
          <Btn text="See Live" icon={SeeProjectIcon} />
          <Btn text="See Source" icon={SeeCodeIcon} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
