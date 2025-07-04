import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Globe, Laptop, Code, Palette, ShoppingCart, Users, Star, Github, Linkedin, Youtube, Instagram, Facebook, MessageCircle } from "lucide-react";
import Map from "@/components/Map";

const Index = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    const { name, email, subject, message } = data;
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:winnbarn01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your email client will open with the message pre-filled.",
    });
    
    form.reset();
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/winnbarn", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/company/winnbarn", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, url: "https://youtube.com/@winnbarn", label: "YouTube" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/winnbarn", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com/winnbarn", label: "Facebook" },
    { icon: <MessageCircle className="h-5 w-5" />, url: "https://wa.me/254737731566", label: "WhatsApp" }
  ];

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
      <header className="border-b glass sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 hover-scale">
              <img 
                src="/lovable-uploads/3868cd00-530c-4e77-a86e-8771789a7c0b.png" 
                alt="Winnbarn Innovative Solutions" 
                className="h-12 w-auto animate-float"
              />
              <div>
                <h1 className="text-xl font-bold gradient-text">Winnbarn Innovative Solutions</h1>
                <p className="text-sm text-muted-foreground">Technology & Digital Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">Services</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-smooth font-medium">Projects</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-float">
            Innovative Digital Solutions
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses through technology, freelancing, and remote work solutions in Turkana County and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Badge variant="secondary" className="px-6 py-3 text-base glass text-white border-white/20 hover-glow hover-scale">
              <Code className="h-5 w-5 mr-3" />
              Web Development
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base glass text-white border-white/20 hover-glow hover-scale">
              <Users className="h-5 w-5 mr-3" />
              Remote Work
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base glass text-white border-white/20 hover-glow hover-scale">
              <Laptop className="h-5 w-5 mr-3" />
              Tech Hardware
            </Badge>
          </div>
          <Button 
            size="lg" 
            className="gradient-primary text-white px-8 py-4 text-lg hover-scale animate-pulse-glow border-0"
            onClick={scrollToContact}
          >
            Start Your Project
          </Button>
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
              <Card key={index} className="h-full gradient-card shadow-card hover-lift hover-glow border-0">
                <CardHeader className="text-center">
                  <div className="flex justify-center text-primary mb-4 hover-scale">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl gradient-text">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground/80">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm transition-smooth hover:text-primary">
                        <Star className="h-4 w-4 text-primary mr-3 flex-shrink-0 hover-scale" />
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
              <Card key={index} className="gradient-card shadow-card hover-lift hover-glow border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                    <Badge variant="outline" className="gradient-primary text-white border-0 hover-scale">{project.type}</Badge>
                  </div>
                  <CardDescription className="text-muted-foreground/80">{project.description}</CardDescription>
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
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="gradient-card shadow-card hover-lift border-0">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          rules={{ 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        rules={{ required: "Subject is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What's this about?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        rules={{ required: "Message is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project or inquiry..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full gradient-primary text-white hover-scale border-0"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Contact Info & Social */}
              <div className="space-y-8">
                <div className="grid gap-6">
                  <Card className="text-center gradient-card shadow-card hover-lift hover-glow border-0">
                    <CardHeader>
                      <Phone className="h-8 w-8 text-primary mx-auto mb-4 hover-scale" />
                      <CardTitle className="gradient-text">Phone</CardTitle>
                      <CardDescription>
                        <a href="tel:+254737731566" className="text-primary hover:text-primary/80 transition-smooth hover:underline font-medium">
                          +254 737 731 566
                        </a>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
                  <Card className="text-center gradient-card shadow-card hover-lift hover-glow border-0">
                    <CardHeader>
                      <Mail className="h-8 w-8 text-primary mx-auto mb-4 hover-scale" />
                      <CardTitle className="gradient-text">Email</CardTitle>
                      <CardDescription>
                        <a href="mailto:winnbarn01@gmail.com" className="text-primary hover:text-primary/80 transition-smooth hover:underline font-medium">
                          winnbarn01@gmail.com
                        </a>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
                  <Card className="text-center gradient-card shadow-card hover-lift hover-glow border-0">
                    <CardHeader>
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-4 hover-scale" />
                      <CardTitle className="gradient-text">Location</CardTitle>
                      <CardDescription className="font-medium">
                        Lodwar, Turkana County<br />Kenya
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                {/* Social Media */}
                <Card className="gradient-card shadow-card hover-lift border-0">
                  <CardHeader>
                    <CardTitle className="text-xl gradient-text text-center">Follow Us</CardTitle>
                    <CardDescription className="text-center">
                      Connect with us on social media
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary text-white hover-scale hover-glow transition-smooth"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
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
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.slice(0, 4).map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth hover-scale"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 Winnbarn Innovative Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
