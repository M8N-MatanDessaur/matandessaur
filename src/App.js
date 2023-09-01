import React, { useState } from "react";
import styled from "styled-components";

import whatsaround from "./whatsaround.jpg";
import webcity from "./webcity.jpg";
import lnreno from "./LNRenovation.jpg";
import aleoresto from "./aleoresto.jpg";
import simpl from "./Simpl.jpg";
import dblslsh from "./dblslsh.jpg";

export default function App() {
  const [tab, setTab] = useState("projects");

  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.id = "EmbedSocialHashtagScript";
    document.head.appendChild(script);
  };
  const handlePhotographyTabClick = () => {
    loadScript();
    setTab("photography");
  };

  return (
    <AppContainer>
      <ContentContainer>
        <ProfileHeader>
          <CoverImage>
            <LogoFrame src="https://3dlogo.vercel.app/" frameBorder="0" scrolling="no" />
          </CoverImage>
          <ProfileImage src="https://avatars.githubusercontent.com/u/126172236?v=4" />
          <ProfileInfo>
            <ProfileName>Matan Dessaur</ProfileName>
            <ProfileDescription>
              Hey there, I'm <b>Matan</b> 👋🏼 <br />
              I am a highly motivated and skilled<br />
              <span>full stack React developer</span> and <span>photographer</span><br />
              driven by a profound <i>passion</i> and ever expanding <i>curiosity</i> 🔍<br /><br />
              With an eye for detail, I blend <i>creativity</i> and <i>technical expertise</i> to craft
              visually stunning and functional web applications.<br />
            </ProfileDescription>
            <ProfileLinks>
              <ProfileLink href="https://github.com/M8N-MatanDessaur">GitHub</ProfileLink>
              <ProfileLink href="https://www.instagram.com/matan.dessaur/">Instagram</ProfileLink>
              <ProfileLink href="https://www.facebook.com/matan.dessaur.7/">Facebook</ProfileLink>
              <ProfileLink href="https://www.linkedin.com/in/m8n-matandessaur/">LinkedIn</ProfileLink>
              <ProfileLink href="https://webcity.dev/">webcity.dev</ProfileLink>
              <ProfileLink href="https://webcity.dev/toolbox">Toolbox</ProfileLink>
            </ProfileLinks>
          </ProfileInfo>
          <Tabs>
            <Tab selected={tab} onClick={() => { setTab("projects") }}>Projects</Tab>
            <Tab selected={tab} onClick={handlePhotographyTabClick}>Photography</Tab>
          </Tabs>
          {
            tab === "photography" ? (
              <>
                <div className="embedsocial-hashtag" data-ref="e0efeaf33d19b3b377f94e57e9332f71b576d510"></div>
              </>
            ) :
              (
                <ProfilePosts>
                  <ProfilePost>
                    <img src={whatsaround} />
                    <PostInfo>
                      <PostTitle>whatsaround.me</PostTitle>
                      <PostDescription>
                        whatsaround.me is a personal local exploration companion app that suggests activities, spots, and restaurants tailored to user's tastes, through an intuitive interface. Plus members can create an there own AI companion, while creator members can also create activities.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://whatsaround.netlify.app/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <img src={webcity} />
                    <PostInfo>
                      <PostTitle>webcity.dev</PostTitle>
                      <PostDescription>
                        webcity.dev is a full-service agency specializing in web design and development. They build websites, web applications, and web experiences, guaranteeing 100% satisfaction to their clients.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://webcity.dev/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <img src={lnreno} />
                    <PostInfo>
                      <PostTitle>LNRenovation</PostTitle>
                      <PostDescription>
                        A website for a Montreal-based company with 6 years experience in construction offers high-quality project management, team coordination, and construction services. Commitment to deadlines, client expectations, optimal materials, and safety. Transparent process and solid feedback system ensure seamless client experience and satisfaction. The project was to build a website for lnrenovation.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://lnrenovation.ca/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <img style={{ background: "#56b5af" }} src={aleoresto} />
                    <PostInfo>
                      <PostTitle>Aléoresto</PostTitle>
                      <PostDescription>
                        Aléoresto is an app that randomly suggests nearby restaurants. Created by a food lover, for food lovers, it is coded in React, with styled-components and Google Maps' API. The name combines "aléatoire" (random) and "resto" (restaurant), evoking "going to a restaurant".
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://aleoresto.ca/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <img src={simpl} />
                    <PostInfo>
                      <PostTitle>Simpl AI</PostTitle>
                      <PostDescription>
                        A very simple AI chatbot that can answer your questions. The project was to build an ai chatbot using OpenAi's GPT-3.5 API.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://ai-simpl.netlify.app/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <img src={dblslsh} />
                    <PostInfo>
                      <PostTitle>//DoubleSlash</PostTitle>
                      <PostDescription>
                        DoubleSlash is a note-taking app designed for developers and coders, featuring a minimalist UI, syntax highlighting for code snippets, autosave feature, and the ability to search notes by keyword or title.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://www.youtube.com/watch?v=DxsCZAuT6Ho&list=PLWt0a13MQnx3LWCT3IMFD-NArLAzUpSFv&index=6">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <PostInfo>
                      <PostTitle>Elska's Portfolio</PostTitle>
                      <PostDescription>
                        Elska Dominique Modeling Portfolio Website
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://elska.superhi.hosting/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <PostInfo>
                      <PostTitle>RED by James.r_a</PostTitle>
                      <PostDescription>
                        An interactive website for a Montreal-based artist, featuring a gallery of his work, RED by James
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://red-by-james.netlify.app/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <PostInfo>
                      <PostTitle>MatchingCoffees</PostTitle>
                      <PostDescription>
                        Matching Coffees is a dating app for coffee lovers to connect and form romantic relationships based on similar coffee preferences. Features include a coffee preference questionnaire, easy browsing and matching interface, messaging, and filters for age and other factors.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://www.youtube.com/watch?v=IOA9wRd_Kqs&list=PLWt0a13MQnx3LWCT3IMFD-NArLAzUpSFv&index=2">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <PostInfo>
                      <PostTitle>V2F - Scheduler</PostTitle>
                      <PostDescription>
                        The Fitness Management System is a web application for fitness trainers and administrators to manage client information, notes, and communication. Features include client and trainer list management, autonomous scheduling for shifts/events, and adding, editing, and viewing notes for individual clients.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://www.youtube.com/watch?v=lJU2ORf0fVQ&list=PLWt0a13MQnx3LWCT3IMFD-NArLAzUpSFv&index=9">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <PostInfo>
                      <PostTitle>Essmei Bandana Shop</PostTitle>
                      <PostDescription>
                        Essmei Bandanas is an ecommerce site specializing in high-quality bandanas with a comprehensive selection of styles and designs. Features include a user-friendly interface for browsing and searching, responsive design for mobile devices and desktop computers, and a wide variety of styles.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://www.youtube.com/watch?v=PoErOAXJ7d8&list=PLWt0a13MQnx3LWCT3IMFD-NArLAzUpSFv&index=3">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <PostInfo>
                      <PostTitle>Remax Clone</PostTitle>
                      <PostDescription>
                        The Remax Website project is a user-friendly platform for users to find properties and connect with real estate agents. Features include property search based on various criteria, agent profiles showcasing their experience and contact information, and direct communication with agents through the platform.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://www.youtube.com/watch?v=h9xIW6pdpGg&list=PLWt0a13MQnx3LWCT3IMFD-NArLAzUpSFv&index=1">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                </ProfilePosts>
              )}
        </ProfileHeader>
      </ContentContainer>
      <MailButton target="blank" href={`https://mail.google.com/mail/?view=cm&fs=1&to=matandessaur@gmail.com&su=Hey there 👋🏼, I am contacting you from your portfolio...`}>
        <svg fill="#fff" height="22px" width="22px"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2Zm8 9 8-5V6l-8 5-8-5v2l8 5Z" clip-rule="evenodd"></path>
        </svg>
      </MailButton>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #181818;
  min-height: 100dvh;
  color: white;
  font-size: calc(10px + 2vmin);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const ContentContainer = styled.div`
  background-color: transparent;
  width: 795px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  overscroll-behavior: contain;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    width: 100vw;
  }
  `;

const ProfileHeader = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:  flex-start;
  padding: 0;
`;

const ProfileInfo = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:  flex-start;
  padding: 35px;
  margin-top: 60px;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 150px;
  left: 20px;
  background-color: transparent;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 8px solid #181818;
  object-fit: cover;
  margin-left: 20px;
`;

const CoverImage = styled.div`
  position: relative;
  background-color: #4c4bc7;
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
`;

const LogoFrame = styled.iframe`
  position: absolute;
  top: 50%;
  left: 110%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px;
  filter: grayscale(100%) brightness(0.5) contrast(1.2);
`;

const ProfileName = styled.div`
  font-size: 35px;
  font-weight: 700;
`;

const ProfileDescription = styled.div`
  font-size: 16px;
  font-weight: 400;

  span {
    color: #9190ff;
    font-weight: 700;

  }

  i {
    color: #9190ff;
  }
`;

const ProfileLinks = styled.div`
  width: 100%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:  flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 35px;
`;

const ProfileLink = styled.a`
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  background-color: #4c4bc7;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #4c4bc7;
    background-color: #fff;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ProfilePosts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px;
  gap: 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ProfilePost = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #35373a;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 8px;
    background: black;
  }
`;

const PostInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
`;

const PostTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

const PostDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  overflow-y: scroll;
  max-height: 135px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    display: block;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #4c4bc7;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4c4bc7;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #4c4bc7;
  }

  &::-webkit-scrollbar-thumb:window-inactive {
    background: #4c4bc7;
  }

`;

const PostLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  color: #fff;
  background-color: #4c4bc7;
  padding: 10px;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    color: #4c4bc7;
    background-color: #fff;
    & svg {
      fill: #4c4bc7;
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const Tab = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  width: 100%;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: #ffffff;
  }

  &:active {
    border-bottom: 3px solid #4c4bc7;
  }

  border-bottom: ${(props) => (props.selected === props.children.toLowerCase() ? "4px solid #4c4bc7" : "none")};
`;

const MailButton = styled.a`
  position: fixed;
  bottom: 35px;
  right: 35px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 50px;
  background-color: #4c4bc7;
  &:hover {
    color: #4c4bc7;
    background-color: #fff;
    & svg {
      fill: #4c4bc7;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;