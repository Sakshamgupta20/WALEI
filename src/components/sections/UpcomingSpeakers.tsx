import { Calendar } from "lucide-react";

const speakers = [
  {
    name: "Prof. Dipankar Chatterji",
    institution: "Indian Institute of Science",
    topic: "Instructing Microbe Genes",
    field: "Molecular Biology",
    date: "February 2026",
  },
  {
    name: "Dr. Shantanu Pathak",
    institution: "CareMother Initiative",
    topic: "Maternal Healthcare Innovation",
    field: "Public Health",
    date: "February 2026",
  },
  {
    name: "Prof. Manjul Bhargava",
    institution: "Princeton University",
    topic: "Mathematics for Social Good",
    field: "Number Theory",
    date: "March 2026",
  },
];

export function UpcomingSpeakers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="border-t border-gray-200 pt-12 mb-16">
          <span
            className="text-xs uppercase tracking-[0.2em] font-bold mb-6 block"
            style={{ color: "var(--teal)" }}
          >
            Upcoming Events
          </span>
          <h2 className="text-5xl font-light mb-6">Featured Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Join us for conversations with leading scientists and researchers
            shaping the future of scientific discourse and policy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <div className="w-28 h-28 bg-gray-400 rounded-full group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-8">
                <span
                  className="text-xs uppercase tracking-[0.2em] font-bold mb-4 block"
                  style={{ color: "var(--teal)" }}
                >
                  {speaker.field}
                </span>

                <h3 className="text-2xl font-light mb-3 group-hover:text-[var(--teal)] transition-colors">
                  {speaker.name}
                </h3>

                <p className="text-gray-600 mb-5">{speaker.institution}</p>

                <p className="text-lg font-medium text-gray-800 mb-6">
                  {speaker.topic}
                </p>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Calendar size={18} />
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
