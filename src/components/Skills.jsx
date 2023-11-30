import { useState } from 'react';
import skills from '../data/skills';
import DropDownIcon from '../assets/icons/Disabledbutton-down-arrow.png';

const Skills = () => {
  const [skillVisibility, setSkillVisibility] = useState({Languages:true,});

  const toggleListVisibility = (skillName) => {
    setSkillVisibility((prevVisibility) => ({
      ...prevVisibility,
      [skillName]: !prevVisibility[skillName],
    }));
  };

  return (
    <div id="skills" className="w-full px-1">
      {skills.map((skill) => {
        const isListVisible = skillVisibility[skill.name] || false;

        return (
          <div key={skill.name} className="px-2">
            <div id='skills-group-heading'
              className="flex justify-between items-center py-2 cursor-pointer"
              onClick={() => toggleListVisibility(skill.name)}
            >
              <h3 className="font-medium text-xl">{skill.name}</h3>
              <img src={DropDownIcon} alt="DropDown" />
            </div>
            {isListVisible && (
              <ul className="flex flex-col gap-3 py-2
              md:flex-row md:flex-wrap
              ">
                {skill.list.map((item,index) => {
                  return (
                    <li
                     id={`skill-${index}`}
                      key={item.name}
                      className="flex md:flex-col md:w-[122px] md:h-[120px] items-center sm:items-start p-2 bg-[#F7F7F9] rounded-lg gap-4"
                    >
                      <div className="w-12 h-12 bg-slate-500 rounded-full border-2 border-white">
                        <img
                        
                          src={item.icon}
                          alt="Language-Icon"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <p className='font-medium text-[#253858]'>{item.name}</p>
                    </li>
                  );
                })}
              </ul>
            )}
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
