
import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper, Divider } from '@mui/material';
import { Email, Phone, LocationOn, Send, WhatsApp } from '@mui/icons-material';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <Container maxWidth="lg" className="py-20">
      <Grid container spacing={8}>
        {/* Contact Info */}
        <Grid item xs={12} md={5}>
          <Typography variant="overline" className="text-amber-600 font-bold tracking-widest">GET IN TOUCH</Typography>
          <Typography variant="h2" className="font-black text-slate-800 mb-6">Let's Talk <br />Sustainability.</Typography>
          <Typography className="text-slate-500 text-lg mb-10 leading-relaxed">
            Have questions about our products or need a custom quote? Our solar experts are here to help you navigate your transition to clean energy.
          </Typography>

          <Box className="space-y-6">
            <Box className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <Email className="text-amber-600" />
              </div>
              <Box>
                <Typography variant="subtitle2" className="font-bold text-slate-400 uppercase">Email Us</Typography>
                <Typography className="font-bold text-slate-800">support@solardirect.com</Typography>
              </Box>
            </Box>
            <Box className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <Phone className="text-emerald-600" />
              </div>
              <Box>
                <Typography variant="subtitle2" className="font-bold text-slate-400 uppercase">Call Us</Typography>
                <Typography className="font-bold text-slate-800">+1 (555) 123-4567</Typography>
              </Box>
            </Box>
            <Box className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <LocationOn className="text-blue-600" />
              </div>
              <Box>
                <Typography variant="subtitle2" className="font-bold text-slate-400 uppercase">Visit Our HQ</Typography>
                <Typography className="font-bold text-slate-800">123 Solar Way, Helios City, CA 90210</Typography>
              </Box>
            </Box>
          </Box>

          <Divider className="my-10" />

          <Typography variant="h6" className="font-bold mb-4 text-slate-800">Chat with a Specialist</Typography>
          <Button 
            variant="outlined" 
            startIcon={<WhatsApp />} 
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-6 py-3 rounded-full"
          >
            WhatsApp Support
          </Button>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper className="p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
            {formStatus === 'success' ? (
              <Box className="text-center py-10">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-emerald-600 text-4xl" />
                </div>
                <Typography variant="h4" className="font-black text-slate-800 mb-2">Message Sent!</Typography>
                <Typography className="text-slate-500 mb-8">One of our specialists will get back to you within 24 hours.</Typography>
                <Button variant="outlined" onClick={() => setFormStatus('idle')}>Send Another</Button>
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography className="font-bold text-slate-700 mb-1 ml-1">Full Name</Typography>
                    <TextField fullWidth placeholder="John Doe" variant="outlined" required className="bg-slate-50" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className="font-bold text-slate-700 mb-1 ml-1">Email Address</Typography>
                    <TextField fullWidth placeholder="john@example.com" variant="outlined" type="email" required className="bg-slate-50" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="font-bold text-slate-700 mb-1 ml-1">Subject</Typography>
                    <TextField fullWidth placeholder="Interested in Residential Solar" variant="outlined" className="bg-slate-50" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="font-bold text-slate-700 mb-1 ml-1">Message</Typography>
                    <TextField fullWidth multiline rows={4} placeholder="Tell us about your project..." variant="outlined" required className="bg-slate-50" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      fullWidth 
                      disabled={formStatus === 'sending'}
                      className="bg-amber-500 hover:bg-amber-600 py-4 font-black text-lg shadow-xl rounded-2xl"
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
