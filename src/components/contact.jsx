import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, FileText, Loader2 } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Top wave */}
    <svg 
      className="absolute top-0 w-full h-48 text-blue-50 transform rotate-180"
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
    >
      <path 
        fill="currentColor" 
        fillOpacity="1" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
    
    {/* Bottom wave */}
    <svg 
      className="absolute bottom-0 w-full h-48 text-blue-50"
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
    >
      <path 
        fill="currentColor" 
        fillOpacity="1" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
    
    {/* Additional decorative elements */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse delay-700"></div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const getInputClassName = (fieldName) => {
    return `w-full p-3 border rounded-lg transition-all duration-200 
    ${errors[fieldName] ? 'border-red-500 bg-red-50' : 'border-gray-300'} 
    ${focused === fieldName ? 'ring-2 ring-blue-200 border-blue-400' : ''}
    pl-10 bg-white/80 backdrop-blur-sm`;
  };

  const IconWrapper = ({ children }) => (
    <div className="absolute left-3 top-[2.4rem] text-gray-400">
      {children}
    </div>
  );

  return (
    <section id="contact">
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-white p-6 relative">
      <WaveBackground />
      
      <div className="w-full max-w-lg mx-auto bg-white/70 backdrop-blur-lg rounded-xl shadow-lg relative z-10">
      <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg mb-24">
  <div className="p-6 space-y-4 text-center">
    <div className="get-in-touch flex justify-center">
      <FontAwesomeIcon icon={faPaperPlane} className="text-4xl text-blue-500" />
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
    <p className="text-gray-600">
      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
    </p>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 mx-auto rounded-full" />
  </div>
</div>
        
        <div className="p-6">
          {submitted && (
            <div className="mb-6 p-4 bg-green-50/80 backdrop-blur-sm border border-green-200 rounded-lg">
              <h3 className="text-green-800 font-semibold">Message Sent Successfully!</h3>
              <p className="text-green-700">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block mb-2 font-medium text-gray-700">Name</label>
              <IconWrapper>
                <User className="w-5 h-5" />
              </IconWrapper>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                placeholder="John Doe"
                className={getInputClassName('name')}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span> {errors.name}
                </p>
              )}
            </div>
            
            <div className="relative">
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <IconWrapper>
                <Mail className="w-5 h-5" />
              </IconWrapper>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="john@example.com"
                className={getInputClassName('email')}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span> {errors.email}
                </p>
              )}
            </div>
            
            <div className="relative">
              <label className="block mb-2 font-medium text-gray-700">Subject</label>
              <IconWrapper>
                <FileText className="w-5 h-5" />
              </IconWrapper>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
                placeholder="How can we help?"
                className={getInputClassName('subject')}
              />
              {errors.subject && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span> {errors.subject}
                </p>
              )}
            </div>
            
            <div className="relative">
              <label className="block mb-2 font-medium text-gray-700">Message</label>
              <IconWrapper>
                <MessageSquare className="w-5 h-5" />
              </IconWrapper>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                rows={4}
                placeholder="Type your message here..."
                className={`${getInputClassName('message')} min-h-[120px] resize-y`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span> {errors.message}
                </p>
              )}
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;