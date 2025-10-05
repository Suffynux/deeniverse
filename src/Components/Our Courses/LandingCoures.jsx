// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Container from "../Layout/Container";
// import courseData from "../../Data/courseData.json";
// import FullWidth from "../Layout/FullWidth";
// // import qualities from "../../Data/qualities.json";
// import qualities from "../../Data/Qualities.js";
// import CourseCard from "../UI/CourseCard.jsx";
// import { Meteors } from "../UI/meteors.jsx";
// import { AnimatedBeam } from "../UI/animated-beam.jsx";
// // Slider settings for responsiveness
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3, // adjust for responsiveness
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: 2 },
//     },
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 1 },
//     },
//   ],
// };
// // Animation variants for course cards
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const LandingCoures = () => {
//   return (
//     <FullWidth>
//       <div className="py-10 ">
//         <Container>
//           <h2 className="text-3xl font-bold mb-4 text-white text-center py-3 pb-5">
//             Explore Our Popular Courses
//           </h2>
//           <Slider {...sliderSettings}>
//             {courseData.map((course, index) => (
//               <motion.div
//                 key={course.id}
                
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="px-3"
//               >
//                 <CourseCard
//                   id={course.id}
//                   title={course.title}
//                   description={course.description}
//                   img={course.image}
//                 />
//               </motion.div>
//             ))}
//           </Slider>

  
//         </Container>
//       </div>

//  {/* Qualities section */}
//  <div className="bg-[#0C1E3C] py-16">
//   <h2 className="text-3xl font-semibold text-center text-white mb-10">
//     What Makes Us Different?
//   </h2>
//   <AnimatedBeam />

//   <motion.div
//     className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-white text-center px-4"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {qualities.map((item, index) => (
//       <motion.div
//         key={index}
//         className="flex flex-col items-center space-y-4"
//         variants={cardVariants}
//         custom={index}
//       >
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-contain"
//         />
//         <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
//         <p className="text-sm md:text-base max-w-xs">{item.description}</p>
//       </motion.div>
//     ))}
//   </motion.div>
// </div>



//     </FullWidth>
//   );
// };

// export default LandingCoures;

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Video, FileText, BookOpen, MessageCircle, Users, Monitor, CalendarCheck } from "lucide-react";
import Container from "../Layout/Container";
import courseData from "../../Data/courseData.json";
import FullWidth from "../Layout/FullWidth";
import qualities from "../../Data/Qualities.js";
import CourseCard from "../UI/CourseCard.jsx";
import { AnimatedBeam } from "../UI/animated-beam.jsx";
import { Highlighter } from "../UI/highlighter.jsx";
import { ShinyButton } from "../UI/shiny-button.jsx";

// Slider settings for responsiveness
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Platform icons with their respective colors
const platforms = [
  { 
    name: "Video Lectures", 
    icon: <Video size={28} strokeWidth={1.5} />,
    color: "#C0A34E",
    description: "Access high-quality lectures"
  },
  { 
    name: "PDF Resources", 
    icon: <FileText size={28} strokeWidth={1.5} />,
    color: "#3B82F6", 
    description: "Downloadable learning materials"
  },
  { 
    name: "Digital Quran", 
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    color: "#10B981", 
    description: "Interactive Quran study tools"
  },
  { 
    name: "WhatsApp Support", 
    icon: <MessageCircle size={28} strokeWidth={1.5} />,
    color: "#25D366", 
    description: "24/7 teacher assistance"
  },
  { 
    name: "Live Classes", 
    icon: <Users size={28} strokeWidth={1.5} />,
    color: "#EC4899", 
    description: "Interactive group sessions"
  },
  { 
    name: "Recorded Sessions", 
    icon: <Monitor size={28} strokeWidth={1.5} />,
    color: "#8B5CF6", 
    description: "Review at your own pace"
  },
  { 
    name: "Flexible Schedule", 
    icon: <CalendarCheck size={28} strokeWidth={1.5} />,
    color: "#F59E0B", 
    description: "Classes that fit your timeline"
  }
];

