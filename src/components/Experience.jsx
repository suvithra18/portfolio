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
  "Created and delivered a Full Stack curriculum for 150+ learners, aligning training with industry requirements.",
"Engineered 20+ project-based learning workflows using Spring Boot, React, and Django to strengthen practical exposure.",
"Planned structured assessments and capstone evaluation systems to improve learner performance tracking and placement readiness.",
]
  },

  {
    role: "Full Stack Trainer and Developer",
    company: "Login360",
    duration: "Aug 2024 - Jul 2025",
    location: "Coimbatore · On-site",
   points: [
    "Built CRM portal modules for lead management and workflow automation, reducing manual tracking by 30%.",
"Trained 150+ learners through structured Full Stack Development programs across multiple batches.",
"Developed and maintained Spring Boot backend modules and REST APIs for scalable web applications.",
  ]
  },

  {
    role: "Senior Software Technical Trainer",
    company: "Xplore IT Corp",
    duration: "Mar 2023 - Jul 2024",
    location: "Coimbatore · On-site",
    points: [
  "Conducted industry-focused software development training for 100+ learners, emphasizing project-based learning.",
  "Led evaluation of 30+ capstone projects, improving system design quality and reducing architectural gaps.",
  "Enforced coding standards and review processes to improve overall code quality and maintainability.",
]
  },

  {
    role: "Java Developer",
    company: "Predfut Technologies Pvt Ltd",
    duration: "Aug 2022 - Dec 2022",
    location: "Coimbatore · Remote",
    points: [
      "Enhanced Spring Boot backend modules and REST APIs, reducing API response times by 25%.",
"Optimized MySQL database operations for faster query execution and improved data processing efficiency.",
"Executed debugging and testing processes with cross-functional teams, reducing production issues during deployment cycles.",
  ]
  },

  {
    role: "Software Technical Trainer",
    company: "AdroIT Technologies",
    duration: "Jan 2020 - Jul 2022",
    location: "Coimbatore",
    points: [
      "Trained 500+ students in Java, SQL, HTML, CSS, and JavaScript, improving technical proficiency and project readiness.",
"Conducted 40+ workshops and hackathons, increasing hands-on learning participation and engagement.",
"Created structured mentoring programs that improved student project completion rates and career readiness."

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
    <section
      id="experience"
      className="py-8 px-4 md:px-6 bg-[#050816]"
    >
      <div className="w-full mx-auto">

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

        {/* Responsive Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (

            <div
              key={index}
              className="
                relative overflow-hidden
                rounded-3xl
                border border-cyan-500/30
                bg-gradient-to-br
                from-[#081120]
                via-[#020617]
                to-[#0f172a]
                p-4 md:p-6
                min-h-[380px]
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
              <div className="flex items-start gap-3 mb-4">

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                    flex items-center justify-center
                    shrink-0
                  "
                >
                  <Briefcase
                    className="text-cyan-400"
                    size={20}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-7">
                    {exp.role}
                  </h3>

                  <p className="text-cyan-400 text-sm mt-1">
                    {exp.company}
                  </p>
                </div>

              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Calendar size={16} />
                <span>{exp.duration}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>

              {/* Points */}
              <ul className="mt-4 space-y-3 text-sm text-slate-300">

                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 leading-6"
                  >
                    <span className="text-cyan-400 mt-1">
                      •
                    </span>

                    <span>{point}</span>
                  </li>
                ))}

              </ul>

              {/* Bottom Glow Line */}
              <div className="mt-auto pt-5">

                <div
                  className="
                    h-[3px]
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-cyan-300
                    to-transparent
                    shadow-[0_0_15px_rgba(34,211,238,0.8)]
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