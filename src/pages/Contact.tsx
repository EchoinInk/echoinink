import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/system';
import {
  fadeSoft,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT
} from '@/lib/motion-cinematic';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageShell atmosphere="default" withTopSpacing={false}>
      <Helmet>
        <title>Begin — Echo in Ink</title>
        <meta name="description" content="Start a conversation about creative direction, identity, or atmospheric design." />
      </Helmet>

      <div className="relative z-10 ei-container max-w-2xl pt-40 pb-32">
        <motion.div
          variants={staggerContainer(STAGGER.cinematic, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
        >
          {/* Header */}
          <motion.div variants={driftUp} className="mb-20">
            <span className="ei-eyebrow ei-text-space-lg block">Begin</span>
            <h1 className="ei-section-title whitespace-pre-line">
              {"Start a\nconversation"}
            </h1>
            <p className="ei-section-description mt-8">
              Tell me what you are trying to express. I will respond within two days.
            </p>
          </motion.div>

          {/* Form */}
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="py-20 text-center"
            >
              <p className="ei-atmosphere-text">
                "Thank you. Your message has been received."
              </p>
              <p className="ei-body mt-8 text-white/30">
                I will be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Name */}
              <motion.div variants={fadeSoft} className="space-y-3">
                <label htmlFor="name" className="ei-form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="ei-form-input"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeSoft} className="space-y-3">
                <label htmlFor="email" className="ei-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="ei-form-input"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Project Type */}
              <motion.div variants={fadeSoft} className="space-y-3">
                <label htmlFor="project" className="ei-form-label">
                  What are you exploring?
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="ei-form-select"
                >
                  <option value="">Select an option</option>
                  <option value="identity">Identity Translation</option>
                  <option value="session">Signal Session</option>
                  <option value="systems">Studio Systems Build</option>
                  <option value="other">Something else</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeSoft} className="space-y-3">
                <label htmlFor="message" className="ei-form-label">
                  Tell me about what you are trying to express
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="ei-form-textarea"
                  placeholder="Describe your project, your questions, or what feels unclear..."
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeSoft} className="pt-4">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="ei-form-submit"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>

              {/* Privacy note */}
              <motion.p variants={fadeSoft} className="ei-body-small text-center">
                Your information is kept private and never shared.
              </motion.p>
            </form>
          )}
        </motion.div>
      </div>
    </PageShell>
  );
}
