import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Simply <br />
        Aesthetic
      </SectionTitle>
      <SectionText>
        Hello, I'm James and Welcome to my React.js Portfolio Website!
      </SectionText>
      <Button onClick={() => window.location= 'https://drive.google.com/file/d/1RoEA9gx6JNnDX3yosMMZ9yrEl383b9hI/view?usp=sharing'}>Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;