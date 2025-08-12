import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Smartphone, Tablet, Monitor, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from '@/components/ContactForm';

const AppDevelopmentPage = () => {
  const apps = [
    { title: 'E-commerce App', category: 'Shopping', demo: '#' },
    { title: 'Social Media App', category: 'Social', demo: '#' },
    { title: 'Fitness Tracker', category: 'Health', demo: '#' },
    { title: 'Food Delivery', category: 'Food', demo: '#' },
    { title: 'Banking App', category: 'Finance', demo: '#' },
    { title: 'Learning Platform', category: 'Education', demo: '#' },
    { title: 'Travel Booking', category: 'Travel', demo: '#' },
    { title: 'Music Streaming', category: 'Entertainment', demo: '#' },
    { title: 'Task Manager', category: 'Productivity', demo: '#' },
    { title: 'Dating App', category: 'Social', demo: '#' },
    { title: 'News Reader', category: 'News', demo: '#' },
    { title: 'Weather App', category: 'Utility', demo: '#' },
  ];

  const platforms = [
    {
      icon: Smartphone,
      title: 'iOS Development',
      description: 'Native iOS apps using Swift and Objective-C'
    },
    {
      icon: Tablet,
      title: 'Android Development',
      description: 'Native Android apps using Kotlin and Java'
    },
    {
      icon: Monitor,
      title: 'Cross-Platform',
      description: 'React Native and Flutter for multiple platforms'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Mobile App Development Services - Fullstackverse</title>
        <meta name="description" content="Professional mobile app development for iOS and Android. Native and cross-platform solutions with modern UI/UX design and robust functionality." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mobile App
              <span className="block text-gradient">Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Creating innovative mobile applications that engage users and drive business success
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                  Start Your App Project
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

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Platforms</h2>
            <p className="text-xl text-gray-600">Expert development across all major platforms</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                  <platform.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{platform.title}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Demos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Live App Demos</h2>
            <p className="text-xl text-gray-600">Interactive previews of our mobile applications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apps.map((app, index) => (
              <motion.div
                key={app.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
                onClick={() => window.open(app.demo, '_blank')}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={`${app.title} mobile app interface`}
                     src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{app.title}</h3>
                    <p className="text-sm text-gray-500">{app.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Launch Your App?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's bring your mobile app idea to life with cutting-edge technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
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

export default AppDevelopmentPage;