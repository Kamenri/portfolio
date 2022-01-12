import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TableExp, TdExp, AccomTitle } from './ExperienceStyles';

const Experience = () =>  (
  <Section id="exp">
    <SectionDivider />
    <br />
    <SectionTitle>Professional Experiences</SectionTitle>
    <SectionText>
      <TableExp>
        {/*For each New Experience */}
        <tr>
          <TdExp>
          {/*<AccomTitle href='https://www.itasa.org/' target="_blank">*/}
            <ListTitle>Intercollegiate Taiwanese American Student Association</ListTitle>
          {/* </AccomTitle> */}
            <h4>National Director of Programs [July 2021 - Present]</h4>
            - Responsible for creating initiatives that engage and empower students of the Taiwanese American community. <br />
            - These initiatives include, but aren't limited to, leadership training, financial support programs, establishing community guidelines, and providing professional mentorship and resources for those in the TA Community. <br />
            - Is able to work cross functionally with the other 7 department Directors and Assistants, to reach a broader audience range. <br />            
          </TdExp>
        </tr>
        <tr>
          <TdExp>
          {/* <AccomTitle href='https://www.dyd.com/' target="_blank"> */}
            <ListTitle>DYD Creative Solutions Inc</ListTitle>
          {/* </ AccomTitle> */}
            <h4>Co-Op [Jan 2022 - Present]</h4>
            - Developed Web Applications based on given business requirements <br />
            - Maintained Open Communication with team members and was able to execute and provide feedback during web design life cycle <br />
            - Participated in Daily Scrum Meetings <br />            
          </TdExp>
        </tr>
      </TableExp>      
    </SectionText>
  </Section>
);

export default Experience;
