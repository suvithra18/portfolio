import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "REST API Design",
      "Microservices","Django",
      
      
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Data Analytics",
    skills: ["Excel", "Power BI", "Data Science", "Machine Learning"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Postman","VS Code","Jupyter Notebook","Eclipse IDE"],
  },
  {
    title: "Deployment & DevOps",
    skills: [
      "Docker",
      "Containerization",
      "CI/CD Basics",
      "Streamlit",
      
    ],
  },
  {
    title: "Training & Mentoring",
    skills: [
      "Technical Mentoring",
      "Curriculum Design",
      "Code Reviews",
      "Interview Preparation",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-8 px-6 bg-[#050816]">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-8">
      <h2 className="text-5xl font-bold text-cyan-400 mb-2">
        Skills
      </h2>
<div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
      <p className="text-slate-400 text-sm">
        Technologies and tools I use to design, build, and mentor across modern software domains.
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {skillGroups.map((group, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          viewport={{ once: true }}
          className="
            bg-white/5
            p-4
            rounded-xl
            backdrop-blur-md
            border border-cyan-400/20
             hover:-translate-y-2
                 hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                transition duration-300
             
            flex flex-col
            gap-3
          "
        >

          {/* Title */}
          <h3 className="text-lg text-cyan-400 font-semibold">
            {group.title}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">

            {group.skills.map((skill, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                className="
                   px-3 py-1
                  rounded-full
                  text-xs
                  border border-cyan-400/20
                  bg-cyan-500/10
                  text-white
                 hover:-translate-y-2
                 hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                transition duration-300
                "
              >
                {skill}
              </motion.div>

            ))}

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
  );
}

export default Skills;