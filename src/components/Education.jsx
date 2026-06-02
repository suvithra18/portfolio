function Education() {

  const educationData = [
    {
      short: "M.E",
      degree: "Computer Science Engineering",
      college: "Hindusthan College of Engineering & Technology",
      grade: "Currently Pursuing",
      year: "2026 - 2028",
    },
    {
      short: "B.E",
      degree: "Computer Science Engineering",
      college: "P.A.College of Engineering & Technology",
      grade: "First Class",
      year: "2015 - 2019",
    },
    {
      short: "HSC",
      degree: "12TH Standard",
      school: "Srinivasa Vidhyalaya Matriculation Higher SecondarySchool",
      grade: "84%",
      year: "2014 - 2015",
    },
  ];

  return (
    <section
      id="education"
      className="flex items-center bg-[#020617] px-4 pt-16 pb-8"
    >

      <div className="max-w-6xl mx-auto w-full">

        {/* Title */}
         <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-cyan-400 mb-2">
            Education
          </h2>
         <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-slate-400 text-base">
             Academic Qualifications

          </p>
        </div>
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {educationData.map((edu, index) => (

            <div
              key={index}
              className="
              relative overflow-hidden
              rounded-3xl
              border border-cyan-500/30
              bg-gradient-to-br from-[#081120] via-[#020617] to-[#0f172a]
              p-6
              h-[270px]
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              transition-all duration-300
              shadow-[0_0_30px_rgba(6,182,212,0.10)]
              "
            >

              {/* Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

              {/* Short */}
              <h1 className="text-3xl font-bold text-cyan-400">
                {edu.short}
              </h1>

              {/* Degree */}
              <h3 className="mt-6 text-lg font-semibold text-white leading-snug">
                {edu.degree}
              </h3>

              {/* College / School */}
              <p className="mt-4 text-slate-300 text-sm leading-6">
                {edu.college || edu.school}
              </p>

              {/* Grade */}
              <p className="mt-5 text-cyan-300 text-sm font-medium">
                Grade: {edu.grade}
              </p>

              {/* Year */}
              <p className="mt-2 text-slate-400 text-sm">
                {edu.year}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;