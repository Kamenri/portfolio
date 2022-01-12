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
          Hello again! My name is James Purnadi and I'm an aspiring full-stack web developer. 
          Currently, I'm a Senior Computer Engineering student, with a Mathematics minior, at Texas A&M University.
          I am challenge driven, passionate about learning & innovating new technologies in benefiting society's needs.
          <ImgDivContainer>
            <img src='/images/profilepic.jpeg'  /> 
          </ImgDivContainer>
        </TextDivContainer>
        <table>
            <tr>
            I am challenge driven, passionate about learning & innovating new technologies in benefiting society's needs.
            Via communicating and discussing with both team members, and customers, in finding the best solution to fit their essential needs! <br /> 
            Aside from Academics, I strive to improve my leadership skills by putting myself in multiple leadership positions at non-profit organizations within and outside of Texas A&M.
            </tr>
          </table>
      </SectionText>
    </Section>
  );

export default About;
