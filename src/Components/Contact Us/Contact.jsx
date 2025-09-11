// import React, { useState, useEffect } from 'react';
// import MainLayout from '../Layout/MainLayout';

// const ContactUs = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.getElementById('contact-section');
//     if (element) observer.observe(element);

//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (element) observer.unobserve(element);
//     };
//   }, []);

//   const contactInfo = [
//     {
//       icon: '📱',
//       title: 'WhatsApp',
//       subtitle: 'Quick Response',
//       info: '+92 326 5566969',
//       description: 'Chat with us for instant support',
//       action: 'Chat Now',
//       link: 'https://wa.me/923265566969',
//       color: 'from-green-500 to-green-400'
//     },
//     {
//       icon: '🌐',
//       title: 'Website',
//       subtitle: 'Official Portal',
//       info: 'deeniverse.com',
//       description: 'Explore our courses and resources',
//       action: 'Visit Site',
//       link: 'https://deeniverse.com/',
//       color: 'from-blue-500 to-blue-400'
//     },
//     {
//       icon: '⏰',
//       title: 'Support Hours',
//       subtitle: 'Response Time',
//       info: 'Sun-Thu: 9AM-8PM',
//       description: 'Friday: 2PM-8PM, Saturday: 10AM-6PM',
//       action: 'View Schedule',
//       link: '#schedule',
//       color: 'from-orange-500 to-orange-400'
//     }
//   ];

//   const quickHelp = [
//     { icon: '📚', title: 'Course Info', desc: 'Learn about programs' },
//     { icon: '✅', title: 'Admissions', desc: 'Enrollment guidance' },
//     { icon: '💰', title: 'Fee Structure', desc: 'Payment details' },
//     { icon: '🎓', title: 'Academic Support', desc: 'Learning assistance' }
//   ];

//   return (
//     <MainLayout>
//     <div id="contact-section" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/20 to-orange-400/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//             transition: 'transform 0.3s ease-out'
//           }}
//         />
//         <div 
//           className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-blue-400/10 rounded-full blur-2xl animate-ping"
//           style={{
//             animationDuration: '4s',
//             transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
//             transition: 'transform 0.3s ease-out'
//           }}
//         />
//       </div>

//       <div className="relative z-10 px-6 lg:px-12 py-20">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
//               Contact 
//               <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"> Us</span>
//             </h1>
//             <div className="text-2xl text-orange-400 font-arabic mb-4 animate-pulse">
//               وَقُل رَّبِّ زِدْنِي عِلْماً
//             </div>
//             <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
//               "And say: My Lord, increase me in knowledge" - Ready to begin your Islamic learning journey?
//             </p>
//           </div>
//         </div>

//         {/* Main Contact Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {contactInfo.map((contact, index) => (
//             <div
//               key={index}
//               className={`relative group transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 h-full transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
//                 {/* Hover Glow Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />
                
//                 {/* Card Content */}
//                 <div className="relative z-10">
//                   <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
//                     {contact.icon}
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-white mb-2">{contact.title}</h3>
//                   <p className="text-orange-400 text-sm font-semibold mb-3">{contact.subtitle}</p>
                  
//                   <div className="text-lg font-mono text-slate-300 mb-3 group-hover:text-white transition-colors duration-300">
//                     {contact.info}
//                   </div>
                  
//                   <p className="text-slate-400 text-sm mb-6 leading-relaxed">
//                     {contact.description}
//                   </p>
                  
//                   <a
//                     href={contact.link}
//                     target={contact.link.startsWith('http') ? '_blank' : '_self'}
//                     rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
//                     className={`inline-flex items-center space-x-2 bg-gradient-to-r ${contact.color} text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}
//                   >
//                     <span>{contact.action}</span>
//                     <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </a>
//                 </div>

