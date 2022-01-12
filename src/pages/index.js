import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import About from '../components/About/About';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import { Content, Heading } from '../components/ScrollButton/ButtonStyles';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import React, { Fragment } from 'react';


const Home = () => {
  return (    
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <Acomplishments /> 
      <Projects />
      <Technologies /> 
      <Experience />               
    </Layout>        
  );
};

export default Home;
