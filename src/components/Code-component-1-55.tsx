import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "He exceeded our expectations in every way. From communication to delivery, everything was flawless.",
      author: "Dunesberry",
      location: "KSA",
      image: "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTcyMjk2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      quote: "We couldn't be happier with the results. The design was spot on, and the site performance has improved dramatically. Highly recommended!",
      author: "Taslima Advertising Agency",
      location: "KSA",
      image: "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTcyMjk2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      quote: "He really understood our needs and translated them into a beautiful, functional product. The collaboration was seamless from start to finish.",
      author: "Farabi Petrochemical",
      location: "KSA",
      image: "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTcyMjk2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      quote: "Professional, reliable, and incredibly talented. His support didn't stop after launch - he's been helping us grow continuously.",
      author: "IMS",
      location: "Nepal",
      image: "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTcyMjk2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our satisfied clients have to say about their experience working with us. 
            Real stories, real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
                <div className="pt-8">
                  <p className="text-muted-foreground mb-6 italic relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}