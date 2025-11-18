import React, { useEffect, useState } from "react";
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { fetchProjects } from '../services/projectServices';
import { Project } from "../types/Project";

export function Projects() {
  // const [projects, setProjects] = useState<Project[]>([]);

  const projects = [
    {
      title: 'TechTrends Learning Ed-Tech Platform',
      description: 'TechTrends Learning is a comprehensive educational technology platform that allows users to generate, access, and evaluate learning materials.',
      image: '/project-images/TechTrends-Learning.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Redux-Toolkit', 'Tailwind'],
      liveUrl: 'https://techtrends-edtech-project.vercel.app/',
      codeUrl: 'https://github.com/MadhusudanDhakad/TechTrends-Edtech-Project'
    },
    {
      title: 'ParuMakeOver - Makeup Artist App',
      description: 'Collaborative task management application with real-time updates, team collaboration, and analytics.',
      image: '/project-images/ParuMakeover.png',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io', 'Zustand'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Developer Portfolio',
      description: 'I build scalable, user-focused web applications with React, Node, and MongoDB. Passionate about creating exceptional digital experiences through clean code and modern technologies.',
      image: '/project-images/developerPortfolio.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST API'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Library Management',
      description: 'The Library Management System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to manage library operations efficiently. The system provides an intuitive interface for admins and users to handle book-related activities seamlessly.',
      image: '/project-images/LibraryManagement.png',
      tags: ['React', 'Express', 'MongoDB', 'Node'],
      liveUrl: 'https://library-management-system-eta-ten.vercel.app/',
      codeUrl: 'https://github.com/MadhusudanDhakad/library-management-system'
    },
    {
      title: 'Weather Forecasting Application',
      description: 'A sleek and intuitive Weather App that fetches real-time data from a weather API, displaying current conditions and forecasts using HTML, CSS, and JavaScript for a seamless user experience.',
      image: '/project-images/WeatherForeCast.png',
      tags: ['Javascript', 'HTML', 'CSS', 'Git', 'Vercel'],
      liveUrl: 'https://madhusudandhakad.github.io/Weather-App/',
      codeUrl: 'https://github.com/MadhusudanDhakad/Weather-App'
    },
    // {
    //   title: 'Fitness Tracker',
    //   description: 'Health and fitness tracking application with workout plans, progress tracking, and nutrition guides.',
    //   image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    //   tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'PWA'],
    //   liveUrl: '#',
    //   codeUrl: '#'
    // }
  ];

  // useEffect(() => {
  //   const getProjects = async () => {
  //     const data = await fetchProjects();
  //     setProjects(data);
  //   };
  //   getProjects();
  // }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2>Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and experience in full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-border rounded-xl hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div className="space-y-2 flex-1">
                      <h3>{project.title}</h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-lg">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 rounded-xl"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-xl"
                        onClick={() => window.open(project.codeUrl, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl"
              onClick={() => window.open('#', '_blank')}
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    // <section id="projects" className="py-10 px-4">
    //   <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
    //   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {projects.length > 0 ? (
    //       projects.map((project) => (
    //         <div
    //           key={project._id}
    //           className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all"
    //         >
    //           <img
    //             src={project.image}
    //             alt={project.title}
    //             className="rounded-xl mb-4 w-full h-48 object-cover"
    //           />
    //           <h3 className="text-xl font-semibold">{project.title}</h3>
    //           <p className="text-gray-600 mb-3">{project.description}</p>

    //           <div className="flex flex-wrap gap-2 mb-3">
    //             {project.technologies.map((tech) => (
    //               <span
    //                 key={tech}
    //                 className="text-sm bg-gray-200 px-2 py-1 rounded-md"
    //               >
    //                 {tech}
    //               </span>
    //             ))}
    //           </div>

    //           <div className="flex gap-4">
    //             {project.github && (
    //               <a
    //                 href={project.github}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="text-blue-500 hover:underline"
    //               >
    //                 GitHub
    //               </a>
    //             )}
    //             {project.liveDemo && (
    //               <a
    //                 href={project.liveDemo}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="text-green-500 hover:underline"
    //               >
    //                 Live Demo
    //               </a>
    //             )}
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p className="text-center text-gray-500">No projects yet.</p>
    //     )}
    //   </div>
    // </section>
  );
}
