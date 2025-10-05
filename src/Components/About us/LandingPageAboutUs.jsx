import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';
import AboutImage from '../../assets/images/aboutusImage.svg';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const LandingPageAboutUs = () => {
  return (
    <Container>
      <section className="flex flex-col-reverse md:flex-row items-center md:gap-[300px] justify-center py-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-3xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-white">
            We provide Quranic education through online courses, making it accessible for national and international students. Join us to deepen your understanding of the Quran from the comfort of your home.
          </p>
          <Link to={"/about-us"}>
          <Button className={"mt-6"}>
            Learn More
          </Button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm"
        >
          {/* <img src={AboutImage} alt="About Us" className="w-full h-auto" /> */}
          <Marquee3D />
        </motion.div>
      </section>


    </Container>
  );
};

export default LandingPageAboutUs;



/* eslint-disable @next/next/no-img-element */
// import { cn } from "@/lib/utils"
// import { Marquee } from '../UI/marquee';

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
// ]

// const firstRow = reviews.slice(0, reviews.length / 2)
// const secondRow = reviews.slice(reviews.length / 2)
// const thirdRow = reviews.slice(0, reviews.length / 2)
// const fourthRow = reviews.slice(reviews.length / 2)

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,

// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   )
// }

// export function Marquee3D() {
//   return (
//     <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
//       <div
//         className="flex flex-row items-center gap-4"
//         style={{
//           transform:
//             "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
//         }}
//       >
//         <Marquee pauseOnHover vertical className="[--duration:20s]">
//           {firstRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
//           {secondRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
//           {thirdRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <Marquee pauseOnHover className="[--duration:20s]" vertical>
//           {fourthRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//       </div>

//       <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
//       <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
//       <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
//       <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
//     </div>
//   )
// }


import { cn } from "@/lib/utils"
import { Marquee } from '../UI/marquee';

const reviews = [
  {
    name: "Aisha K.",
    username: "@AishaK",
    body: "Masha'Allah! The Tajweed instruction is clear and incredibly helpful. ",
    img: "https://avatar.vercel.sh/aisha",
  },
  {
    name: "Yusuf M.",
    username: "@YusufM",
    body: "The flexible class times fit perfectly with my work schedule.",
    img: "https://avatar.vercel.sh/yusuf",
  },
  {
    name: "Fatima R.",
    username: "@FatimaR",
    body: "My children love their teacher! They look forward to their weekly lessons and are memorizing Surahs faster than ever.",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "Imran S.",
    username: "@ImranS",
    body: "JazakAllahu Khairan for making Quran education so accessible.",
    img: "https://avatar.vercel.sh/imran",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const thirdRow = reviews.slice(0, reviews.length / 2)
const fourthRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        // Updated styles for better visibility on dark background
        "border-amber-400/30 bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm",
        "shadow-lg shadow-amber-900/10 transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full border border-amber-400/30" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-amber-400/80">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-200">{body}</blockquote>
    </figure>
  )
}

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
  
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Updated gradients with correct colors for your dark theme */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#182F51] to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#182F51] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#182F51] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#182F51] to-transparent"></div>
    </div>
  )
}