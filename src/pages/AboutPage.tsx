import { Gamepad2, Palette, BookOpen, Trophy, Heart, Zap } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Beyond the <span className="text-yellow-400">Code</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From competitive gaming to academic excellence, from artistic expression to 
            entrepreneurial leadership - discover the diverse experiences that shape 
            my approach to software engineering.
          </p>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">
            My <span className="text-yellow-500">Journey</span>
          </h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              My path to software engineering isn't traditional, but it's uniquely mine. 
              As a stay-at-home mom who decided to pursue her passion for technology, 
              I've learned that determination and strategic thinking can overcome any obstacle.
            </p>
            <p>
              The journey began when I realized I wanted to build things that matter. 
              While balancing family responsibilities, I threw myself into computer programming 
              at Algonquin College, graduating with honours and a 3.9 GPA. But that was just 
              the beginning.
            </p>
            <p>
              Now, as I complete my Honours Bachelor of Computer Science while maintaining 
              a 3.53 GPA, I'm preparing for the next chapter: a Master's program at the 
              University of Texas at Austin. Every late night study session, every complex 
              algorithm mastered, every project deployed - it's all been leading to this moment.
            </p>
            <p>
              What drives me isn't just the technical challenge (though I love that too), 
              it's the opportunity to create solutions that make a real difference in people's lives. 
              Whether it's building a study assistant to help students succeed or crafting 
              engaging gaming experiences, I believe technology should serve humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            What Makes Me <span className="text-yellow-500">Tick</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gaming & Esports */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <Gamepad2 className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-black">Gaming & Esports</h3>
              </div>
              <p className="text-gray-700 mb-4">
                From 2014-2020, I competed in top Call of Duty tournaments, eventually founding 
                and personally funding my own esports organization. This experience taught me 
                team leadership, strategic thinking, and how to perform under intense pressure.
              </p>
              <p className="text-gray-700 mb-4 text-sm italic">
                These days, you can find me trying my best to climb the ladder in League of Legends! 
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">6+ years competitive COD player (2014-2020)</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Esports organization founder & leader</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Current League of Legends enthusiast</span>
                </div>
              </div>
            </div>

            {/* Art & Creativity */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <Palette className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-black">Art & Expression</h3>
              </div>
              <p className="text-gray-700 mb-4">
                My artistic side keeps me balanced and creative. From painting to exploring tattoo artistry, 
                I believe creativity and technical skills go hand in hand.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Palette className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Painting & visual arts</span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Tattoo artistry exploration</span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Creative problem-solving</span>
                </div>
              </div>
            </div>

            {/* Learning & Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-black">Continuous Learning</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Whether it's diving into a new programming language, exploring game development with Godot, 
                or reading about emerging technologies, I'm always growing.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Technology exploration</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Avid reader</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Self-directed learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Leadership <span className="text-yellow-500">Experience</span>
          </h2>
          
          <div className="bg-black rounded-lg p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  Competitive Gaming & Leadership
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Competing in top Call of Duty tournaments from 2014-2020 and eventually 
                  founding my own personally-funded esports organization taught me invaluable 
                  lessons about leadership, team coordination, and performance optimization. 
                  From recruiting talented players to developing training strategies, I learned 
                  how to build and maintain high-performing teams.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  These skills translate directly to software development: coordinating with 
                  team members, managing project timelines, maintaining high performance 
                  standards, and thinking strategically about problem-solving approaches.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-400">Team Leadership</h4>
                  <p className="text-sm text-gray-300">Recruited, trained, and managed competitive gaming teams</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-400">Strategic Planning</h4>
                  <p className="text-sm text-gray-300">Developed tournament strategies and team preparation protocols</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-400">Performance Analytics</h4>
                  <p className="text-sm text-gray-300">Analyzed gameplay data to improve team performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            My <span className="text-yellow-500">Philosophy</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Purpose-Driven Development</h3>
                  <p className="text-gray-700">
                    Every line of code should serve a purpose. Whether it's helping students study more 
                    effectively or creating engaging entertainment, I believe technology should improve lives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Efficient Excellence</h3>
                  <p className="text-gray-700">
                    Balancing family, academics, and coding has taught me the importance of working smart, 
                    not just hard. Clean, maintainable code isn't just good practice - it's essential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Trophy className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Competitive Spirit</h3>
                  <p className="text-gray-700">
                    My gaming background instilled a drive for continuous improvement and the ability 
                    to perform under pressure - qualities that serve me well in fast-paced development environments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Lifelong Learning</h3>
                  <p className="text-gray-700">
                    From academic achievements to exploring new technologies like game development, 
                    I'm constantly expanding my skillset and pushing my boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why I Do <span className="text-yellow-400">What I Do</span>
          </h2>
          <div className="text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              Every challenge I've faced - from managing a family while pursuing education to 
              leading competitive teams to mastering complex algorithms - has shaped me into 
              a more resilient, creative, and strategic thinker.
            </p>
            <p>
              I bring to software engineering not just technical skills, but a unique perspective 
              informed by diverse experiences. I understand the importance of user experience because 
              I've been the user. I appreciate good team dynamics because I've built and led teams. 
              I value efficient solutions because I've learned to maximize every moment.
            </p>
            <p className="text-yellow-400 font-medium">
              I'm not just building software - I'm crafting solutions that matter, 
              one thoughtful line of code at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage