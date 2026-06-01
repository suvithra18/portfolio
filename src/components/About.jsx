import {
  FaUsers,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";

function About() {

  const timeline = [
    {
      icon: <FaBriefcase />,
      title: "Professional Experience",
      desc: "5+ years of experience in technical training, full stack development, and mentoring learners across diverse domains.",
    },
    {
      icon: <FaUsers />,
      title: "Industry-Oriented Training",
      desc: "Designed and delivered industry-focused training programs emphasizing real-world applications and job-ready skills.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Curriculum Designer",
      desc: "Developed structured and scalable training curricula aligned with modern technologies and industry standards.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Placement Guidance",
      desc: "Delivered end-to-end placement support including mock interviews, resume building, and career mentoring to ensure successful outcomes.",
    },
  ];

  return (
    <section id="about" className="py-10 px-6 bg-[#050816] text-white">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-2">
          About Me
        </h2>
       <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
        {/* DESCRIPTION */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-slate-300 leading-7 text-sm">
           I am a Senior Software Technical Trainer and Full Stack Developer with 5+ years of experience in Java, Spring Boot, React, Python, and modern web technologies.
          </p>

          <p className="text-slate-400 mt-3 text-sm">
         I specialize in delivering industry-focused training, developing real-world applications, and helping learners build strong technical and problem-solving skills.
          </p>
          </div>
        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-cyan-500/20"></div>

          <div className="space-y-8">

            {timeline.map((item, index) => (

              <div key={index} className="relative flex items-start gap-6">

                {/* ICON */}
                <div className="
                  w-10 h-10
                  rounded-full
                  bg-cyan-500
                  flex items-center justify-center
                  text-black
                  text-lg
                  z-10
                ">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div className="
                  flex-1
                  bg-white/5
                  border  border-cyan-500/30
                  backdrop-blur-md
                  rounded-2xl
                  p-5
                 hover:-translate-y-2
                 hover:border-cyan-400
                  hover:shadow-lg
                  transition
                ">

                  <h3 className="text-lg font-semibold text-cyan-400">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm mt-2 leading-6">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;