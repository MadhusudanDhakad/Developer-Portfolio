import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using MERN stack',
      achievements: [
        'Architected and deployed 5+ production applications serving 100K+ users',
        'Improved application performance by 40% through code optimization',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2021 - 2023',
      description: 'Built and maintained full-stack applications for enterprise clients',
      achievements: [
        'Developed RESTful APIs handling 1M+ requests daily',
        'Implemented real-time features using Socket.io and WebRTC',
        'Reduced database query time by 60% through optimization'
      ]
    },
    {
      role: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Contributed to frontend and backend development of web applications',
      achievements: [
        'Built responsive UIs with React and Tailwind CSS',
        'Collaborated with cross-functional teams using Agile methodologies',
        'Integrated third-party APIs and payment gateways'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
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
            <h2>Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 border-l-2 border-border hover:border-blue-500/50 transition-colors duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 border-4 border-background" />

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-foreground">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground bg-muted px-3 py-1 rounded-lg">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-foreground/70">{exp.description}</p>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
