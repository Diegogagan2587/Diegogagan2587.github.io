import skills from '../data/skills';
import DropDownIcon from '../assets/icons/Disabledbutton-down-arrow.png';
const Skills = () => {
  return (
    <div id="skills" className="border-2 w-full px-1">
      {skills.map((skill) => {
        return (
          <div key={skill.name} className="px-2">
            <div className="flex justify-between items-center py-2 border-2">
              <h3 className="font-medium text-xl">{skill.name}</h3>
              <img src={DropDownIcon} alt="DropDown" />
            </div>
            <ul className='flex flex-col gap-3'>
              {skill.list.map((item) => {
                return (
                  <li key={item.name} className="flex items-center p-2 bg-slate-100 rounded-lg">
                    <div className="w-12 h-12 bg-slate-500 rounded-full">
                      <img src={item.icon} alt="Language-Icon"
                      className='w-full h-full object-cover rounded-full'
                      />
                    </div>

                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
