import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Simple <br />
        and Aesthetic
      </SectionTitle>
      <SectionText>
        Howdy! I'm James and Welcome to my React.js Portfolio Website!
      </SectionText>
      <Button onClick={() => window.location= 'https://google.com'}>Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;