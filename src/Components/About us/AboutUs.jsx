// import React from "react";
// import {
//   BookOpen,
//   Users,
//   Shield,
//   Heart,
//   Globe,
//   Target,
//   Scale,
//   UserCheck,
// } from "lucide-react";
// import MainLayout from "../Layout/MainLayout";
// import { Highlighter } from "../UI/highlighter";

// const AboutUs = () => {
//   return (
//     <MainLayout>
//       <main className="bg-gradient-to-b from-[#182F51] to-[#0f1f3a] text-white min-h-screen">
//         {/* Hero Section: Introduction */}
//         <section className="relative py-28 px-6 text-center overflow-hidden">
//           <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/36704/pexels-photo.jpg')] bg-cover bg-center opacity-10"></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-[#182F51]/90 to-[#182F51]"></div>
//           <div className="relative max-w-5xl mx-auto">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] bg-clip-text text-transparent">
//                 Welcome to Deeniverse Academy
//               </span>
//             </h1>
//             <div className="w-24 h-1 bg-[#C0A34E] mx-auto my-8"></div>
//             <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
//               Our academy is founded upon the timeless principles of the
//               Farewell Sermon (Khutbah al-Wada') of Prophet Muhammad ﷺ—a
//               universal charter for humanity that guides our every endeavor.
//             </p>
//           </div>
//         </section>

//         {/* The Last Sermon Explained */}
//         <section className="py-20 px-6 max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               <Highlighter action="underline" color="#FF9800">
//                 The Prophet's ﷺ Final Message
//               </Highlighter>
//             </h2>
//             <p className="text-lg text-gray-300 max-w-4xl mx-auto">
//               Delivered during his final Hajj on the plains of Arafat, the
//               Farewell Sermon was not just a speech but a declaration of rights,
//               ethics, and justice for all time. Its core teachings form the
//               bedrock of our academy.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Card 1: Sanctity */}
//             <div className="bg-[#1a3258]/80 p-6 rounded-xl border border-[#366AB7]/30 space-y-3">
//               <Shield className="w-8 h-8 text-[#C0A34E]" />
//               <h3 className="text-xl font-semibold">
//                 Sanctity of Life & Property
//               </h3>
//               <p className="text-gray-400">
//                 The sermon established that every person's life, property, and
//                 honor are sacred and inviolable.
//               </p>
//             </div>
//             {/* Card 2: Equality */}
//             <div className="bg-[#1a3258]/80 p-6 rounded-xl border border-[#366AB7]/30 space-y-3">
//               <Users className="w-8 h-8 text-[#C0A34E]" />
//               <h3 className="text-xl font-semibold">Equality of Mankind</h3>
//               <p className="text-gray-400">
//                 It declared all of humanity equal, erasing distinctions of
//                 race or status, with piety being the only criterion for honor.
//               </p>
//             </div>
//             {/* Card 3: Brotherhood */}
//             <div className="bg-[#1a3258]/80 p-6 rounded-xl border border-[#366AB7]/30 space-y-3">
//               <Heart className="w-8 h-8 text-[#C0A34E]" />
//               <h3 className="text-xl font-semibold">Brotherhood</h3>
//               <p className="text-gray-400">
//                 It cemented the bond of brotherhood among Muslims, emphasizing
//                 unity and mutual support.
//               </p>
//             </div>
//             {/* Card 4: Women's Rights */}
//             <div className="bg-[#1a3258]/80 p-6 rounded-xl border border-[#366AB7]/30 space-y-3">
//               <UserCheck className="w-8 h-8 text-[#C0A34E]" />
//               <h3 className="text-xl font-semibold">Dignity of Women</h3>
//               <p className="text-gray-400">
//                 The Prophet ﷺ commanded kindness and respect towards women,
//                 affirming their rights and dignity.
//               </p>
//             </div>
//             {/* Card 5: Justice */}
//             <div className="bg-[#1a3258]/80 p-6 rounded-xl border border-[#366AB7]/30 space-y-3">
//               <Scale className="w-8 h-8 text-[#C0A34E]" />
//               <h3 className="text-xl font-semibold">Economic Justice</h3>
//               <p className="text-gray-400">
//                 It abolished usury (riba) and all forms of economic
//                 exploitation to ensure a just and fair society.
//               </p>
//             </div>
//             {/* Card 6: Guidance */}
//             <div className="bg-[#1a3258]/80 p-6 rounded-xl border border-[#366AB7]/30 space-y-3">
//               <BookOpen className="w-8 h-8 text-[#C0A34E]" />
//               <h3 className="text-xl font-semibold">Eternal Guidance</h3>
//               <p className="text-gray-400">
//                 He ﷺ left behind the Qur’an and his Sunnah as the ultimate
//                 sources of guidance to prevent believers from going astray.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Callout Quote */}
//         <section className="py-20 px-6">
//           <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#C0A34E]/20 to-transparent p-8 rounded-2xl border-l-4 border-[#C0A34E]">
//             <blockquote className="text-xl md:text-2xl italic text-gray-200 leading-loose">
//               "All mankind is from Adam and Eve. An Arab has no superiority
//               over a non-Arab, nor a non-Arab has any superiority over an Arab;
//               also a white has no superiority over a black, nor a black has
//               any superiority over a white - except by piety and good action."
//             </blockquote>
//             <cite className="block text-right mt-4 text-gray-400 not-italic">
//               — Prophet Muhammad ﷺ, The Farewell Sermon
//             </cite>
//           </div>
//         </section>

