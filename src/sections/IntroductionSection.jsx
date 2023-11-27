import SocialMediaBar from '../components/SocialMediaBar';

const IntroductionSection = () => {
  return (
    <section
      id="introduction-section"
      className="p-6 border-t-[36px] w-full bg-white h-screen flex flex-col justify-center items-center
      rounded-bl-[64px] border-2
      bg-[url('./assets/img/header-shapes-mobile@2x.svg')] bg-no-repeat bg-cover
      md:bg-[url('./assets/img/header-shapes-desktop@2x.svg')] md:bg-no-repeat md:bg-cover md:bg-right-bottom
      "
      //style={backgroundStyle}
    >
      <div className="flex flex-col gap-5 max-w-[920px]">
        <h1 className="text-4xl font-bold leading-[52px] text-[#172B4D]">
          Welcome! I'm Diego Vidal.
          <br />
          And I know why you are here!
        </h1>
        <p className="text-base leading-6 text-[#344563]">
          Your time is money so lets go ahead. I'm a seasoned Full-Stack Web
          Developer, adept at crafting dynamic Single Page Applications, robust
          Server Side Rendering, and powerful APIs. Specializing in JavaScript,
          React, Redux, Tailwind-CSS, Ruby on Rails, PostgreSQL, and more, I
          bring over 2,500 hours of hands-on experience in building, testing,
          and debugging software. <br /> check out my work below.
        </p>
        <SocialMediaBar />
      </div>
    </section>
  );
};

export default IntroductionSection;
