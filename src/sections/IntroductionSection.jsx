import SocialMediaBar from '../components/SocialMediaBar';
import background from '../assets/img/header-shapes-mobile@2x.svg';

const IntroductionSection = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:   '100%',
  };

  return (
    <section
      id="introduction-section"
      className="p-6 border-t-[36px] w-full bg-white h-screen flex flex-col justify-center items-center
      rounded-bl-[64px] border-2"
      style={backgroundStyle}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold leading-[52px] text-[#172B4D]">I'm Diego.<br/> Glad to see you !</h1>
        <p className='text-base leading-6 text-[#344563]'>
          I’m a software developer! I can help you build a product, feature, or
          website Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hesitate to contact
          me.
        </p >
        <span className='text-base font-medium text-[#7F8CFF]'>LET'S CONNECT</span>
        <SocialMediaBar />
      </div>
    </section>
  );
};

export default IntroductionSection;
