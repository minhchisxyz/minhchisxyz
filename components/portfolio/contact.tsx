
export default function Contact () {
  return (
      <section id="contact" className="py-24">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Have a question or a project idea? I&apos;d love to hear from you.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
                  Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/10 transition-all"
                    placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
                  Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                    htmlFor="message"
                    className="block text-gray-200 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/10 transition-all"
                    placeholder="Your message..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                    type="submit"
                    className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
};