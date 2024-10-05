import React, { useRef, useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import {
  BookOpen,
  ChevronRight,
  Code,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  Twitter,
  User,
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link as ScrollLink, Element } from 'react-scroll';

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}</span>;
};

const SkillBar = ({ skill, level }) => {
  const barRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: barRef,
    offset: ['start end', 'center center'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={barRef}
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-teal-700 dark:text-teal-300">
          {skill}
        </span>
        <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
          {level}%
        </span>
      </div>
      <div className="w-full bg-teal-200 rounded-full h-2.5 dark:bg-teal-700">
        <motion.div
          className="bg-teal-600 h-2.5 rounded-full dark:bg-teal-500"
          style={{ scaleX, transformOrigin: '0%' }}
        />
      </div>
    </motion.div>
  );
};

const Section = ({ children, id }) => {
  return (
    <Element
      name={id}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Element>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.nav
      className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 p-6 flex flex-col shadow-lg z-50"
      initial={false}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="flex items-center justify-center mb-8"
        onClick={toggleSidebar}
      >
        <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
        <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-teal-500 to-pink-600 dark:from-purple-400 dark:via-teal-300 dark:to-pink-400">
          John Doe
        </span>
      </ScrollLink>
      <div className="flex flex-col space-y-2">
        {['home', 'portfolio', 'skills', 'blog', 'contact'].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-70} // Optional: Adjust scroll position to account for fixed headers
            className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400 cursor-pointer"
            onClick={toggleSidebar}
          >
            {section === 'home' && <Home className="h-5 w-5" />}
            {section === 'portfolio' && <User className="h-5 w-5" />}
            {section === 'skills' && <Code className="h-5 w-5" />}
            {section === 'blog' && <FileText className="h-5 w-5" />}
            {section === 'contact' && <Mail className="h-5 w-5" />}
            <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          </ScrollLink>
        ))}
      </div>
      <div className="mt-auto flex space-x-4">
        <a
          href="#"
          className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </motion.nav>
  );
};

export default function AnimatedPortfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-teal-600 dark:bg-teal-400 z-50"
          style={{ scaleX, transformOrigin: '0%' }}
        />
        <div className="fixed top-4 left-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white dark:bg-gray-800 shadow-md"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>

        {/* Section for Home */}
        <Section id="home">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-teal-500 to-pink-600 dark:from-purple-400 dark:via-teal-300 dark:to-pink-400">
              John Doe
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
              <TypingAnimation text="Web Developer, Designer, and Tech Enthusiast" />
            </p>
            <div className="space-x-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                View Portfolio
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-100 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900"
              >
                Read Blog
              </Button>
            </div>
          </motion.div>
        </Section>

        {/* Section for Portfolio */}
        <Section id="portfolio">
          <h2 className="text-3xl font-bold text-center">My Portfolio</h2>
          {/* Add content for Portfolio */}
        </Section>

        {/* Section for Skills */}
        <Section id="skills">
          <h2 className="text-3xl font-bold text-center">My Skills</h2>
          {/* Add content for Skills */}
        </Section>

        {/* Section for Blog */}
        <Section id="blog">
          <h2 className="text-3xl font-bold text-center">My Blog</h2>
          {/* Add content for Blog */}
        </Section>

        {/* Section for Contact */}
        <Section id="contact">
          <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          {/* Add content for Contact */}
        </Section>
      </main>
    </div>
  );
}
