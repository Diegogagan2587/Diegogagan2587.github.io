import Btn from '../components/Btn';
import Skills from '../components/Skills';
import SocialMediaBar from '../components/SocialMediaBar';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col sm:flex-row items-center justify-center py-28
      min-h-screen border-2 bg-white rounded-tr-[50px] px-6 gap-6"
    >
      <div
        id="mySelf"
        className="flex flex-col gap-3
      sm:max-w-[447px] md:w-2/5"
      >
        <h2 className="font-bold text-4xl text-[#172B4D]">About Myself</h2>
        <p className="text-[#344563]">
          Hello I’m a software developer! I can help you build a product ,
          feature or website. Look through some of my work and experience! If
          you like what you see and have a project you need coded, don’t
          hesitate to contact me.
        </p>
        <SocialMediaBar />
        <div>
          <a href="https://drive.google.com/file/d/1rckQXpJjK18qrsFbAi8FhVgk4NnHTGtJ/view?usp=sharing">
            <Btn text="Get my resume" />
          </a>
        </div>
      </div>

      <div
        id="skill-list"
        className="w-full 
      sm:max-w-[684px] md:w-3/5"
      >
        <Skills />
      </div>
    </section>
  );
};

export default AboutSection;
