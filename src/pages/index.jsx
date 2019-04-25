import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Shawn Hansen.
        </BigTitle>
        <Subtitle>
          I'm a front end developer with experience in ecommerce and large-scale
          heavily trafficked sites.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="UW Oshkosh"
            link="https://www.uwosh.edu"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            I was the senior web developer for the University of Wisconsin
            Oshkosh. I moved the university from the Plone CMS to a combination
            of an API driven static site and Wordpress.
          </ProjectCard>
          <ProjectCard
            title="Stone Harbor Hardware"
            link="https://www.stoneharborhardware.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            The ecommerce store for the home improvement hardware brand Stone
            Harbor Hardware.
          </ProjectCard>
          <ProjectCard
            title="The Jeske Company"
            link="https://shop.jeskecompany.com"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            The ecommerce store for The Jeske Company, a home improvement
            hardware distributor. This site is a SuiteCommerce Advanced site
            running on Oracle Netsuite.
          </ProjectCard>
          <ProjectCard
            title="K9 Fasteners"
            link="https://www.k9fasteners.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            The ecommerce store for K9 Fasteners.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Shawn Hansen" />
          <AboutSub>
            I am the Director of Ecommerce for a national distribution company
            and also a front end web developer. I love all things web.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I have strong experience in html, css, javascript, php, python, react,
          and Netsuite. I was a retail manager in my previous work, and so have
          strong team skills. If you're looking to hire someone for front end,
          either project work or remote work,{" "}
          <a href="mailto:shawn.hansen@gmail.com">reach out</a>.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:shawn.hansen@gmail.com">Hi</a> or find me on
            other platforms: <a href="https://github.com/geekles">Github</a> &{" "}
            <a href="https://www.instagram.com/_shawnhansen/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Shawn Hansen.{" "}
          <a href="https://github.com/geekles/shawnhansen.dev">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
