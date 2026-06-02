import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  {
    title: "Data Analytics",
    provider: "NoviTech R&D Pvt Ltd",
    year: "2025",
    link: "https://www.linkedin.com/in/suvithraj/details/certifications/1771912340510/single-media-viewer/?profileId=ACoAACfaMMcBpjL32GY44j7UiTMR4BJr6VE0e7Y",
  },

  {
    title: "Data Analytics",
    provider: "Nexila TechnologiesNexila",
    year: "2025",
    link: "https://www.linkedin.com/in/suvithraj/details/certifications/1771910599140/single-media-viewer/?profileId=ACoAACfaMMcBpjL32GY44j7UiTMR4BJr6VE0e7Y",
  },

  {
    title: "GenAI Powered Data Analytics Job Simulation",
    provider: "Tata Group - Forage",
    year: "2025",
    link: "https://www.linkedin.com/in/suvithraj/details/certifications/1750498800891/single-media-viewer/?profileId=ACoAACfaMMcBpjL32GY44j7UiTMR4BJr6VE0e7Y",
  },
  {
    title: " Visualizing Data with Microsoft Power BI",
    provider: "Great Learning",
    year: "2024",
    link: "https://www.linkedin.com/in/suvithraj/details/certifications/1750497651103/single-media-viewer/?profileId=ACoAACfaMMcBpjL32GY44j7UiTMR4BJr6VE0e7Y",
  },

  {
    title: " MySQL",
    provider: "Great Learning",
    year: "2023",
    link: "https://www.linkedin.com/in/suvithraj/details/certifications/1750497738921/single-media-viewer/?profileId=ACoAACfaMMcBpjL32GY44j7UiTMR4BJr6VE0e7Y",
  }
];

function Certifications() {
  return (

    <section
  id="certifications"
  className="py-6 px-6 bg-slate-950 text-white"
>
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
     <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-cyan-400 mb-2">
            My Certifications
          </h2>
          <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-slate-400 text-base">
             Verified achievements and professional certifications

          </p>
        </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      {certifications.map((cert, index) => (

        <div
          key={index}
          className="
  glass
  rounded-2xl
  p-5
  border border-cyan-400/30
  hover:-translate-y-1
  hover:border-cyan-400
  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
  transition-all duration-300
  flex flex-col
  justify-between
"
        >

          {/* TOP */}
          <div className="flex items-start gap-4">

            {/* ICON */}
            <div
              className="
                w-12 h-12
                rounded-full
                bg-cyan-500/10
                flex items-center justify-center
                text-cyan-400 text-xl
                shrink-0
              "
            >
              <FaCertificate />
            </div>

            {/* CONTENT */}
            <div className="flex-1">

              <h3 className="text-lg font-bold leading-6">
                {cert.title}
              </h3>

              <p className="text-slate-400 mt-1 text-sm">
                {cert.provider}
              </p>

              <p className="text-cyan-400 text-xs mt-1">
                {cert.year}
              </p>

            </div>

            {/* LINK */}
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              <FaExternalLinkAlt size={14} />
            </a>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
  );
}

export default Certifications;