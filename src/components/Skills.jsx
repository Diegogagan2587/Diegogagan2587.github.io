import skills from '../data/skills';
import DropDownIcon from '../assets/icons/Disabledbutton-down-arrow.png'
const Skills = () => {
  return (
    <div id="skills" className="border-2 w-full px-1">
      {skills.map((skill) => {
        return (
          <div key={skill.name} 
          className='px-2'
          >
            <div className='flex justify-between items-center py-2 border-2'>
              <h3 className='font-medium text-xl'>{skill.name}</h3>
              <img src={DropDownIcon} alt="DropDown" />
            </div>
            <ul>
              {skill.list.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
