import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Globe, Laptop, Code, Palette, ShoppingCart, Users, Star } from "lucide-react";
import Map from "@/components/Map";

const Index = () => {
  const [mapboxToken, setMapboxToken] = useState("");

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "Custom websites and web applications tailored to your business needs",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment integration",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Mobile Responsive"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand & Portfolio Design",
      description: "Professional branding and portfolio websites",
      features: ["Logo Design", "Brand Identity", "Business Portfolios", "Personal Portfolios"]
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Tech Hardware",
      description: "Quality refurbished laptops and desktop spare parts",
      features: ["Refurbished Laptops", "Desktop Parts", "Quality Assured", "Warranty Included"]
    }
  ];

  const projects = [
    {
      title: "Lodwar Vocational Training Centre",
      description: "Complete website development with modern design and functionality",
      type: "Website Development"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration",
      type: "E-commerce"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/3868cd00-530c-4e77-a86e-8771789a7c0b.png" 
                alt="Winnbarn Innovative Solutions" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">Winnbarn Innovative Solutions</h1>
                <p className="text-sm text-muted-foreground">Technology & Digital Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Innovative Digital Solutions
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering businesses through technology, freelancing, and remote work solutions in Turkana County and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-base">
              <Code className="h-4 w-4 mr-2" />
              Web Development
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              <Users className="h-4 w-4 mr-2" />
              Remote Work
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              <Laptop className="h-4 w-4 mr-2" />
              Tech Hardware
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h3>
            <p className="text-lg text-muted-foreground">
              Some of our successful projects and implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Location</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Find us in Lodwar, Turkana County, Kenya
            </p>
            
            {!mapboxToken && (
              <div className="max-w-md mx-auto mb-8">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    To display the interactive map, please enter your Mapbox public token. 
                    Get one free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                  </p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter Mapbox public token..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                    />
                    <Button onClick={() => setMapboxToken(mapboxToken)}>Load Map</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="max-w-4xl mx-auto">
            {mapboxToken ? (
              <Map mapboxToken={mapboxToken} />
            ) : (
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Map will appear here once Mapbox token is provided</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h3>
            <p className="text-lg text-muted-foreground">
              Ready to start your next project? Let's discuss how we can help
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>
                    <a href="tel:+254737731566" className="text-primary hover:underline">
                      +254 737 731 566
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <CardTitle>Email</CardTitle>
                  <CardDescription>
                    <a href="mailto:winnbarn01@gmail.com" className="text-primary hover:underline">
                      winnbarn01@gmail.com
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <CardTitle>Location</CardTitle>
                  <CardDescription>
                    Lodwar, Turkana County<br />Kenya
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/3868cd00-530c-4e77-a86e-8771789a7c0b.png" 
                alt="Winnbarn Innovative Solutions" 
                className="h-8 w-auto"
              />
              <div>
                <p className="font-semibold text-foreground">Winnbarn Innovative Solutions</p>
                <p className="text-sm text-muted-foreground">Technology & Digital Solutions</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Winnbarn Innovative Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
