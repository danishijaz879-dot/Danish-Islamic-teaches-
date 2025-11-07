import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-900 min-h-screen overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center p-6 bg-white/80 shadow-md backdrop-blur sticky top-0 z-50"
      >
        <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">Danish Quran Hub</h1>
        <nav className="space-x-6 text-lg font-semibold">
          <a href="#about" className="hover:text-green-700 transition">About</a>
          <a href="#courses" className="hover:text-green-700 transition">Courses</a>
          <a href="#teachers" className="hover:text-green-700 transition">Teachers</a>
          <a href="#register" className="hover:text-green-700 transition">Register</a>
          <a href="#contact" className="hover:text-green-700 transition">Contact</a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative text-center py-28 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Learn Quran Online with Certified Teachers</h2>
          <p className="text-xl md:text-2xl mb-8 font-light">24/7 Classes | 3 Days Free Demo | All Ages Welcome</p>
          <a href="#register" className="bg-white text-green-700 hover:bg-green-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition">Join Free Demo</a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-8 text-center"
      >
        <h3 className="text-4xl font-bold mb-6 text-green-700">About Danish Quran Hub</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Danish Quran Hub is a trusted online Islamic academy offering Quran and Islamic courses for students worldwide. Our mission is to connect every heart with the Holy Quran through personalized, one-on-one sessions on Zoom and Skype. Flexible schedules, dedicated male & female tutors, and professional teaching methods make learning easy for all ages.
        </p>
      </motion.section>

      {/* Courses Section */}
      <motion.section
        id="courses"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-green-50 text-center"
      >
        <h3 className="text-4xl font-bold mb-12 text-green-700">Our Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {['Noorani Qaida', 'Quran with Tajweed', 'Hifz & Tafseer'].map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform p-6"
            >
              <h4 className="text-2xl font-semibold text-green-700 mb-2">{course}</h4>
              <p className="text-gray-600">Comprehensive lessons to strengthen your Quran reading and understanding skills under expert supervision.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Teachers Section */}
      <motion.section
        id="teachers"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center bg-white"
      >
        <h3 className="text-4xl font-bold mb-12 text-green-700">Meet Our Teachers</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Qari Abdullah", "Ustazah Ayesha", "Qari Imran", "Ustazah Fatima"].map((teacher, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 shadow-md rounded-2xl p-6 transition"
            >
              <h4 className="text-2xl font-semibold text-green-700">{teacher}</h4>
              <p className="text-gray-600">Certified Quran Tutor</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Registration Section */}
      <motion.section
        id="register"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-green-100 text-center"
      >
        <h3 className="text-4xl font-bold mb-8 text-green-700">Online Registration</h3>
        <p className="text-lg mb-6 text-gray-700">Register now to start your 3-day free demo class. No hidden charges.</p>
        <form className="max-w-lg mx-auto bg-white shadow-2xl p-8 rounded-2xl">
          <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 border rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 border rounded" />
          <input type="text" placeholder="WhatsApp Number" className="w-full p-3 mb-4 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded"></textarea>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold w-full transition">Submit</button>
        </form>
      </motion.section>

      {/* Feedback Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white text-center"
      >
        <h3 className="text-4xl font-bold mb-12 text-green-700">Student Feedback</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { name: 'Ahmed', msg: 'The teachers are very kind and knowledgeable. Highly recommended!' },
            { name: 'Sara', msg: 'I learned Quran recitation with proper Tajweed. Alhamdulillah amazing experience!' },
            { name: 'Zain', msg: 'Flexible timing and great learning environment. Loved it!' },
          ].map((fb, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-green-50 shadow-lg rounded-2xl p-6">
              <p className="italic text-gray-700 mb-4">“{fb.msg}”</p>
              <h4 className="font-bold text-green-700">– {fb.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="mb-2">📞 WhatsApp: <a href="https://wa.me/923082536370" className="underline">0308 2536370</a></p>
        <p className="mb-6">Live Classes on Zoom & Skype | 24/7 Flexible Timing | All Ages Welcome</p>
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Danish Quran Hub – All Rights Reserved</p>
      </footer>
    </div>
  );
}
