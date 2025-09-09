import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "He exceeded our expectations in every way. From communication to delivery, everything was flawless.",
      author: "Dunesberry",
      location: "KSA",
      image: "assets/b.jpg"
    },
    {
      id: 2,
      quote: "We couldn't be happier with the results. The design was spot on, and the site performance has improved dramatically. Highly recommended!",
      author: "Taslima Advertising Agency",
      location: "KSA",
      image: "assets/taslima.jpg"
    },
    {
      id: 3,
      quote: "He really understood our needs and translated them into a beautiful, functional product. The collaboration was seamless from start to finish.",
      author: "Farabi Petrochemical",
      location: "KSA",
      image: "assets/farabi.jpg"
    },
    {
      id: 4,
      quote: "Professional, reliable, and incredibly talented. His support didn't stop after launch - he's been helping us grow continuously.",
      author: "IMS",
      location: "Nepal",
      image: "assets/Ims.jpg"
    },
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
            <motion.div
              key={testimonial.id} // use motion.div for each testimonial
              initial={{ opacity: 0, y: 20 }} // initial state
              animate={{ opacity: 1, y: 0 }} // animate to this state
              transition={{ duration: 0.5, delay: testimonial.id * 0.2 }} // stagger delay
            >
              <Card key={testimonial.id} className="relative testimonial-card" >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
