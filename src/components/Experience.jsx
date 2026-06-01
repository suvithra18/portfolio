import {
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    role: "Full Stack Trainer",
    company: "Priacc Innovations Pvt Ltd.",
    duration: "Jul 2025 - Present",
    location: "Hyderabad · Remote",
    points: [
  "Designed and delivered Full Stack curriculum for 150+ learners.",
  "Engineered 20+ real-time project workflows using Spring Boot, React, and Django.",
  "Created coding assessments, capstone evaluations, and placement preparation modules.",
]
  },

  {
    role: "Full Stack Trainer & Developer",
    company: "Login360",
    duration: "Aug 2024 - Jul 2025",
    location: "Coimbatore · On-site",
   points: [
  "Trained 200+ students across Java, Python, and Web Technologies.",
  "Worked on CRM portal development, lead management, and workflow automation.",
  "Delivered technical interview preparation and placement support sessions.",
]
  },

  {
    role: "Senior Software Technical Trainer",
    company: "Xplore IT Corp",
    duration: "Mar 2023 - Jul 2024",
    location: "Coimbatore · On-site",
    points: [
  "Led curriculum design and training strategy for Full Stack  programs.",
  "Reviewed 30+ capstone projects and provided architecture-level guidance.",
  "Implemented industry-standard coding practices, documentation, and code reviews.",
]
  },

  {
    role: "Java Developer",
    company: "Predfut Technologies Pvt Ltd",
    duration: "Aug 2022 - Dec 2022",
    location: "Coimbatore · Remote",
    points: [
  "Developed backend modules and REST APIs using Spring Boot.",
  "Integrated MySQL database operations and optimized business workflows.",
  "Collaborated with cross-functional teams for debugging, testing, and deployment.",
]
  },

  {
    role: "Software Technical Trainer",
    company: "AdroIT Technologies",
    duration: "Jan 2020 - Jul 2022",
    location: "Coimbatore",
    points: [
  "Trained 500+ students in Java, SQL, HTML, CSS, and JavaScript.",
  "Conducted 40+ coding workshops, hackathons, and technical events.",
  "Provided academic project mentoring and career guidance support.",
]
  },

  {
    role: "Web Designer Intern",
    company: "Appin Coimbatore",
    duration: "Jun 2019 - Dec 2019",
    location: "Coimbatore",
    points: [
  "Designed 10+ responsive web interfaces using HTML, CSS, and Bootstrap.",
  "Converted UI mockups into functional web pages with cross-browser compatibility.",
  "Improved usability, accessibility, and visual consistency across projects.",
]
  },
];

function Experience() {
  return (
    <section id="experience" className="py-8 px-4 bg-[#050816]">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-cyan-400 mb-2">
            Experience
          </h2>
          <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-slate-400 text-base">
            My journey in training, development, and real-world projects
          </p>
        </div>

        {/* GRID (FORCED 3 COLUMNS) */}
        <div className="grid grid-cols-3 gap-4">

          {experiences.map((exp, index) => (

            <div
              key={index}
              className="
  relative overflow-hidden
  rounded-3xl
  border border-cyan-500/30
  bg-gradient-to-br from-[#081120] via-[#020617] to-[#0f172a]
  p-6
  h-[400px]
  flex flex-col
  hover:-translate-y-2
  
           
             hover:border-cyan-400
  transition-all duration-300
  shadow-[0_0_30px_rgba(6,182,212,0.10)]
"
            >

              {/* Glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />

              {/* Header */}
              <div className="flex items-start gap-3 mb-3">

                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                  <Briefcase className="text-cyan-400" size={18} />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400 text-sm mt-1">
                    {exp.company}
                  </p>
                </div>

              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
                <Calendar size={14} />
                <span>{exp.duration}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-1 text-slate-500 text-sm">
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>

              {/* Points */}
              <ul className="mt-1 space-y-1 text-xs text-slate-300">

                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 leading-6">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Moving Light Effect*/}
        <div className="mt-auto pt-1">

  <div
    className="
      h-[3px]
      w-full
      rounded-full
      bg-gradient-to-r
      from-cyan-500
      via-cyan-300
      to-transparent
      shadow-[0_0_12px_rgba(34,211,238,0.7)]
    "
  />

</div>
</div>


          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;