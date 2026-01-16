import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 7907626573' },
    { icon: MapPin, label: 'City', value: 'India, Kerala' },
    { icon: Mail, label: 'Email', value: 'mrmzqa@gmail.com' },
    { icon: CheckCircle, label: 'Freelance', value: 'Available' },
  ];

  const stats = [
    { number: '232', label: 'Happy Clients' },
    { number: '80', label: 'Projects' },
    { number: '1453', label: 'Hours Of Support' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">About</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a multi-disciplinary professional offering a unique blend of advertising, business consulting, 
            software development, architecture consulting, and graphic design — all focused on driving real, 
            measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="assets/my-profile-img.jpg"
              alt="Mohammed Rameez"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl mb-4">Graphic Designer | Full Stack Developer | Data Scientist</h3>
            <p className="text-muted-foreground mb-6 italic">
              I can offer wide range of services to elevate your business: Advertising for brand awareness, 
              Custom Software Development, Graphic Design, Event Production, Architecture, IT Consulting, 
              Digital Marketing, Outsourcing, Video Production, and Video Animation. All tailored to meet 
              your unique needs and drive success.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-sm text-muted-foreground">{item.label}:</span>
                      <span className="ml-2">{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-2 text-primary">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}