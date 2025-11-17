import { motion } from 'motion/react';
import { Code2, Database, Server, Palette } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      label: 'React.js',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Server,
      label: 'Node.js',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      label: 'MongoDB',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Palette,
      label: 'Tailwind',
      color: 'from-sky-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            <h2>About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building the future of web applications, one line of code at a time
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-foreground/80">
                I'm a passionate Full Stack Developer specializing in the MERN stack with over 3 years of experience
                building modern web applications. I focus on creating scalable, performant, and user-friendly solutions
                that solve real-world problems.
              </p>
              <p className="text-foreground/80">
                My expertise spans across frontend development with React and modern CSS frameworks, backend development
                with Node.js and Express, and database design with MongoDB. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
              <p className="text-foreground/80">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Right - Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative group"
                >
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-border/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-foreground">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
