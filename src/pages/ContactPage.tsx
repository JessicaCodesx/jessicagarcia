import { Mail, Github, Linkedin, MapPin, Calendar, MessageCircle } from 'lucide-react'

const ContactPage = () => {

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Currently seeking software engineering opportunities! Interested in collaborating, 
            have questions about my projects, or want to discuss roles? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Get in <span className="text-yellow-500">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to connect? Here are the best ways to reach me:
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:jessicamhaugen14@gmail.com"
              className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 hover:border-yellow-200 border border-gray-200 transition-colors group text-center flex-col"
            >
              <div className="bg-black p-4 rounded-lg mb-4 group-hover:bg-yellow-400 transition-colors">
                <Mail className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <h3 className="font-semibold text-black mb-2">Email</h3>
              <p className="text-gray-600 text-sm">jessicamhaugen14@gmail.com</p>
            </a>

            <a 
              href="https://github.com/JessicaCodesx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 hover:border-yellow-200 border border-gray-200 transition-colors group text-center flex-col"
            >
              <div className="bg-black p-4 rounded-lg mb-4 group-hover:bg-yellow-400 transition-colors">
                <Github className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <h3 className="font-semibold text-black mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm">@JessicaCodesx</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/jessicagarcia5714/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 hover:border-yellow-200 border border-gray-200 transition-colors group text-center flex-col"
            >
              <div className="bg-black p-4 rounded-lg mb-4 group-hover:bg-yellow-400 transition-colors">
                <Linkedin className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <h3 className="font-semibold text-black mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Networking</p>
            </a>
          </div>

          {/* Current Status - Centered */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Current Status</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-yellow-400 mb-2" />
                  <span className="text-sm">London, Ontario, Canada</span>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-8 h-8 text-yellow-400 mb-2" />
                  <span className="text-sm">Actively seeking opportunities</span>
                </div>
                <div className="flex flex-col items-center">
                  <MessageCircle className="w-8 h-8 text-yellow-400 mb-2" />
                  <span className="text-sm">Open to all role types</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">Are you available for work?</h3>
              <p className="text-gray-700">
                Yes! I'm actively seeking software engineering opportunities and available 
                to start immediately. Open to full-time, part-time, and contract positions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">What kind of opportunities interest you?</h3>
              <p className="text-gray-700">
                I'm interested in software engineering roles, internships, collaborative projects, 
                and any opportunities to work with innovative teams on meaningful problems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">Can you work remotely?</h3>
              <p className="text-gray-700">
                Absolutely! I'm experienced with remote collaboration and have the discipline 
                and communication skills needed for distributed teams.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">What's your response time?</h3>
              <p className="text-gray-700">
                I aim to respond to all messages within 24-48 hours. For urgent matters, 
                LinkedIn or email are the best ways to reach me quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to <span className="text-yellow-400">Hire?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm actively seeking software engineering opportunities and excited to contribute 
            to your team. Let's discuss how I can help bring your projects to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jessicamhaugen14@gmail.com"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jessicagarcia5714/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage