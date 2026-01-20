import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Publish",
  description:
    "Share your leadership experiences and insights with the WALEI community. Submit your story and inspire others.",
};

export default function PublishPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-walei-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-display-2 md:text-display-1 text-gray-900">
              Share Your Experience
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Every leader has a story worth telling. Share yours and inspire
              the next generation.
            </p>
          </div>
        </Container>
      </section>

      {/* Guidelines */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
              What We&apos;re Looking For
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-walei-gold mt-1">&#10003;</span>
                <span>
                  Authentic leadership experiences and personal journeys
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-walei-gold mt-1">&#10003;</span>
                <span>
                  Insights that can inspire and educate others
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-walei-gold mt-1">&#10003;</span>
                <span>
                  Stories of challenges, transformation, and growth
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-walei-gold mt-1">&#10003;</span>
                <span>
                  Perspectives on the future of your industry or field
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-walei-smoke">
        <Container>
          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-xl shadow-natural p-8 md:p-10">
              <h2 className="font-serif text-xl font-semibold text-gray-900 mb-8">
                Submit Your Story
              </h2>

              {/* Personal Information */}
              <div className="space-y-6 mb-8">
                <h3 className="text-overline text-gray-500">
                  Your Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-walei-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-walei-blue-500 focus:border-transparent transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Professional Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-walei-blue-500 focus:border-transparent transition-colors"
                      placeholder="CEO, Professor, etc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-walei-blue-500 focus:border-transparent transition-colors"
                      placeholder="Company or Institution"
                    />
                  </div>
                </div>
              </div>

              {/* Story Information */}
              <div className="space-y-6 mb-8">
                <h3 className="text-overline text-gray-500">Your Story</h3>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-walei-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="notes-of-future">Notes of Future</option>
                    <option value="notes-of-challenges">
                      Notes of Challenges
                    </option>
                    <option value="notes-to-leaders">Notes to Leaders</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="storyTitle"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Story Title *
                  </label>
                  <input
                    type="text"
                    id="storyTitle"
                    name="storyTitle"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-walei-blue-500 focus:border-transparent transition-colors"
                    placeholder="A compelling title for your story"
                  />
                </div>

                <div>
                  <label
                    htmlFor="story"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Story / Pitch *
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    rows={8}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-walei-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Share your experience, insights, and what you'd like readers to learn from your story..."
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Minimum 200 words. You can also submit a draft or outline.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-gray-100">
                <Button type="submit" variant="primary" size="xl" className="w-full">
                  Submit for Review
                </Button>
                <p className="mt-4 text-center text-sm text-gray-500">
                  Our editorial team will review your submission and get back to
                  you within 5-7 business days.
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
