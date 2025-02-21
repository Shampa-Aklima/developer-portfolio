'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = ({ about }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg dark:prose-invert"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {about.summary}
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h3>
                {about.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-xl font-medium text-gray-800 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{edu.school} • {edu.year}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {about.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={about.image}
                  alt="Developer photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-50" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 