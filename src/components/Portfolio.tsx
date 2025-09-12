import { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Eye } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    
    {
      id: 10,
      title: 'Tech Startup Logo',
      category: 'logo',
      image: 'assets/file1.png',
      description: 'Minimalist logo design for tech startup'
    },
    {
      id: 11,
      title: '',
      category: 'branding',
      image: 'assets/1.jpg',
      description: 'Contemporary logo design for fashion brand'
    },
    {
      id: 12,
      title: '',
      category: 'branding',
      image: 'assets/2.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 13,
      title: '',
      category: 'branding',
      image: 'assets/3.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 14,
      title: '',
      category: 'branding',
      image: 'assets/4.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 15,
      title: '',
      category: 'branding',
      image: 'assets/6.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 16,
      title: '',
      category: 'branding',
      image: 'assets/5.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 17,
      title: '',
      category: 'branding',
      image: 'assets/7.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 18,
      title: '',
      category: 'branding',
      image: 'assets/8.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 19,
      title: '',
      category: 'branding',
      image: 'assets/9.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 20,
      title: '',
      category: 'branding',
      image: 'assets/10.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 21,
      title: '',
      category: 'branding',
      image: 'assets/11.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 22,
      title: '',
      category: 'branding',
      image: 'assets/12.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 23,
      title: '',
      category: 'branding',
      image: 'assets/13.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 24,
      title: '',
      category: 'branding',
      image: 'assets/14.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 25,
      title: '',
      category: 'branding',
      image: 'assets/15.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 26,
      title: '',
      category: 'branding',
      image: 'assets/16.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 27,
      title: '',
      category: 'branding',
      image: 'assets/17.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 28,
      title: '',
      category: 'branding',
      image: 'assets/18.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 29,
      title: '',
      category: 'branding',
      image: 'assets/19.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 30,
      title: '',
      category: 'branding',
      image: 'assets/20.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 31,
      title: '',
      category: 'branding',
      image: 'assets/21.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 32,
      title: '',
      category: 'branding',
      image: 'assets/22.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 33,
      title: '',
      category: 'branding',
      image: 'assets/23.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 34,
      title: '',
      category: 'branding',
      image: 'assets/24.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 35,
      title: '',
      category: 'branding',
      image: 'assets/25.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 36,
      title: '',
      category: 'branding',
      image: 'assets/26.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 37,
      title: '',
      category: 'branding',
      image: 'assets/27.jpg',
      description: 'Contemporary logo design for fashion brand'
    },{
      id: 38,
      title: '',
      category: 'branding',
      image: 'assets/28.jpg',
      description: 'Contemporary logo design for fashion brand'
    },
    
  ];

  const filters = [
    { id: 'all', label: 'All' },
 
    { id: 'branding', label: 'Branding' },
    { id: 'logo', label: 'Logofolio' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore a curated selection of our latest projects, showcasing innovative designs, 
            cutting-edge apps, compelling branding, and expertly crafted publications. Each piece 
            reflects our commitment to quality, creativity, and client satisfaction.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}