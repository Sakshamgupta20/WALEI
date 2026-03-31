import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publish",
  description:
    "Share your leadership experiences and insights with the WALEI community. Submit your story and inspire others.",
};

export default function PublishPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Share Your Experience
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-500">
              Every leader has a story worth telling. Share yours and inspire
              the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-normal text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
              What We&apos;re Looking For
            </h2>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--gold)" }} className="mt-0.5">&#10003;</span>
                <span>Authentic leadership experiences and personal journeys</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--gold)" }} className="mt-0.5">&#10003;</span>
                <span>Insights that can inspire and educate others</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--gold)" }} className="mt-0.5">&#10003;</span>
                <span>Stories of challenges, transformation, and growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--gold)" }} className="mt-0.5">&#10003;</span>
                <span>Perspectives on the future of your industry or field</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-normal text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
                Submit Your Story
              </h2>

              {/* Personal Information */}
              <div className="space-y-4 mb-6">
                <span className="text-overline text-gray-500">
                  Your Information
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-colors text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Professional Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-colors text-sm"
                      placeholder="CEO, Professor, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-colors text-sm"
                      placeholder="Company or Institution"
                    />
                  </div>
                </div>
              </div>

              {/* Story Information */}
              <div className="space-y-4 mb-6">
                <span className="text-overline text-gray-500">Your Story</span>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-colors text-sm"
                  >
                    <option value="">Select a category</option>
                    <option value="notes-of-future">Notes of Future</option>
                    <option value="notes-of-challenges">Notes of Challenges</option>
                    <option value="notes-to-leaders">Notes to Leaders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="storyTitle" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Story Title *
                  </label>
                  <input
                    type="text"
                    id="storyTitle"
                    name="storyTitle"
                    required
                    className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-colors text-sm"
                    placeholder="A compelling title for your story"
                  />
                </div>

                <div>
                  <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Story / Pitch *
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    rows={6}
                    required
                    className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-colors resize-none text-sm"
                    placeholder="Share your experience, insights, and what you'd like readers to learn from your story..."
                  />
                  <p className="mt-1.5 text-xs text-gray-500">
                    Minimum 200 words. You can also submit a draft or outline.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-5 border-t border-gray-100">
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 text-white rounded-md font-semibold text-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Submit for Review
                </button>
                <p className="mt-3 text-center text-xs text-gray-500">
                  Our editorial team will review your submission and get back to
                  you within 5-7 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
