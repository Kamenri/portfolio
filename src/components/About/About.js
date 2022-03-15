import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TableExp, TdExp, ImgDivContainer, TextDivContainer, imgA } from './AboutStyles';


const About = () => (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        <TextDivContainer>
          Hello! My name is James Purnadi and I'm an aspiring full-stack web developer. 
          Currently, I'm a Senior Computer Engineering student, with a Mathematics minor, at Texas A&M University.
          I find myself to be challenge driven, taking ownership of projects, and passionate about learning to innovate new technologies in benefiting society's needs. 
          <ImgDivContainer>
            <img src='/images/Profilepic.png'  /> 
          </ImgDivContainer>
        </TextDivContainer>
        <table>
            <tr>
            Rooting from my experience working on software related projects, and discussing with team members and clients, in creating a solid solution to fit their requested criteria and more! <br /> 
            Aside from Academics, I strive to improve my leadership skills by putting myself in multiple leadership positions at non-profit organizations within and outside of Texas A&M.
            </tr>
          </table>
      </SectionText>
    </Section>
  );

export default About;
