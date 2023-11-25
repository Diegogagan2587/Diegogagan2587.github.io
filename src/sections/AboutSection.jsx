import Btn from '../components/Btn';
import Skills from '../components/Skills';
import SocialMediaBar from '../components/SocialMediaBar';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center
      h-screen border-2 bg-white rounded-tr-[50px] px-6"
    >
      <div id="mySelf" className="flex flex-col gap-3 border-2">
        <h2 className="font-bold text-4xl text-[#172B4D]">About Myself</h2>
        <p className="text-[#344563]">
          Hello I’m a software developer! I can help you build a product ,
          feature or website. Look through some of my work and experience! If
          you like what you see and have a project you need coded, don’t
          hesitate to contact me.
        </p>
        <SocialMediaBar />
        <div>
          <Btn text="Get my resume" />
        </div>
      </div>

      <div id="skill-list" className='w-full'>
        <Skills />
      </div>
    </section>
  );
};

export default AboutSection;
