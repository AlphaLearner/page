import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Database,
  Cloud,
  Brain,
  Server,
  Laptop,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    'AI & Machine Learning': [
      'Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing',
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'
    ],
    'Programming Languages': [
      'Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'R', 'MATLAB'
    ],
    'Backend & Databases': [
      'Spring Boot', 'Django', 'Flask', 'Node.js', 'PostgreSQL', 'MySQL', 
      'MongoDB', 'Redis', 'Apache Kafka'
    ],
    'Cloud & DevOps': [
      'AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'CI/CD', 'Terraform'
    ],
    'Frontend & Web': [
      'React', 'Angular', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS'
    ],
    'Electronics & Embedded': [
      'Microprocessors', 'Embedded Systems', 'IoT', 'Digital Signal Processing',
      'Control Systems', 'Circuit Design'
    ]
  };

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tata Consultancy Services (TCS)',
      duration: '2019 - 2023',
      location: 'India',
      description: 'Developed enterprise-level applications and worked on large-scale distributed systems. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built scalable microservices handling millions of requests',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Led a team of 5 developers on critical client projects',
        'Optimized database queries improving performance by 40%'
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const projects = [
    {
      title: 'AI-Powered Recommendation System',
      description: 'Built a machine learning recommendation engine using collaborative filtering and deep learning techniques.',
      tech: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL'],
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Distributed Microservices Platform',
      description: 'Designed and implemented a scalable microservices architecture with Docker and Kubernetes.',
      tech: ['Java', 'Spring Boot', 'Docker', 'Kubernetes'],
      category: 'Backend',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Real-time Data Analytics Dashboard',
      description: 'Created a real-time analytics platform for processing and visualizing large datasets.',
      tech: ['React', 'Node.js', 'MongoDB', 'D3.js'],
      category: 'Full Stack',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'IoT Environmental Monitoring',
      description: 'Developed an IoT system for environmental monitoring using embedded sensors and cloud analytics.',
      tech: ['Arduino', 'Python', 'AWS IoT', 'React'],
      category: 'IoT',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Computer Vision Object Detection',
      description: 'Implemented real-time object detection system using YOLO and OpenCV for industrial applications.',
      tech: ['Python', 'OpenCV', 'YOLO', 'TensorFlow'],
      category: 'AI/ML',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Blockchain Supply Chain Tracker',
      description: 'Built a blockchain-based supply chain tracking system for transparency and authenticity.',
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      category: 'Blockchain',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          style={{
            left: (mousePosition.x / 8) + 100,
            top: (mousePosition.y / 8) + 100,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          style={{
            left: (mousePosition.x / 12) + 200,
            top: (mousePosition.y / 12) + 200,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4 space-y-2">
              {['home', 'about', 'experience', 'projects', 'skills', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform-gpu hover:scale-110 transition-all duration-500 hover:rotate-12 perspective-1000">
              <User className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce delay-500">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Your Name
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in delay-500">
            Software Engineer | MS Computer Science @ CSUSB | Ex-TCS
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-1000">
            Passionate about AI/ML, building scalable systems, and solving complex problems with elegant solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-1500">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              About Me
            </button>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in delay-2000">
            <a href="#" className="text-2xl text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300 hover:-translate-y-1">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-2xl text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300 hover:-translate-y-1">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-2xl text-gray-400 hover:text-green-400 transform hover:scale-125 transition-all duration-300 hover:-translate-y-1">
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Ever since I cracked my first line of code, I knew I wasn't just building programs—I was solving puzzles. 
                I'm the kind of person who sets targets not just to hit them, but to outgrow them.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                My journey kicked off at Tata Consultancy Services (TCS), where I worked from 2019 to 2023. 
                Those four years weren't just about corporate titles—they were about learning how big systems talk, 
                how real-world problems unfold, and how to stay sharp in a fast-paced world.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Today, I bring that same energy into everything I do—whether it's building models, optimizing systems, 
                or just connecting the dots between tech and real-world impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Brain className="w-8 h-8" />, title: 'AI/ML Expert', desc: 'Deep learning and intelligent systems', color: 'from-purple-500 to-pink-500' },
                { icon: <Code className="w-8 h-8" />, title: 'Full Stack', desc: 'End-to-end application development', color: 'from-blue-500 to-cyan-500' },
                { icon: <Cloud className="w-8 h-8" />, title: 'Cloud Native', desc: 'Scalable cloud architectures', color: 'from-green-500 to-teal-500' },
                { icon: <Database className="w-8 h-8" />, title: 'Data Engineering', desc: 'Big data and analytics pipelines', color: 'from-orange-500 to-red-500' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-xl text-blue-400 mb-1">{exp.company}</p>
                        <p className="text-gray-400">{exp.duration} • {exp.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 container mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${project.color} rounded-t-2xl mb-6`}></div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">{project.category}</span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Brain className="w-6 h-6 text-white" />}
                    {index === 1 && <Code className="w-6 h-6 text-white" />}
                    {index === 2 && <Server className="w-6 h-6 text-white" />}
                    {index === 3 && <Cloud className="w-6 h-6 text-white" />}
                    {index === 4 && <Laptop className="w-6 h-6 text-white" />}
                    {index === 5 && <Database className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-8">
            <div className="group bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Master of Science in Computer Science</h3>
                  <p className="text-xl text-blue-400 mb-2">California State University, San Bernardino (CSUSB)</p>
                  <p className="text-gray-400 mb-4">2023 - 2025</p>
                  <p className="text-gray-300 mb-4">Advanced studies focused on AI/ML, distributed systems, and software engineering.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                    <span>• Computation and Complexity Theory</span>
                    <span>• Modern Computer Architecture</span>
                    <span>• Machine Learning</span>
                    <span>• Artificial Intelligence</span>
                    <span>• Data Visualization</span>
                    <span>• Distributed Database Systems</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Electronics and Communications Engineering</h3>
                  <p className="text-xl text-green-400 mb-2">MLRIT (Malla Reddy Institute of Technology)</p>
                  <p className="text-gray-400 mb-4">2015 - 2019</p>
                  <p className="text-gray-300 mb-4">Comprehensive curriculum covering electronics, communications, and embedded systems.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                    <span>• Digital Signal Processing</span>
                    <span>• Microprocessors & Microcontrollers</span>
                    <span>• Embedded Systems and IoT</span>
                    <span>• Control Systems</span>
                    <span>• Data Structures and Algorithms</span>
                    <span>• Artificial Intelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, and ways we can create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="#" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              Get In Touch
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="w-6 h-6" />
              View Resume
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href="#" className="text-3xl text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300">
              <Linkedin className="w-10 h-10" />
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300">
              <Github className="w-10 h-10" />
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-green-400 transform hover:scale-125 transition-all duration-300">
              <Mail className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="relative z-10 container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Your Name. Built with passion for technology and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;