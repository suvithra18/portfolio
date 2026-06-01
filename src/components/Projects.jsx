import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Apartment Management System",

    tech: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Tailwind CSS",
    ],

    image: process.env.PUBLIC_URL + "/pro1.png",

    github: "https://github.com/suvithra18/Smart-Apartment-Management-System",

    description: [
      "Developed a full-stack Smart Apartment Management System using React.js, Spring Boot, MySQL, JWT Authentication, and REST APIs with role-based dashboards for Admin, Residents, and Security personnel.",
"Implemented apartment management modules including Resident Management, Visitor Tracking, Complaint Resolution, Parking Management, Payments, Notifications, Delivery Tracking, Analytics, and Audit Logs.",
"Designed a responsive user interface with Tailwind CSS and integrated advanced features such as PDF/Excel exports, email notifications, activity tracking, and secure authentication.",
    ],
  },

  {
    title: "AI Smart Kitchen Management System",

    tech: [
      "Python",
      "Django",
      "AI",
      "SQLite",
      "JWT",
      "DRF",
    ],

    image: process.env.PUBLIC_URL + "/pro2.png",

    github: "https://github.com/suvithra18/AI-Smart-Kitchen-Management-System",

    description: [
      "Built an AI-powered Smart Kitchen Management System with recipe management and intelligent meal planning.",

      "Developed voice assistant support, cost calculation, analytics dashboards, and multilingual commands.",

      "Implemented JWT APIs, inventory tracking, and responsive dashboards for kitchen automation.",
    ],
  },

  {
    title: "CodeGenome AI Platform",

    tech: [
      "Python",
      "Django",
      "AI",
      "SQLite",
      "PyPDF2",
      "ReportLab",
    ],

   image: process.env.PUBLIC_URL + "/pro3.png",

    github: "https://github.com/suvithra18/CodeGenome-AI-Platform",

    description: [
      "Developed an AI-powered student analytics platform for coding skills and placement readiness.",

      "Implemented resume analyzer, mock interview analysis, GitHub integration, and leaderboard ranking.",

      "Built PDF reports, performance dashboards, and AI-based career suggestions.",
    ],
  },

  {
    title: "EmoHealth Analytics Dashboard",

    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
    ],

   image: process.env.PUBLIC_URL + "/pro4.png",

    github: "https://github.com/suvithra18/Power-BI-EmoHealth_Analytics",

    description: [
  "Developed healthcare analytics dashboards for mood and wellness monitoring across 500+ data records.",
  "Implemented 10+ DAX KPIs, forecasting models, and health risk analysis insights.",
  "Created interactive dashboards improving decision-making efficiency by 30%.",
],
  },

  {
    title: "Revenue Leakage Analytics",

    tech: [
      "Power BI",
      "SQL",
      "Python",
      "DAX",
    ],

   image: process.env.PUBLIC_URL + "/pro5.png",

    github: "https://github.com/suvithra18/Power-BI-Revenue-Leakage-Project",

    description: [
  "Built financial dashboards analyzing 1000+ transaction records for revenue leakage detection.",
  "Developed 15+ advanced DAX measures for customer-wise payment risk analysis.",
  "Improved financial visibility and reduced revenue loss identification time by 40%.",
],
  },

  {
    title: "Process Pulse Analytics",

    tech: [
      "Power BI",
      "DAX",
      "KPI",
      "What-If",
    ],

    image: process.env.PUBLIC_URL + "/pro6.png",

    github: "https://github.com/suvithra18/Power-BI-Process-Pulse",

    description: [
  "Developed operations dashboards tracking 20+ workflow KPIs and SLA metrics.",
   "Implemented SLA tracking and bottleneck analysis improving process efficiency by 35%.",
    
    "Designed interactive What-If analysis models for operational optimization decisions.",],
  },
];

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (

    <section
      id="projects"
      className="py-6 px-3 lg:px-6 bg-slate-950 text-white"
    >

      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
      <h2 className="text-5xl md:text-5xl font-bold text-cyan-400 text-center mb-2">
  My Projects
</h2>

<div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>

<p className="text-slate-400 text-lg text-center mb-10">
  Showcasing my work through real-time projects, practical implementations, and innovative solutions
</p>
 {/* GRID */}
        <div className="grid grid-cols-3 gap-6">

          {projects.map((project, index) => (

            <div
  className="
  relative
  rounded-3xl
  overflow-hidden
  border border-cyan-400/30
  bg-[#020617]

  shadow-[0_0_15px_rgba(34,211,238,0.15)]

  hover:-translate-y-2
  hover:border-cyan-400
  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]

  transition-all duration-300

  flex flex-col
  h-full
"
 
>

              {/* IMAGE */}
             <img
  src={project.image}
  alt={project.title}
 className="
  h-52
  w-full
  object-fit
  object-top
  rounded-t-3xl
  bg-slate-900
"
/>

              {/* CONTENT */}
              <div className="p-4">

                {/* TITLE */}
                <h3 className="text-lg font-bold mb-4 leading-7">
                  {project.title}
                </h3>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-5">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="
                        px-2
                        py-1
                        text-xs
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-400/20
                        text-cyan-400
                        hover:-translate-y-2
  hover:border-cyan-400
  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]

  transition-all duration-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">

                  {/* DETAILS BUTTON */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="
                      flex-1
                      py-2
                      rounded-xl
                      bg-cyan-500
                      text-black
                      text-sm
                      font-semibold
                      hover:bg-cyan-400
                      transition-all
                      duration-300
                    "
                  >
                    View Details
                  </button>

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-4
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400
                      hover:bg-cyan-400
                      hover:text-black
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub className="text-lg" />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* SMALL MODAL */}
      {selectedProject && (

        <div
          className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            z-50
            bg-black/40
            px-4
          "
        >

          <div
            className="
              bg-slate-900
              border
              border-cyan-400/20
              rounded-xl
              w-[320px]
              p-4
              relative
              shadow-lg
            "
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="
                absolute
                top-2
                right-3
                text-slate-400
                hover:text-cyan-400
                text-lg
              "
            >
              ✕
            </button>

            {/* TITLE */}
            <h3
              className="
                text-base
                font-bold
                text-cyan-400
                mb-4
                leading-6
                break-words
                pr-5
              "
            >
              {selectedProject.title}
            </h3>

            {/* DESCRIPTION */}
            <ul
              className="
                space-y-3
                max-h-[180px]
                overflow-y-auto
                pr-1
              "
            >

              {selectedProject.description.map((point, index) => (

                <li
                  key={index}
                  className="
                    flex
                    gap-2
                    text-xs
                    text-slate-300
                    leading-6
                  "
                >

                  <span className="text-cyan-400 mt-1">
                    •
                  </span>

                  <span>
                    {point}
                  </span>

                </li>

              ))}

            </ul>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="
                mt-5
                w-full
                py-2
                rounded-lg
                bg-cyan-500
                text-black
                text-sm
                font-semibold
                hover:bg-cyan-400
                transition
              "
            >
              Close
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;