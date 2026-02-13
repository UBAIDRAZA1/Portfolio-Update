'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const errorData = await response.json();
        console.error('Error submitting form:', errorData.error);
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMultilingualMessage = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let inputElement: HTMLInputElement | null = null;

    if (e.type === 'keydown') {
      inputElement = e.currentTarget as HTMLInputElement;
    } else if (e.type === 'click') {
      inputElement = document.getElementById('multilingual-input-field') as HTMLInputElement;
    }

    if (inputElement && inputElement.value.trim() !== '') {
      // Store the message in localStorage and trigger chatbot
      localStorage.setItem('multilingualMessage', inputElement.value);
      inputElement.value = '';

      // Trigger the chatbot to open
      const chatButton = document.querySelector('.fixed.bottom-8.right-8');
      if (chatButton) {
        (chatButton as HTMLElement).click();
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-neon-cyan" />,
      label: "Email",
      value: "ubaidraza3657767@gmail.com",
      link: "mailto:ubaidraza3657767@gmail.com"
    },
    {
      icon: <Phone className="text-electric-blue" />,
      label: "Phone",
      value: "+92 316-3657767",
      link: "tel:+923163657767"
    },
    {
      icon: <MapPin className="text-neon-magenta" />,
      label: "Location",
      value: "Karachi, Pakistan",
      link: "#"
    }
    
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-xl" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-ubaid-raza-21b850300"
    },
    {
      icon: <Github className="text-xl" />,
      label: "GitHub",
      url: "https://github.com/UBAIDRAZA1"
    },
    {
      icon: <ExternalLink className="text-xl" />,
      label: "Website",
      url: "https://e-commerce-ur.netlify.app/components/project01"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-blue to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            GET IN <span className="neon-text">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-cyan">CONTACT INFO</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl glass-effect border border-gray-800 hover:border-neon-cyan transition-all duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold mb-6 text-electric-blue">SOCIAL LINKS</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-900 rounded-xl glass-effect border border-gray-800 hover:border-electric-blue transition-all duration-300 flex items-center justify-center"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-white">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold mb-4 text-neon-magenta">MULTILINGUAL COMMUNICATION</h4>
              <p className="text-gray-300 mb-4">
                Tea together? Let's start work? Just type in Roman Urdu or English and let's connect!
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="multilingual-input-field"
                  placeholder="Write your message here..."
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-neon-cyan"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleMultilingualMessage(e);
                    }
                  }}
                />
                <button
                  className="px-4 py-2 bg-neon-cyan text-midnight-blue rounded-lg hover:bg-transparent hover:text-neon-cyan border border-neon-cyan transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMultilingualMessage(e);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-electric-blue">SEND MESSAGE</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-neon-cyan to-electric-blue text-midnight-blue hover:opacity-90'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;