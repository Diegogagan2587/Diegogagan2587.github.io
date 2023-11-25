import SocialMediaBar from '../components/SocialMediaBar';

const IntroductionSection = () => {
  return (
    <section id="introduction-section" className="p-6">
      <div className="border-2">
        <h1 className="text-2xl">I'm Diego, Glad to see you !</h1>
        <p>
          I’m a software developer! I can help you build a product , feature or
          website Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hesitate to contact
          me.
        </p>
        <span>LET'S CONNECT</span>
        <SocialMediaBar />
      </div>
    </section>
  );
};

export default IntroductionSection;
