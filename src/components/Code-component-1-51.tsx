import { Briefcase, Code, Palette, Calendar, Lightbulb, BarChart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Advertising',
      description: 'Creative strategies to boost your brand visibility and connect with your target audience effectively.'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions to meet unique business needs, ensuring scalability and performance.'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Visually compelling designs that enhance your brand identity and engage your audience.'
    },
    {
      icon: Calendar,
      title: 'Event Production',
      description: 'End-to-end planning and execution of unforgettable events that align with your goals and vision.'
    },
    {
      icon: Lightbulb,
      title: 'IT Consulting',
      description: 'Expert advice to optimize your IT infrastructure and align technology with business objectives.'
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and drive customer engagement.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advertising for brand awareness, Custom Software Development, Graphic Design, Event Production, 
            Architecture, IT Consulting, Digital Marketing, Outsourcing, Video Production, and Video Animation. 
            All tailored to meet your unique needs and drive success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground flex-1">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}