function Hero() {

  const roles = [
    "Senior Technical Trainer",
    "Full Stack Developer",
    "Data Analyst",
    "Curriculum Designer"
  ];

  return (
    <section
  id="home"
  className="
  relative
  py-12
  bg-[#020617]
  text-white
  px-6 md:px-12
  flex items-center
  overflow-hidden
  "
>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-6 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Small Intro */}
            <div
              className="
              inline-flex items-center gap-3
              px-5 py-2
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/5
              mb-8
              "
            >

              

            </div>

            {/* Name */}
            <h1
              className="
              text-5xl
              md:text-3xl
              font-extrabold
              tracking-tight
              leading-tight
              "
            >
              Hi, I'm{" "}

              <span
                className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                "
              >
                Suvithra J
              </span>

            </h1>

            {/* Animated Roles */}
            <div className="h-20 mt-8 overflow-hidden">

              <div className="animate-roleChange">

                {roles.map((role, index) => (

                  <h2
                    key={index}
                    className="
                    text-2xl
                    md:text-4xl
                    font-semibold
                    text-slate-300
                    h-20
                    flex items-center
                    "
                  >
                    {role}
                  </h2>

                ))}

              </div>

            </div>

            {/* Description */}
            <p
              className="
              mt-6
              text-slate-400
              text-lg
              leading-9
              max-w-4xl
              "
            >
             Empowering learners through practical training, hands-on projects, real-world application development, and career-focused mentoring aligned with industry standards.
            </p>

           

            {/* Buttons */}
            <div className="mt-12 flex gap-5">

              <a
                href="#projects"
                className="
                bg-cyan-500
                hover:bg-cyan-400
                hover:scale-105
                transition-all duration-300
                px-8 py-4
                rounded-2xl
                font-semibold
                text-black
                shadow-[0_0_30px_rgba(6,182,212,0.30)]
                "
              >
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1qkQ6_F6ayzNF9uEZpZNWiUWwzICtIpaA/view?usp=sharing"
                className="
                border border-cyan-400
                hover:bg-cyan-400
                hover:text-black
                hover:scale-105
                transition-all duration-300
                px-8 py-4
                rounded-2xl
                font-semibold
                "
              >
                Download CV
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center md:justify-end md:-mt-20">

            <div className="relative">

              {/* Glow */}
              <div
                className="
                absolute inset-0
                bg-cyan-500/20
                blur-3xl
                rounded-full
                animate-pulse
                "
              ></div>

              {/* Rotating Ring */}
              <div
                className="
                absolute -inset-5
                rounded-full
                border border-cyan-500/20
                animate-spin
                "
                style={{ animationDuration: "12s" }}
              ></div>

              {/* Profile */}
              <div
                className="
                relative
                w-40 h-40
                md:w-56 md:h-56
                rounded-full
                border-4 border-cyan-400
                p-2
                bg-gradient-to-br
                from-[#081120]
                via-[#020617]
                to-[#0f172a]
                shadow-[0_0_40px_rgba(6,182,212,0.20)]
                "
              >

                <img
                  src={process.env.PUBLIC_URL + "/profile.png"}
                  alt="Suvithra"
                  className="
                  w-full h-full
                  rounded-full
                  object-fit-cover
                  "
                />

              </div>

              {/* Floating Badge */}
              <div
                className="
                absolute
                -bottom-5
                left-1/2
                -translate-x-1/2
                px-5 py-2
                rounded-2xl
                border border-cyan-500/20
                bg-[#081120]
                text-cyan-300
                text-sm
                shadow-[0_0_20px_rgba(6,182,212,0.10)]
                "
              >
                5+ Years Experience
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;