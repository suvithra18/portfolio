function Testimonials() {

  const testimonials = [
    {
      feedback:
        "The training sessions were very practical and easy to understand with real-time examples.",
      role: "Full Stack Learner",
    },
    {
      feedback:
        "Excellent explanation of concepts with hands-on project guidance and interview preparation.",
      role: "Java Student",
    },
    {
      feedback:
        "Interactive teaching methodology helped in understanding frontend and backend development clearly.",
      role: "Python Learner",
    },
  ];

  return (
    <section className="py-10 px-6 bg-[#020617]">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-10">

      <h2 className="text-5xl md:text-5xl font-bold text-cyan-400">
        Learner Feedback
      </h2>
<div className="w-36 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
      <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-lg leading-7">
        Real experiences and feedback from learners shaped through hands-on training, workshops, and career mentoring.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-5">

      {testimonials.map((item, index) => (

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
          hover:-translate-y-2
          
         
           hover:border-cyan-400
  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
          transition-all duration-300
          shadow-[0_0_25px_rgba(6,182,212,0.10)]
          "
        >

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

          {/* Quote */}
          <div className="text-cyan-400 text-2xl mb-1">
            “
          </div>

          {/* Feedback */}
          <p className="text-slate-300 leading-6 text-sm">
            {item.feedback}
          </p>

          {/* Role */}
          <div className="mt-6">

            <h4 className="text-cyan-300 font-semibold text-sm">
              {item.role}
            </h4>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
  );
}

export default Testimonials;