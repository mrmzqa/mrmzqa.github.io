import { Progress } from './ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Skills() {
  const skillsData = [
    { name: 'HTML', level: 100 },
    { name: 'CSS / Tailwind', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'jQuery', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'AI/ML', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'C# / .NET Core', level: 95 },
    { name: 'MERN Stack', level: 90 },
    { name: 'Angular', level: 90 },
    { name: 'Java / Spring Boot', level: 85 },
  ];

  // Split skills into two columns
  const leftColumnSkills = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const rightColumnSkills = skillsData.slice(Math.ceil(skillsData.length / 2));

  const SkillItem = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across programming, frameworks, and modern technologies.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Technical Proficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                {leftColumnSkills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
              <div>
                {rightColumnSkills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}