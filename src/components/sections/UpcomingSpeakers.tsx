import { Calendar } from "lucide-react";

const speakers = [
  {
    name: "Prof. Dipankar Chatterji",
    institution: "Indian Institute of Science, Bangalore",
    topic: "Instructing Microbe Genes: Antibiotic Resistance & the Future",
    field: "Molecular Biology",
    date: "February 8, 2026",
  },
  {
    name: "Dr. Gagandeep Kang",
    institution: "Christian Medical College, Vellore",
    topic: "Vaccine Development for the Developing World",
    field: "Virology & Public Health",
    date: "February 22, 2026",
  },
  {
    name: "Prof. Manjul Bhargava",
    institution: "Princeton University",
    topic: "Mathematics, Sanskrit Poetry, and Social Good",
    field: "Number Theory",
    date: "March 8, 2026",
  },
];

export function UpcomingSpeakers() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="border-t border-gray-200 pt-10 mb-10">
          <span className="text-overline" style={{ color: "var(--teal)" }}>
            Upcoming Events
          </span>
          <h2 className="text-2xl md:text-3xl font-light mb-3">Featured Speakers</h2>
          <p className="text-sm text-gray-500 max-w-xl">
            Join us for conversations with leading scientists and researchers
            shaping the future of scientific discourse and policy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <div className="w-20 h-20 bg-gray-400 rounded-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="p-5">
                <span className="text-overline" style={{ color: "var(--teal)" }}>
                  {speaker.field}
                </span>

                <h3 className="text-base font-normal mb-1 group-hover:text-[var(--teal)] transition-colors">
                  {speaker.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">{speaker.institution}</p>

                <p className="text-sm font-medium text-gray-800 mb-4">
                  {speaker.topic}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar size={14} />
                  <span>{speaker.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