//                 {/* Floating particles for hovered card */}
//                 {hoveredCard === index && (
//                   <div className="absolute inset-0 pointer-events-none">
//                     {[...Array(5)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping"
//                         style={{
//                           left: `${20 + i * 15}%`,
//                           top: `${20 + i * 15}%`,
//                           animationDelay: `${i * 0.2}s`
//                         }}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Quick Help Section */}
//         <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">How We Can Help You</h2>
//             <p className="text-slate-300 text-lg">Quick assistance for all your needs</p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {quickHelp.map((help, index) => (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-slate-700/30 rounded-xl p-6 text-center transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
//                   {help.icon}
//                 </div>
//                 <h4 className="text-white font-semibold mb-2">{help.title}</h4>
//                 <p className="text-slate-400 text-sm">{help.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main CTA Section */}
//         <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
//           <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-12 max-w-4xl mx-auto">
//             <h3 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Islamic Learning Journey?</h3>
//             <p className="text-slate-300 text-lg mb-8 leading-relaxed">
//               Join hundreds of students who have transformed their lives through authentic Islamic education. 
//               Our expert teachers are here to guide you every step of the way.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <a
//                 href="https://wa.me/923265566969?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20learn%20more%20about%20DeeNiverse%20Academy%20courses."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group bg-gradient-to-r from-green-500 to-green-400 text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green-500/50 flex items-center space-x-3"
//               >
//                 <span className="text-xl">💬</span>
//                 <span>Start WhatsApp Chat</span>
//                 <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </a>
              
//               <a
//                 href="https://deeniverse.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3"
//               >
//                 <span className="text-xl">🌐</span>
//                 <span>Explore Courses</span>
//                 <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                 </svg>
//               </a>
//             </div>
            
//             <div className="mt-8 text-slate-400">
//               <p className="text-sm">
//                 <span className="text-orange-400 font-semibold">Response Time:</span> Usually within 2-4 hours during business hours
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Tips */}
//         <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
//           <div className="bg-gradient-to-r from-orange-500/10 to-orange-400/5 border border-orange-500/20 rounded-2xl p-8">
//             <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
//               <span className="text-orange-400 mr-3">💡</span>
//               Quick Contact Tips
//             </h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h5 className="text-orange-400 font-semibold mb-3">For Faster Assistance, Include:</h5>
//                 <ul className="space-y-2 text-slate-300">
//                   <li className="flex items-center space-x-3">
//                     <span className="text-green-400">✓</span>
//                     <span>Your name and education level</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <span className="text-green-400">✓</span>
//                     <span>Course you're interested in</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <span className="text-green-400">✓</span>
//                     <span>Preferred class timings</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <span className="text-green-400">✓</span>
//                     <span>Specific questions or concerns</span>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h5 className="text-orange-400 font-semibold mb-3">Response Schedule:</h5>
//                 <div className="space-y-2 text-slate-300 text-sm">
//                   <p><strong>Sunday - Thursday:</strong> 9:00 AM - 8:00 PM</p>
//                   <p><strong>Friday:</strong> 2:00 PM - 8:00 PM (After Jummah)</p>
//                   <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </MainLayout>
//   );
// };

// export default ContactUs;

