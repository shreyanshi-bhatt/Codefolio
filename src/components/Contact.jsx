import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { Analytics } from "@vercel/analytics/react"
import SupabaseCounter from "./supabaseCounter";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { weave_logo } from "../assets";
import { IoDocumentText } from "react-icons/io5";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shreyanshi Bhatt",
          from_email: form.email,
          to_email: "shreyadbhatt154@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary send'
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </div>
      </div>

      <footer className="bg-black-100 text-white py-7 px-4 mt-10 text-center">
        {/* <p className="italic font-bold font-serif blue-text-gradient">"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"</p> */}
        <p className="italic font-bold text-lg mb-5 text-[#915EFF]"><span className="text-white mx-1">"</span>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन <span className="text-white mx-1">~</span> You have the right to perform your duties, but not to the fruits of your actions.<span className="text-white mx-1">"</span></p>
        <p className={styles.sectionSubText}>
          Special thanks to @JavaScript Mastery for his tutorial on "Build and Deploy an Amazing 3D Web Developer Portfolio in React JS"
        </p>
        <div className="mt-5 flex justify-center align-middle items-center gap-3">
          <a href="https://drive.google.com/file/d/1s1j1pYKsI4AJAQ1uNx3RjL8VKJQPspe3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <IoDocumentText className="text-3xl text-sky-200 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/shreyanshi-bhatt-3bab3324b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-600 cursor-pointer" />
          </a>
          <a href="https://github.com/shreyanshi-bhatt" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-white cursor-pointer" />
          </a>
          <a href="https://youtube.com/@shreyanshibhatt?si=imG7GAzltTLXaM_B" target="_blank" rel="noopener noreferrer">
            <IoLogoYoutube className="text-3xl text-red-600 cursor-pointer" />
          </a>
          <a href="https://leetcode.com/u/ShreyanshiB/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-3xl text-yellow-600 cursor-pointer" />
          </a>
          <a href="https://weaveit.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={weave_logo} alt="Weave Logo" className="w-6 h-6" />
          </a>
        </div>
        <h3 className={styles.sectionHeadText}>Thank You</h3>
        <Analytics />
        <SupabaseCounter />
      </footer>
      <p className="mt-3 text-sm text-center">© Shreyanshi Bhatt {new Date().getFullYear()}</p>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