const LandingCourses = () => {
  // Create refs for container and platform icons
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const platformRefs = useRef(platforms.map(() => React.createRef()));
  const [beamsVisible, setBeamsVisible] = useState(false);

  // Show beams after component mounts for proper ref initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setBeamsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FullWidth>
      <div className="py-10">
        <Container>
          <h2 className="text-3xl font-bold mb-4 text-white text-center py-3 pb-5">
            <Highlighter action="underline" color="#FF9800">
          Explore our Courses
        </Highlighter>{" "}
          
          </h2>
          <Slider {...sliderSettings}>
            {courseData.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="px-3"
              >
                <CourseCard
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  img={course.image}
                />
              </motion.div>
            ))}
          </Slider>
        </Container>
      </div>

      {/* Qualities section */}
      <div className="bg-[#0C1E3C] py-16">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">
          <Highlighter action="underline" color="#FF9800">
           What Makes Us Different?
        </Highlighter>{" "}
         
        </h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-white text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4"
              variants={cardVariants}
              custom={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
              <p className="text-sm md:text-base max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modern connectivity section */}
      <div ref={containerRef} className="relative bg-[#071021] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <Container>
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            
                The{" "}
        <Highlighter action="underline" color="#FF9800">
           Multiple Platforms,
        </Highlighter>{" "}
        makes important{" "}
        <Highlighter action="highlight" color="#FF9800">
        One Experience
        </Highlighter>{" "}
      
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Our Quranic education connects various platforms and tools to create a seamless, integrated learning experience for students worldwide.
          </p>
            <div className="text-center">
      <p className="leading-relaxed">
    
      </p>
    </div>

    

          {/* Platform icons in circle around center */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] mb-8">
            {platforms.map((platform, index) => {
              // Calculate position in a circle
              const angle = (Math.PI * 2 / platforms.length) * index;
              const radius = 180; // Adjust based on your layout
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={platform.name}
                  ref={platformRefs.current[index]}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ 
                    marginLeft: x,
                    marginTop: y,
                  }}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-2" 
                      style={{ backgroundColor: `${platform.color}20`, border: `2px solid ${platform.color}` }}
                    >
                      <div className="text-white" style={{ color: platform.color }}>
                        {platform.icon}
                      </div>
                    </div>
                    <p className="text-white text-sm font-medium">{platform.name}</p>
                    <p className="text-xs text-gray-400 max-w-[120px] text-center">{platform.description}</p>
                  </motion.div>

                  {/* Animated beam from center to this platform */}
                  {beamsVisible && centerRef.current && platformRefs.current[index].current && (
                    <AnimatedBeam
                      containerRef={containerRef}
                      fromRef={centerRef}
                      toRef={platformRefs.current[index]}
                      gradientStartColor={platform.color}
                      gradientStopColor="#C0A34E"
                      pathColor={`${platform.color}30`}
                      pathWidth={1.5}
                      curvature={20}
                      duration={4 + index}
                      delay={index * 0.5}
                    />
                  )}
                </motion.div>
              );
            })}
            
            {/* Connect platforms to each other - selective connections */}
            {beamsVisible && platformRefs.current.map((fromRef, i) => {
              // Only connect some platforms for a cleaner look
              const connectToIndexes = [
                (i + 2) % platforms.length, 
                (i + 4) % platforms.length
              ];
              
              return connectToIndexes.map(j => (
                <AnimatedBeam
                  key={`${i}-${j}`}
                  containerRef={containerRef}
                  fromRef={fromRef}
                  toRef={platformRefs.current[j]}
                  gradientStartColor={platforms[i].color}
                  gradientStopColor={platforms[j].color}
                  pathColor="#ffffff10"
                  pathWidth={1}
                  curvature={50 + (i * 10)}
                  duration={5 + (i * 0.5)}
                  delay={i * 0.3}
                  reverse={i % 2 === 0}
                />
              ));
            })}
          </div>
          
          <div className="text-center">
            <p className="text-white text-lg font-medium mb-6">
              Experience the interconnected world of Quranic education
            </p>
          
                   <ShinyButton className="text-white">  Start Your Journey</ShinyButton>
             
            
          </div>
        </Container>
      </div>
    </FullWidth>
  );
};

export default LandingCourses;