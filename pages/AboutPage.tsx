
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import { CheckCircle, Groups, Public, Lightbulb } from '@mui/icons-material';

interface AboutPageProps {
  onExploreClick: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onExploreClick }) => {
  return (
    <Box>
      {/* Hero Sub-section */}
      <Box className="bg-slate-900 text-white py-20">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="overline" className="text-amber-400 font-bold tracking-widest">ABOUT US</Typography>
              <Typography variant="h2" className="font-black mb-6 leading-tight">Driving the World <br />to <span className="text-amber-400">Net Zero.</span></Typography>
              <Typography variant="h6" className="text-slate-400 font-light leading-relaxed">
                Founded in 2014, SolarDirect has been at the forefront of the renewable energy revolution. We believe that clean energy should be accessible, affordable, and efficient for everyone.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559302995-f0a1bc1548de?auto=format&fit=crop&q=80&w=800" 
                  alt="Team working" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-amber-400 rounded-3xl z-0"></div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values */}
      <Container maxWidth="lg" className="py-20">
        <Box className="text-center mb-16">
          <Typography variant="h3" className="font-black text-slate-800 mb-4">Our Core Values</Typography>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
        </Box>
        <Grid container spacing={4}>
          {[
            { icon: <Public className="text-amber-500" />, title: "Sustainability", text: "Every panel we install reduces carbon emissions and protects our planet's future." },
            { icon: <Lightbulb className="text-amber-500" />, title: "Innovation", text: "We leverage cutting-edge AI and hardware to maximize your energy yield." },
            { icon: <Groups className="text-amber-500" />, title: "Community", text: "Empowering homeowners and businesses to take control of their energy production." },
            { icon: <CheckCircle className="text-amber-500" />, title: "Quality", text: "We only partner with top-tier manufacturers providing industry-leading warranties." }
          ].map((value, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card className="h-full shadow-none border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Box className="mb-4 inline-block p-3 bg-white rounded-2xl shadow-sm">{value.icon}</Box>
                  <Typography variant="h6" className="font-bold mb-2">{value.title}</Typography>
                  <Typography variant="body2" className="text-slate-500">{value.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box className="bg-amber-50 py-20">
        <Container maxWidth="lg">
          <Box className="text-center mb-16">
            <Typography variant="h3" className="font-black text-slate-800 mb-4">Meet the Visionaries</Typography>
            <Typography variant="h6" className="text-slate-500 font-light">The experts behind your renewable energy journey.</Typography>
          </Box>
          <Grid container spacing={6}>
            {[
              { name: "Dr. Sarah Helios", role: "CEO & Founder", img: "https://i.pravatar.cc/300?u=sarah" },
              { name: "James Photon", role: "Chief Technical Officer", img: "https://i.pravatar.cc/300?u=james" },
              { name: "Elena Watt", role: "Head of AI Research", img: "https://i.pravatar.cc/300?u=elena" },
              { name: "Marcus Grid", role: "Lead Installation Engineer", img: "https://i.pravatar.cc/300?u=marcus" }
            ].map((member, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box className="text-center">
                  <Avatar 
                    src={member.img} 
                    sx={{ width: 160, height: 160, mx: 'auto', mb: 3, border: '4px solid white', boxShadow: 3 }}
                  />
                  <Typography variant="h6" className="font-bold">{member.name}</Typography>
                  <Typography variant="body2" className="text-amber-600 font-medium uppercase tracking-wider">{member.role}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
