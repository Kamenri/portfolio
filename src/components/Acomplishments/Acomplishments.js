import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, TableExp, TdExp, AccomTitle } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
      <br />
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <SectionText>
        <TableExp>
          <tr>
           <AccomTitle href='https://www.hkntamu.com/' target="_blank"><h2>IEEE Eta Kappa Nu - Gamma Mu</h2></AccomTitle>
           Invited in joining IEEE’s Electrical and Computer Honor Society, <br />Eta Kappa Nu, and got inducted as of April 2019. Which was only offered to the top 20% Electrical and Computer Engineers in the Department.
          </tr>
          <bn />
          <tr>
           <AccomTitle href='https://tasatamu.weebly.com/' target="_blank"><h2>Taiwanese American Student Association (TASA)</h2></AccomTitle>
           TASA is a social cultural organization that focuses on spreading Taiwanese Culture and creating a community for all students of all ethnic backgrounds.
          </tr>          
          <tr>             
            Co-Founded a social cultural organization, named the Taiwanese American Student Association, and was appointed as the org’s first President for the Fall 2019 – Spring 2020 term.
            At the time, I had led a team of 7 other officers in constructing and establishing the internal and external structure of the organization, organized and filled out required legal documents, and supervise the creation, planning, and execution of events and activities for the member body. 
            Despite being an organization that had just started in 2019, the organization quickly gained interest which resulted into its membership booming to over 60+ members and raised over $2k of funding within just 2.5 years.
          </tr>
          <tr>
            <br />
            <h2>Present:</h2>
            Currently I have reprised my role as President of TASA for the Fall 2021-Spring 2022 term, leading the transition from a year of online activities, back to in-person, 
            leading a group of 8 other officers, and training 5 junior officers. In addition, I have been appointed as the National Director of Programs for ITASA. 
            The Intercollegiate Taiwanese American Student Association, a non-profit organization which serves as the national umbrella organization for all Taiwanese Organizations in the U.S. 
            <br />
            Within these past years as both an officer and a member, I have learned the importance and developed the skillset of being an effective communicator, being decisive and calm under pressure, and being proactive and collaborative with my team and those around me to reach a common goal.
            
          </tr>
        </TableExp>
      </SectionText>
    </Section>
);

export default Acomplishments;
