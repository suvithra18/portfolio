import { FaUsers, FaProjectDiagram, FaChalkboardTeacher, FaStar } from "react-icons/fa";

function Expertise() {

  const stats = [
    {
      number: "2000+",
      label: "Students Trained",
      icon: <FaUsers />,
    },
    {
      number: "50+",
      label: "Projects Mentored",
      icon: <FaProjectDiagram />,
    },
    {
      number: "5",
      label: "Workshops",
      icon: <FaChalkboardTeacher />,
    },
    {
      number: "95%",
      label: "Satisfaction",
      icon: <FaStar />,
    },
  ];

  const methods = [
    "Practical Learning",
    "Real-Time Projects",
    "Mock Interviews",
    "Placement Guidance",
  ];

  return (
    <section className="py-10 px-6 bg-[#020617]">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-cyan-400">
            Training Impact
          </h2>
          <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-lg">
           Delivering hands-on training and real-world mentoring for better learning outcomes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mb-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                group
                p-5
                rounded-2xl
                border border-cyan-500/20
                bg-white/5
                backdrop-blur-lg
                text-center
                hover:-translate-y-2
                 hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                transition duration-300
              "
            >

              {/* Icon */}
              <div className="text-cyan-400 text-2xl mb-2 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl font-bold text-white">
                {item.number}
              </h3>

              {/* Label */}
              <p className="text-slate-400 text-sm mt-1">
                {item.label}
              </p>

            </div>
          ))}

        </div>

        {/* Methodology */}
        <div className="text-center mt-6">

          <h3 className="text-4xl font-semibold text-cyan-400 mb-2">
            Training Methodology
          </h3>
          <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <div className="flex flex-wrap justify-center gap-3">

            {methods.map((method, index) => (
              <div
                key={index}
                className="
                  px-5 py-2
                  rounded-full
                  text-sm
                  border border-cyan-400/20
                  bg-cyan-500/10
                  text-white
                 hover:-translate-y-2
                 hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                transition duration-300
                "
              >
                {method}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Expertise;