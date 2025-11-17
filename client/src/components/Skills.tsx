import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 85 },
        // { name: 'Zustand', level: 80 },
        { name: 'Next.js', level: 70 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 90 },
        { name: 'REST API', level: 95 },
        { name: 'C++', level: 95 },
        { name: 'Socket.io', level: 60 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'Mongoose', level: 88 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        // { name: 'Docker', level: 75 },
        { name: 'Postman', level: 95 },
        { name: 'Vercel', level: 88 },
        // { name: 'AWS', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
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
            <h2>Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 space-y-6"
              >
                <h3 className="text-foreground">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/90">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
