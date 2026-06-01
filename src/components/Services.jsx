function Services() {

  const services = [
     {
    title: "Full Stack Java",
    description:
      "Comprehensive training in Java, Spring Boot, REST APIs, MySQL, Microservices, Docker, and React with real-time project development.",
    icon: "☕",
  },
  {
    title: "Full Stack Python",
    description:
      "Hands-on Full Stack training using Python, Django, REST APIs, frontend integration, and deployment concepts.",
    icon: "🐍",
  },
  {
    title: "Data Analyst",
    description:
      "Training in data analysis using Excel, SQL, Power BI, Python, and modern data visualization techniques.",
    icon: "📊",
  },
    {
      title: "Project Mentoring",
      description:
        "Guidance for academic and real-time projects with architecture planning, development support, and best practices.",
      icon: "📚",
    },
    {
      title: "Placement Preparation",
      description:
        "End-to-end placement support including technical interview preparation, coding practice, aptitude training, and mock interviews.",
      icon: "🎯",
    },
    {
      title: "Workshop & Bootcamps",
      description:
        "Conducting workshops, bootcamps, and seminars on trending software technologies and tools.",
      icon: "🚀",
    },
  ];

  return (
    <section
      className="pt-6 pb-2 px-6 bg-[#020617]"
    >

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-2">
          Services
        </h2>
        <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-6 text-lg">
          From learning to placement — complete support to build, practice, and succeed in tech careers.   </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="
              relative overflow-hidden
              rounded-3xl
              border border-cyan-400/20
              bg-gradient-to-br
              from-[#081120]
              via-[#020617]
              to-[#0f172a]
              p-5
              hover:-translate-y-2
              hover:border-cyan-400
              transition-all duration-500
              shadow-[0_0_30px_rgba(6,182,212,0.10)]
              "
            >

              {/* Glow */}
              <div className="
                absolute -top-10 -right-10
                w-40 h-40
                bg-cyan-500/10
                blur-3xl
                rounded-full
              "></div>

              {/* Header Row */}
<div className="flex items-center gap-4 mb-4">

  {/* Icon */}
  <div className="
    w-14 h-14
    rounded-xl
    bg-cyan-500/10
    border border-cyan-400/20
    hover:-translate-y-2
  hover:border-cyan-400
    flex items-center justify-center
    text-2xl
    shrink-0
  ">
    {service.icon}
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold text-white leading-6">
    {service.title}
  </h3>

</div>
              {/* Description */}
              <p className="text-slate-300 leading-7 text-sm">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;