//         {/* Core Values, Mission & Vision */}
//         <section className="py-20 px-6 max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Core Values */}
//             <div className="space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold">
//                 <Highlighter action="underline" color="#FF9800">
//                   Our Core Values
//                 </Highlighter>
//               </h2>
//               <p className="text-gray-300">
//                 The Farewell Sermon is the source of our ethos. We are
//                 committed to embedding its values into our curriculum and
//                 culture:
//               </p>
//               <ul className="space-y-3 text-gray-300">
//                 <li className="flex items-center gap-3">
//                   <Scale className="w-5 h-5 text-[#C0A34E]" />
//                   <strong>Justice:</strong> Upholding fairness and equity in all
//                   our interactions.
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Users className="w-5 h-5 text-[#C0A34E]" />
//                   <strong>Equality:</strong> Creating an inclusive environment
//                   where every student is valued.
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Heart className="w-5 h-5 text-[#C0A34E]" />
//                   <strong>Respect:</strong> Fostering mutual respect for the
//                   dignity and honor of all.
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <BookOpen className="w-5 h-5 text-[#C0A34E]" />
//                   <strong>Knowledge:</strong> Pursuing authentic knowledge as a
//                   path to piety and good action.
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Globe className="w-5 h-5 text-[#C0A34E]" />
//                   <strong>Brotherhood:</strong> Building a global community of
//                   learners united by faith and purpose.
//                 </li>
//               </ul>
//             </div>

//             {/* Mission & Vision */}
//             <div className="space-y-6 bg-[#1a3258]/80 p-8 rounded-xl border border-[#366AB7]/30">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                   <Highlighter action="underline" color="#FF9800">
//                     Our Mission & Vision
//                   </Highlighter>
//                 </h2>
//                 <p className="text-gray-300">
//                   Our mission is to revive the spirit of the Farewell Sermon by
//                   nurturing a generation of Muslims who are not only
//                   academically proficient but also spiritually grounded and
//                   morally upright. We envision a world where our graduates
//                   become ambassadors of peace, justice, and compassion,
//                   embodying the true message of Islam.
//                 </p>
//               </div>
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                   <Highlighter action="underline" color="#FF9800">
//                     Our Impact
//                   </Highlighter>
//                 </h2>
//                 <p className="text-gray-300">
//                   Through education rooted in these profound principles, we aim
//                   to build a society where peace, fairness, and unity are not
//                   just ideals but lived values. We empower our students to lead
//                   with integrity and contribute positively to their communities
//                   and the world at large.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 px-6 max-w-4xl mx-auto text-center">
//           <div className="bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg">
//             <h2 className="text-2xl md:text-3xl font-bold mb-6">
//               Begin Your Journey With Us
//             </h2>
//             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//               Join a community dedicated to learning and living the timeless
//               message of the Qur'an and Sunnah.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="/courses"
//                 className="inline-block bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] hover:from-[#D8B75A] hover:to-[#C0A34E] text-[#182F51] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 Explore Our Courses
//               </a>
//               <a
//                 href="/contact-us"
//                 className="inline-block bg-transparent hover:bg-[#366AB7]/10 text-white border-2 border-[#366AB7] hover:border-[#C0A34E] font-bold px-8 py-4 rounded-lg transition-all duration-300"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </MainLayout>
//   );
// };

// export default AboutUs;


import React from 'react';
import { BookOpen, GraduationCap, School, Star, Check, Globe, Smartphone, Award } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';
import { Highlighter } from '../UI/highlighter';

