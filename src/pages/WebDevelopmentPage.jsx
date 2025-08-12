import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from '@/components/ContactForm';

const WebDevelopmentPage = () => {
  const websites = [
    { title: 'E-commerce Platform', url: '#', image: 'Modern e-commerce website with clean design' },
    { title: 'Corporate Website', url: '#', image: 'Professional corporate website' },
    { title: 'Portfolio Site', url: '#', image: 'Creative portfolio website' },
    { title: 'SaaS Platform', url: '#', image: 'Software as a service platform interface' },
    { title: 'Restaurant Website', url: '#', image: 'Restaurant website with online ordering' },
    { title: 'Healthcare Portal', url: '#', image: 'Healthcare management portal' },
    { title: 'Education Platform', url: '#', image: 'Online learning platform' },
    { title: 'Real Estate Site', url: '#', image: 'Real estate listing website' },
    { title: 'Travel Booking', url: '#', image: 'Travel booking website' },
    { title: 'News Portal', url: '#', image: 'News and media website' },
    { title: 'Fashion Store', url: '#', image: 'Fashion e-commerce store' },
    { title: 'Tech Blog', url: '#', image: 'Technology blog website' },
    { title: 'Fitness App', url: '#', image: 'Fitness and wellness website' },
    { title: 'Music Platform', url: '#', image: 'Music streaming platform' },
    { title: 'Food Delivery', url: '#', image: 'Food delivery service website' },
    { title: 'Banking Portal', url: '#', image: 'Online banking portal' },
    { title: 'Social Network', url: '#', image: 'Social networking platform' },
    { title: 'Job Portal', url: '#', image: 'Job search and recruitment website' },
    { title: 'Event Management', url: '#', image: 'Event planning and management site' },
    { title: 'Charity Website', url: '#', image: 'Non-profit charity website' },
  ];

  const capabilities = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Vue.js, Angular, and modern JavaScript frameworks'
    },
    {
      icon: Globe,
      title: 'Backend Development',
      description: 'Node.js, Python, PHP, and scalable server architectures'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display on all devices'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast loading times and optimized user experiences'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Fullstackverse</title>
        <meta name="description" content="Professional web development services including responsive websites, web applications, and e-commerce platforms. Modern, fast, and SEO-optimized solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Web Development
              <span className="block text-gradient">Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Creating stunning, responsive websites and powerful web applications that drive business growth
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600">Full-stack development expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">20+ successful web projects delivered</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websites.map((website, index) => (
              <motion.div
                key={website.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
                onClick={() => window.open(website.url, '_blank')}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={`${website.title} screenshot`}
                     src="https://images.unsplash.com/photo-1467197894731-a3ec7e0d7cb8" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {website.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Your Website?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's create a stunning web presence for your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Discuss Your Business Requirement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;