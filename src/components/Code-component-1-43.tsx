import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function Resume() {
  const education = [
    {
      degree: 'BSc Physics with Computer Science',
      period: '2016 - 2018',
      institution: 'Calicut University'
    },
    {
      degree: 'AI/ML & MERN Diploma',
      period: '2021 - 2022',
      institution: 'NIELIT University'
    },
    {
      degree: 'Udemy Certifications',
      period: '2021 - 2023',
      institution: 'Data Analysis & ML, AI Speech Recognition, E-commerce Web App Development'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'TACO, Saudi Arabia',
      period: '01/2023 – 03/2024',
      responsibilities: [
        'Developed custom ERP (HR/Finance/Inventory) like ERPNext',
        'Built Angular frontend with .NET Core backend',
        'Implemented ML for demand forecasting & invoice classification',
        'Established CI/CD with GitHub Actions & Docker'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Dunesberry, Saudi Arabia',
      period: '01/2022 – 01/2023',
      responsibilities: [
        'Converted multi-page app to SPA (React), boosting revenue by $1.1M/year',
        'Built ad-serving platform for 100M users (14% faster)',
        'Designed and deployed 25+ software systems & 20+ applications'
      ]
    },
    {
      title: 'UI/UX Developer',
      company: 'Tasleema, Saudi Arabia',
      period: '01/2021 – 01/2022',
      responsibilities: [
        'Built apps with React, Angular, Node.js, .NET',
        'Delivered React Native apps with 3rd-party service integration',
        'Developed ML chatbots & recommendation engines',
        'Optimized CI/CD pipelines for efficient delivery'
      ]
    },
    {
      title: 'Junior Full Stack Developer',
      company: 'IMS',
      period: '09/2018 – 08/2021',
      responsibilities: [
        'Designed & modified 25+ systems, created 200+ test procedures',
        'Built 20+ applications (Angular, React, .NET, Spring)'
      ]
    }
  ];

  const softSkills = [
    'Organized & Efficient: Strong time management',
    'Continuous Learner: Adapts to new tech quickly',
    'Leadership: Mentored junior developers',
    'Agile Practitioner: Certified Scrum Master',
    'Problem-Solver: Strong troubleshooting & innovation'
  ];

  const languages = [
    { langs: 'English, Malayalam, Hindi', level: '●●●●●' },
    { langs: 'Arabic, German', level: '●●○○○' }
  ];

  const technicalSkills = [
    { category: 'Programming', skills: 'C#, C++, JavaScript, TypeScript, Python, SQL/NoSQL' },
    { category: 'Frameworks', skills: 'ASP.NET Core (6,7,8,9), Blazor, MVC, Razor Pages, React.js, Angular.js, Node.js, Spring Boot' },
    { category: 'AI/Data', skills: 'NumPy, Pandas, Matplotlib, Scikit-learn, NLP' },
    { category: 'Databases & Cloud', skills: 'MongoDB, Redis, Firebase, SQL Server' },
    { category: 'Tools', skills: 'Visual Studio, VS Code, PyCharm, Eclipse, GitHub, Docker' },
    { category: 'Design', skills: 'Figma, Adobe Suite, Corel' }
  ];

  const recentProjects = [
    {
      title: 'E-commerce Web App',
      description: 'Technologies: .NET 8, Angular, Spring Boot, Redis, MongoDB, RabbitMQ, gRPC. Improved response time by 30% with Redis caching.'
    },
    {
      title: 'AI Speech Recognition',
      description: 'Built speech-to-text system with 90%+ accuracy, clustering models for accent recognition.'
    },
    {
      title: 'Data Analysis & ML Models',
      description: 'Predictive analytics for decision-making, achieved 15% efficiency boost with insights.'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Full Stack Developer experienced in AI/ML, ERP, scalable web applications, and software development. 
            Skilled in delivering innovative solutions that enhance business performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Profile */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Profile</h3>
                <h4 className="mb-2">Mohammed Rameez</h4>
                <p className="text-muted-foreground mb-4 italic">
                  Passionate and experienced Full Stack Developer & Event Planner. Adept at planning, 
                  coordinating, and overseeing events, as well as developing scalable applications. 
                  Strong background in AI/ML, software design, and ERP systems.
                </p>
                <div className="space-y-1 text-sm">
                  <div>Doha, Qatar</div>
                  <div>+974 71713634</div>
                  <div>mrmzqa@gmail.com</div>
                  <div className="flex space-x-2">
                    <a href="https://github.com/mrmzqa" className="text-primary hover:underline">GitHub</a>
                    <span>|</span>
                    <a href="https://www.linkedin.com/in/mohammed-r-a35799229" className="text-primary hover:underline">LinkedIn</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="mb-1">{edu.degree}</h4>
                      <div className="text-sm text-muted-foreground mb-1">{edu.period}</div>
                      <div className="text-sm italic">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Soft Skills</h3>
                <ul className="space-y-2">
                  {softSkills.map((skill, index) => (
                    <li key={index} className="text-sm">• {skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Languages</h3>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{lang.langs}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Employment History */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Employment History</h3>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="mb-1">{job.title}</h4>
                      <div className="text-sm text-muted-foreground mb-1">{job.period}</div>
                      <div className="text-sm italic mb-3">{job.company}</div>
                      <ul className="text-sm space-y-1">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Technical Skills</h3>
                <div className="space-y-3">
                  {technicalSkills.map((skillGroup, index) => (
                    <div key={index}>
                      <strong className="text-sm">{skillGroup.category}:</strong>
                      <span className="text-sm ml-2">{skillGroup.skills}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Recent Projects</h3>
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <div key={index}>
                      <h4 className="text-sm mb-1">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}