'use client';
import { motion } from 'framer-motion';

const Footer = ({ personalInfo, footer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} {personalInfo.name}. {footer.copyrightText}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 