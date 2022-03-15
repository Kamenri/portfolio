import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

//https://react-icons.github.io/react-icons/icons?name=di
import { DiCssdeck, DiNancy } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, HName } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '15px'}}>
            <DiNancy size="3rem" /> <HName>Portfolio</HName>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
            <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
            <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
            <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#exp">
            <NavLink>Experience</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Kamenri?tab=repositories" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/james-purnadi/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/james.purnadi/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
