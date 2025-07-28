import { GraduationCap, Award, BookOpen, Target, Star, Trophy, MapPin } from 'lucide-react'

const AcademicsPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Academic <span className="text-yellow-400">Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From honours diplomas to prestigious graduate programs - a journey of 
            continuous learning, exceptional performance, and relentless pursuit of knowledge.
          </p>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Educational <span className="text-yellow-500">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* UT Austin */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-8">
                  <div className="bg-black text-white p-8 rounded-lg relative">
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white hidden lg:block"></div>
                    <div className="flex items-center mb-4 lg:justify-end">
                      <MapPin className="w-6 h-6 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-bold">FUTURE</span>
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                      Master of Science, Computer Science
                    </h3>
                    <p className="text-white font-medium mb-2">University of Texas at Austin</p>
                    <p className="text-gray-300 text-sm mb-4">January 2026 - Expected 2028</p>
                    <div className="flex items-center lg:justify-end mb-4">
                      <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-medium">ACCEPTED</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Accepted to one of the top computer science programs in the nation. 
                      Planning to focus on software engineering, distributed systems, and AI applications.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-black mb-3">Why UT Austin?</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Top 10 CS program globally ranked</li>
                      <li>• World-class faculty in AI and systems</li>
                      <li>• Strong industry connections in Texas tech hub</li>
                      <li>• Research opportunities in cutting-edge technology</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Current Bachelor's */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:pl-8">
                  <div className="bg-white border-2 border-yellow-500 p-8 rounded-lg relative">
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white hidden lg:block"></div>
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-6 h-6 text-yellow-500 mr-2" />
                      <span className="text-yellow-500 font-bold">IN PROGRESS</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Honours Bachelor of Computer Science
                    </h3>
                    <p className="text-gray-700 font-medium mb-2">Algoma University</p>
                    <p className="text-gray-600 text-sm mb-4">Expected December 2025</p>
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-black font-medium">Current GPA: 3.53</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Advanced coursework in algorithms, data structures, software engineering, 
                      and system design. Maintaining excellent academic standing while balancing family responsibilities.
                    </p>
                  </div>
                </div>
                <div className="lg:pr-8">
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h4 className="text-lg font-semibold text-black mb-3">Current & Recent Courses</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-medium text-black">Analysis of Algorithms</h5>
                        <p className="text-sm text-gray-600">Advanced algorithmic design and complexity analysis</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-medium text-black">Computer Organization & Architecture</h5>
                        <p className="text-sm text-gray-600">Hardware-software interface and system architecture</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-medium text-black">Computer Networks</h5>
                        <p className="text-sm text-gray-600">Network protocols, distributed systems communication</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-black mb-3">Foundation Highlights</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Data Structures I & II (90%, 82%)</div>
                      <div>• Software Engineering (83%)</div>
                      <div>• OOP Using C++ (80%)</div>
                      <div>• Programming Languages (80%)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Algonquin Diploma */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-8">
                  <div className="bg-yellow-400 text-black p-8 rounded-lg relative">
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black rounded-full border-4 border-white hidden lg:block"></div>
                    <div className="flex items-center mb-4 lg:justify-end">
                      <Award className="w-6 h-6 text-black mr-2" />
                      <span className="text-black font-bold">COMPLETED</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Honours Diploma, Computer Programming
                    </h3>
                    <p className="text-black font-medium mb-2">Algonquin College</p>
                    <p className="text-gray-800 text-sm mb-4">Graduated 2024</p>
                    <div className="flex items-center lg:justify-end mb-4">
                      <Trophy className="w-5 h-5 text-black mr-2" />
                      <span className="text-black font-medium">GPA: 3.9 • Honours Graduate</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      Comprehensive foundation in programming fundamentals, software development 
                      lifecycle, and practical application development. Graduated with highest honours.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-black mb-3">Standout Courses</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-medium text-black">Advanced Database Topics (A)</h5>
                        <p className="text-sm text-gray-600">Complex database design and optimization</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-medium text-black">Enterprise Application Programming (A-)</h5>
                        <p className="text-sm text-gray-600">Large-scale enterprise software development</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-medium text-black">Software Development Project (A)</h5>
                        <p className="text-sm text-gray-600">Full lifecycle software project implementation</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-medium text-black">OOP with Design Patterns (A+)</h5>
                        <p className="text-sm text-gray-600">Advanced object-oriented programming principles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Notable <span className="text-yellow-500">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-black">Academic Excellence</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Graduated Honours from Algonquin College (3.9 GPA)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Maintaining 3.53 GPA in Honours Bachelor's program</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Accepted to top-tier UT Austin CS Master's program</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Dean's List recognition for academic performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-black">Balance & Dedication</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Achieving academic excellence while being a dedicated parent</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Building and deploying personal projects alongside studies</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Mastering time management and efficient learning strategies</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Consistent academic performance across multiple programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Academic <span className="text-yellow-500">Vision</span>
          </h2>
          
          <div className="bg-black rounded-lg p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Areas of Focus & Goals
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-white">Advanced Software Engineering</h4>
                    <p className="text-gray-300 text-sm">Scalable system design and architecture patterns</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-white">Distributed Systems</h4>
                    <p className="text-gray-300 text-sm">Microservices, cloud computing, and system reliability</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-white">Industry Applications</h4>
                    <p className="text-gray-300 text-sm">Real-world problem solving through technology</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Career Vision
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My Master's program at UT Austin will deepen my technical expertise 
                  in advanced software engineering concepts while providing hands-on 
                  experience with cutting-edge technologies and industry best practices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm focused on building the skills needed to architect and develop 
                  large-scale systems that solve meaningful problems, preparing me to 
                  contribute immediately to high-impact development teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-8">
            Learning <span className="text-yellow-500">Philosophy</span>
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p>
              Education, for me, is not just about acquiring knowledge; it's about developing 
              the ability to think critically, solve complex problems, and adapt to an 
              ever-changing technological landscape.
            </p>
            <p>
              Every course, every project, every challenge is an opportunity to push the 
              boundaries of what I thought possible. Whether it's mastering a new algorithm 
              or architecting a complex system, I approach learning with curiosity, 
              persistence, and strategic thinking.
            </p>
            <div className="bg-yellow-400 rounded-lg p-6 text-black">
              <p className="font-medium text-xl">
                "The best way to predict the future is to invent it. The best way to 
                invent it is to deeply understand the fundamentals that make it possible."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcademicsPage