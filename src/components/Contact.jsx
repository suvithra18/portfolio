import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (

   <section
  id="contact"
  className="py-6 px-6 bg-slate-950 text-white"
>
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
     <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-cyan-400 mb-2">
            Contact Me
          </h2>
          <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-slate-400 text-base">
             Feel free to reach out for opportunities, collaborations, or queries.

          </p>
        </div>
    {/* CONTACT CARD */}
    <div
      className="
        glass
        rounded-2xl
        p-6 md:p-8
        border border-cyan-400/10
        hover:-translate-y-1
           
             hover:border-cyan-400
        text-center
        
      "
    >

      {/* HEADING */}
<h3 className="text-3xl font-bold mb-3">
  Let’s Work Together
</h3>

{/* SUBTITLE */}
<p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
  Open to opportunities in Full Stack Development, Technical Training, 
  and Data Analytics roles.
</p>

{/* CONTACT INFO */}
<div className="flex flex-col md:flex-row items-center justify-center gap-10">

  {/* EMAIL */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
      <FaEnvelope />
    </div>

    <div className="text-left">
      <p className="text-slate-400 text-sm">Email</p>
      <p className="font-medium text-white">
        suvithrachithra@gmail.com
      </p>
    </div>
  </div>

  {/* LOCATION */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
      <FaMapMarkerAlt />
    </div>

    <div className="text-left">
      <p className="text-slate-400 text-sm">Location</p>
      <p className="font-medium text-white">
        Udumalpet, Tamil Nadu, India
      </p>
    </div>
  </div>

</div>

      {/* SOCIAL LINKS */}
      <div className="flex justify-center gap-4 mt-6">

        <a
          href="https://github.com/suvithra18"
          target="_blank"
          rel="noreferrer"
          className="
            w-12 h-12
            rounded-full
            border border-cyan-400
            flex items-center justify-center
            text-lg
             hover:bg-cyan-400 hover:text-black
  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
            transition-all duration-300
          "
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/suvithraj"
          target="_blank"
          rel="noreferrer"
          className="
            w-12 h-12
            rounded-full
            border border-cyan-400
            flex items-center justify-center
            text-lg
            hover:bg-cyan-400 hover:text-black
            hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
            transition-all duration-300
          "
        >
          <FaLinkedin />
        </a>

      </div>

    </div>

  </div>
</section>
  );
}

export default Contact;