const AboutUs = () => {
  return (
    <MainLayout>
      <main className="bg-gradient-to-b from-[#182F51] to-[#0f1f3a] text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-28 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/36704/pexels-photo.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#182F51]/90 to-[#182F51]"></div>
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#366AB7] text-white rounded-full shadow-md mb-4 tracking-wider">
              Inspired by the Last Khutbah ﷺ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] bg-clip-text text-transparent">
                About Our Academy
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#C0A34E] mx-auto my-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Our foundation is built upon the timeless guidance of the Prophet Muhammad ﷺ in his Farewell Sermon — a message of equality, justice, dignity, and unity. 
              We strive to bring these values to life through authentic Islamic education in the modern age.
            </p>
          </div>
        </section>

        {/* Principles of the Farewell Sermon */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <Highlighter action="underline" color="#FF9800">
              Principles of the Last Khutbah ﷺ
            </Highlighter>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#1a3258] p-8 rounded-xl border border-[#366AB7]/30 shadow-lg">
              <h3 className="text-xl font-bold text-[#C0A34E] mb-4">Sanctity of Life & Property</h3>
              <p className="text-gray-300">
                The Prophet ﷺ declared that the life, honor, and property of every Muslim is sacred. Our Academy emphasizes respect, trust, 
                and safeguarding one another’s dignity in all aspects of learning and community life.
              </p>
            </div>
            <div className="bg-[#1a3258] p-8 rounded-xl border border-[#366AB7]/30 shadow-lg">
              <h3 className="text-xl font-bold text-[#C0A34E] mb-4">Equality of Humanity</h3>
              <p className="text-gray-300">
                All mankind is from Adam and Eve. No Arab has superiority over a non-Arab, nor does a white have superiority over a black, 
                except by piety. We build an environment where every student is valued equally.
              </p>
            </div>
            <div className="bg-[#1a3258] p-8 rounded-xl border border-[#366AB7]/30 shadow-lg">
              <h3 className="text-xl font-bold text-[#C0A34E] mb-4">Brotherhood & Unity</h3>
              <p className="text-gray-300">
                The Khutbah reminded Muslims to treat each other as brothers and avoid oppression. 
                Our Academy fosters a culture of care, support, and global unity among learners.
              </p>
            </div>
            <div className="bg-[#1a3258] p-8 rounded-xl border border-[#366AB7]/30 shadow-lg">
              <h3 className="text-xl font-bold text-[#C0A34E] mb-4">Rights of Women</h3>
              <p className="text-gray-300">
                The Prophet ﷺ emphasized dignity and fairness for women. 
                We uphold these values by ensuring equal access to education and opportunities in our programs.
              </p>
            </div>
            <div className="bg-[#1a3258] p-8 rounded-xl border border-[#366AB7]/30 shadow-lg">
              <h3 className="text-xl font-bold text-[#C0A34E] mb-4">Justice & Integrity</h3>
              <p className="text-gray-300">
                The sermon abolished riba (interest) and injustice. Our Academy is committed to transparency, fairness, and ethical teaching practices. 
              </p>
            </div>
            <div className="bg-[#1a3258] p-8 rounded-xl border border-[#366AB7]/30 shadow-lg">
              <h3 className="text-xl font-bold text-[#C0A34E] mb-4">Holding to Qur’an & Sunnah</h3>
              <p className="text-gray-300">
                The Prophet ﷺ left behind the Qur’an and Sunnah as eternal guidance. Our entire curriculum is rooted in these two timeless sources.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <Highlighter action="underline" color="#FF9800">
              Our Mission & Vision
            </Highlighter>
          </h2>
          <div className="bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to carry the light of the Last Khutbah into the hearts of every learner. 
              We aim to nurture a generation that lives by the Qur’an and Sunnah, embodies justice and compassion, 
              and spreads peace and knowledge across the globe.
            </p>
          </div>
        </section>

        {/* Callout Quote */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <blockquote className="bg-[#1a3258] rounded-xl p-10 border border-[#366AB7]/30 shadow-lg italic text-xl text-[#C0A34E] leading-relaxed">
            “All mankind is from Adam and Eve. An Arab has no superiority over a non-Arab, nor a non-Arab over an Arab; 
            a white has no superiority over a black, nor a black over a white — except by piety and good action.”
          </blockquote>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of an Academy inspired by the final message of the Prophet ﷺ. Together, let’s live the principles of the Last Khutbah 
              through knowledge, unity, and devotion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="inline-block bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] hover:from-[#D8B75A] hover:to-[#C0A34E] text-[#182F51] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore our Courses
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent hover:bg-[#366AB7]/10 text-white border-2 border-[#366AB7] hover:border-[#C0A34E] font-bold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default AboutUs;