import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MessageSquare, BookOpen, Share2 , Check } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const contactInfo = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'WhatsApp',
      subtitle: 'Instant Support',
      info: '+92 326 5566969',
      description: 'Get quick answers to your questions',
      action: 'Chat Now',
      link: 'https://wa.me/923265566969',
      bg: 'bg-[#366AB7]/10',
      border: 'border-[#366AB7]/30'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      subtitle: 'Detailed Inquiries',
      info: 'support@deeniverse.com',
      description: 'For comprehensive questions and feedback',
      action: 'Send Email',
      link: 'mailto:support@deeniverse.com',
      bg: 'bg-[#182F51]',
      border: 'border-[#182F51]/50'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Hours',
      subtitle: 'Support Availability',
      info: 'Sun-Thu: 9 AM-8 PM',
      description: 'Friday: 2 PM-8 PM, Saturday: 10 AM-6 PM',
      action: 'View Schedule',
      link: '#schedule',
      bg: 'bg-[#C0A34E]/10',
      border: 'border-[#C0A34E]/30'
    }
  ];

  const quickHelp = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Course Info', desc: 'Program details and curriculum' },
    { icon: <Share2 className="w-6 h-6" />, title: 'Admissions', desc: 'Enrollment process guidance' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'Fee Structure', desc: 'Payment plans and options' },
    { icon: <Phone className="w-6 h-6" />, title: 'Support', desc: 'Technical and academic help' }
  ];

  return (
    <MainLayout>
      <div id="contact-section" className="relative min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#366AB7]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-[#C0A34E]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#366AB7] text-white rounded-full shadow-md mb-4 tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#C0A34E] mx-auto my-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              "And say: My Lord, increase me in knowledge" - Ready to begin your Islamic learning journey?
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-full p-8 rounded-xl border ${contact.border} ${contact.bg} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full ${hoveredCard === index ? 'bg-[#C0A34E] text-white' : 'bg-[#366AB7]/20 text-[#C0A34E]'} transition-colors duration-300`}>
                      {contact.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{contact.title}</h3>
                  <p className="text-[#C0A34E] text-sm font-semibold mb-3 text-center">{contact.subtitle}</p>
                  
                  <div className="text-lg font-medium text-gray-300 mb-3 text-center group-hover:text-white transition-colors duration-300">
                    {contact.info}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
                    {contact.description}
                  </p>
                  
                  <div className="text-center">
                    <a
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`inline-flex items-center justify-center space-x-2 ${hoveredCard === index ? 'bg-[#C0A34E]' : 'bg-[#366AB7]'} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      <span>{contact.action}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help Section */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '600ms' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">How We Can Help You</h2>
              <p className="text-gray-300">Quick assistance for all your needs</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {quickHelp.map((help, index) => (
                <div
                  key={index}
                  className={`bg-[#1a3258] backdrop-blur-sm border border-[#366AB7]/30 rounded-xl p-6 text-center transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#366AB7]/20 p-3 rounded-lg text-[#C0A34E]">
                      {help.icon}
                    </div>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{help.title}</h4>
                  <p className="text-gray-400 text-sm">{help.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main CTA Section */}
          <div className={`bg-[#1a3258] rounded-2xl p-12 border border-[#366AB7]/30 shadow-lg max-w-5xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '1100ms' }}>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Islamic Learning Journey?</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                Join hundreds of students who have transformed their lives through authentic Islamic education. 
                Our expert teachers are here to guide you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/923265566969?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20learn%20more%20about%20your%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] hover:from-[#D8B75A] hover:to-[#C0A34E] text-[#182F51] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </a>
                
                <a
                  href="/courses"
                  className="flex items-center justify-center bg-transparent hover:bg-[#366AB7]/10 text-white border-2 border-[#366AB7] hover:border-[#C0A34E] font-bold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Courses
                </a>
              </div>
            </div>
          </div>

          {/* Contact Tips */}
          <div className={`bg-gradient-to-r from-[#366AB7]/10 to-[#C0A34E]/10 border border-[#366AB7]/20 rounded-2xl p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '1300ms' }}>
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-[#C0A34E] mr-3">💡</span>
              Quick Contact Tips
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-[#C0A34E] font-semibold mb-3">For Faster Assistance, Include:</h5>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Your name and education level",
                    "Course you're interested in",
                    "Preferred class timings",
                    "Specific questions or concerns"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#C0A34E] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[#C0A34E] font-semibold mb-3">Response Schedule:</h5>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#C0A34E] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Sunday - Thursday</p>
                      <p className="text-sm">9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#C0A34E] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Friday</p>
                      <p className="text-sm">2:00 PM - 8:00 PM (After Jummah)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#C0A34E] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-sm">10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
