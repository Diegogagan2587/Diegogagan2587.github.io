import Tag from "./Tag";
import Btn from "./Btn";

const PopUp = ({project, handlePopUp}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <button onClick={()=>handlePopUp()}>X</button>
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-3xl font-bold text-[#172B4D]">{project.name}</h3>
          <p className="text-[#344563]">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => {
              return <Tag key={technology} text={technology} />;
            })}
          </div>
          <div className="flex gap-2">
            <Btn text="See Project" />
            <Btn text="See Code" />
          </div>
        </div>
      </div>
    )
};

export default PopUp;
