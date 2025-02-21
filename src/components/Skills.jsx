'use client';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
      {/* Convert category name to title case */}
      {title.charAt(0).toUpperCase() + title.slice(1).replace(/([A-Z])/g, ' $1')}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = ({ skills }) => {
  // Get all skill categories that have values
  const skillCategories = Object.entries(skills)
    .filter(([_, value]) => Array.isArray(value) && value.length > 0);

  // Calculate grid columns based on number of categories
  const gridCols = skillCategories.length >= 3 ? 3 : skillCategories.length;
  const gridColsClass = gridCols === 1 ? 'md:grid-cols-1' : 
                       gridCols === 2 ? 'md:grid-cols-2' :
                       'md:grid-cols-3';

  if (skillCategories.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Skills & Expertise
          </h2>
          <div className={`grid grid-cols-1 ${gridColsClass} gap-6 max-w-6xl mx-auto`}>
            {skillCategories.map(([category, skillList]) => (
              <SkillCard
                key={category}
                title={category}
                skills={skillList}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 