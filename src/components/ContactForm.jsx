
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = ({ title = "Business Requirement Form", type = "business" }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    projectDescription: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission to Google Sheets
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Form Submitted Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        projectDescription: '',
        budget: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number *</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              required
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          {type === "rfp" && (
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Input
                id="budget"
                name="budget"
                type="text"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., $5,000 - $10,000"
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">
            {type === "rfp" ? "Project Description *" : "Brief Project Description *"}
          </Label>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            required
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Help us come back better prepared. Describe your project requirements..."
            rows={4}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
