// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Card from "../UI/Card";
// import Container from "../Layout/Container";
// import courseData from "../../Data/courseData.json";
// import FullWidth from "../Layout/FullWidth";
// // import qualities from "../../Data/qualities.json";
// import qualities from "../../Data/Qualities.js";

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
//             Our Popular Courses
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
//                 <Card
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



import React from 'react'

const LandingCoures = () => {
  return (
    <div>LandingCoures</div>
  )
}

export default LandingCoures