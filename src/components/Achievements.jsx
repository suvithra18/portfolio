function Achievements() {

  const achievements = [
    {
      title: "Best Performer Award",
      description:
        "Recognizedfor outstanding contributions and excellence in technical training and mentoring.",
      icon: "🏆",
    },
  ];

  return (
    <section
  id="achievements"
  className="py-6 px-6 bg-[#020617]"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-10">

      <h2 className="text-5xl md:text-5xl font-bold text-cyan-400">
        Achievement
      </h2>
      <div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
      <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-lg leading-7">
        Achievements reflecting excellence in training and professional contributions.
      </p>

    </div>

    {/* Achievement Card */}
    <div className="flex justify-center">

      {achievements.map((item, index) => (

        <div
          key={index}
          className="
          relative overflow-hidden
          rounded-2xl
          border border-cyan-500/20
          bg-gradient-to-br
          from-[#081120]
          via-[#020617]
          to-[#0f172a]
          p-6
          max-w-2xl
          w-full
          hover:-translate-y-2
         
           hover:border-cyan-400
  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
          transition-all duration-300
          shadow-[0_0_25px_rgba(6,182,212,0.10)]
          "
        >

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="flex items-center gap-5">

            {/* Icon */}
            <div
              className="
              w-16 h-16
              rounded-2xl
              bg-cyan-500/10
              border border-cyan-500/20
              hover:-translate-y-2
         
           hover:border-cyan-400
  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              flex items-center justify-center
              text-3xl
              shrink-0
              "
            >
              {item.icon}
            </div>

            {/* Text */}
            <div>

              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-7 text-sm">
                {item.description}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
  );
}

export default Achievements;