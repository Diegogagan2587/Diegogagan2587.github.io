import Btn from '../components/Btn';

const ContactForm = () => {
  return (
    <div className="bg-white">
      <div
        id="contact"
        className="rounded-tl-[68px] bg-[#6070FF] min-h-screen px-6 pt-24 flex flex-col gap-3"
      >
        <h2 className="font-bold text-4xl text-center text-white">
          Contact Me
        </h2>
        <p className="text-xl leading-7 text-center text-[#EBEBFF]">
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it!
        </p>
        <form className='flex flex-col gap-5'>
          <div className="form-group">
            <label htmlFor="name">
              <input type="text" id="name" name="name" placeholder="Name" className='w-full rounded-lg p-2'/>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <input type="email" id="email" name="email" placeholder="email" className='w-full rounded-lg p-2'/>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className='w-full rounded-lg p-2 h-36'
              />
            </label>
          </div>
          <div>
            <Btn type="submit" text="Get in touch" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
