import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

// 🔗 Apps Script URL from .env (Vite)
const SCRIPT_URL = import.meta.env.VITE_GSHEET_ENDPOINT || '';

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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SCRIPT_URL) {
      toast({
        title: "Setup needed",
        description: "Add VITE_GSHEET_ENDPOINT in your .env and restart dev server.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        contactNumber: formData.contactNumber.trim(),
        projectDescription: formData.projectDescription.trim(),
        budget: (type === "rfp" ? formData.budget : '').trim()
      };

      // ✅ form-encoded to avoid preflight; Apps Script reads e.parameter.*
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload),
      });

      // Robust response parsing (handles non-JSON gracefully)
      const text = await res.text();
      let data = {};
      try { data = JSON.parse(text); } catch {}

      if (!res.ok || data.ok === false) {
        throw new Error(data?.error || `HTTP ${res.status}`);
      }

      toast({
        title: "Form Submitted Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ fullName: '', email: '', contactNumber: '', projectDescription: '', budget: '' });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
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
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" name="fullName" required
                   value={formData.fullName} onChange={handleChange}
                   placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required
                   value={formData.email} onChange={handleChange}
                   placeholder="Enter your email" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number *</Label>
            <Input id="contactNumber" name="contactNumber" type="tel" required
                   value={formData.contactNumber} onChange={handleChange}
                   placeholder="Enter your phone number" />
          </div>
          {type === "rfp" && (
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Input id="budget" name="budget" value={formData.budget}
                     onChange={handleChange} placeholder="e.g., $5,000 - $10,000" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">
            {type === "rfp" ? "Project Description *" : "Brief Project Description *"}
          </Label>
          <Textarea id="projectDescription" name="projectDescription" rows={4} required
                    value={formData.projectDescription} onChange={handleChange}
                    placeholder="Help us come back better prepared. Describe your project requirements..." />
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
