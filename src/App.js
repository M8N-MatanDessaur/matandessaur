import React, { useState } from "react";
import {
  AppContainer,
  ContentContainer,
  ProfileHeader,
  ProfileImageContainer,
  ProfileImageFront,
  ProfileImageBack,
  ProfileBackground,
  ProfileInfo,
  ProfileName,
  ProfileDescription,
  ProfileLinks,
  ProfileLink,
  Tabs,
  Tab,
  ProfilePosts,
  ProfilePost,
  PostInfo,
  PostTitle,
  PostDescription,
  PostLink,
  MailButton,
  CallButton,
  CoverImage,
  ComingSoon,
  Gallery
} from "./styled-components/components";

import whatsaround from "./assets/media/whatsaround.jpg";
import webcity from "./assets/media/webcity.jpg";
import lnreno from "./assets/media/LNRenovation.jpg";
import aleoresto from "./assets/media/aleoresto.jpg";
import simpl from "./assets/media/Simpl.jpg";
import dblslsh from "./assets/media/dblslsh.jpg";
import profile from "./assets/media/profile.jpg";
import avatar from "./assets/media/peeps-avatar-alpha-bw.png";
import cover from "./assets/media/headerbg.svg";
import itype from "./assets/media/itype.png";
import v2f from "./assets/media/v2f.svg";
import iou from "./assets/media/iou.jpg";
import glad from "./assets/media/glad.png";

export default function App() {
  const [tab, setTab] = useState("projects");
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

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
          <CoverImage cover={cover}>
          </CoverImage>
          <ProfileBackground></ProfileBackground>
          <ProfileImageContainer onClick={handleRotate} isRotated={isRotated}>
            <ProfileImageFront profile={profile} />
            <ProfileImageBack avatar={avatar} />
          </ProfileImageContainer>
          <ProfileInfo>
            <ProfileName>Matan Dessaur</ProfileName>
            <ProfileDescription>
              Hey there, I'm <b>Matan</b> 👋🏼<br/> 
              I am a motivated full stack developer, UI/UX designer, and photographer, creating innovative apps and visual stories. <br/> 
              Driven by a profound <i>passion</i> and ever-expanding <i>curiosity</i>, I constantly seek new challenges and opportunities to grow.
              <br/><br/>
              With an eye for detail, I blend <i>creativity</i> and <i>technical expertise</i> to craft visually stunning and functional web applications.<br/>  
              My work is fueled by a commitment to <i>excellence</i> and a desire to make a positive impact through technology and design.
            </ProfileDescription>
            <ProfileLinks>
              <ProfileLink href="https://github.com/M8N-MatanDessaur">GitHub</ProfileLink>
              <ProfileLink href="https://www.instagram.com/matan.dessaur/">Instagram</ProfileLink>
              <ProfileLink href="https://www.facebook.com/matan.dessaur.7/">Facebook</ProfileLink>
              <ProfileLink href="https://x.com/matandxssaur">X</ProfileLink>
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
                <Gallery className="embedsocial-hashtag" data-ref="c90ea5825f8c3a096654bcb12877f56f924659cc"></Gallery>
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
                    <img src={itype} />
                    <PostInfo>
                      <PostTitle>ITYPE</PostTitle>
                      <PostDescription>
                        An AI-powered typewriter that auto-completes the user's text using Google Gemini AI. It features a minimalistic design reminiscent of old typewriters and offers intuitive keyboard shortcuts for seamless writing.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://itype.space/">
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
                    <img src={v2f} alt="" />
                    <PostInfo>
                      <PostTitle>Gym Scheduler</PostTitle>
                      <PostDescription>
                        The Fitness Management System is a web application designed to help fitness trainers and administrators manage client information, notes, and communication effectively.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://www.youtube.com/watch?v=lJU2ORf0fVQ">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <img src={glad} alt="" />
                    <PostInfo>
                      <PostTitle>Groupe Leclerc</PostTitle>
                      <PostDescription>
                        Corporative Website for Groupe Leclerc a company that specializes architecture and design.
                      </PostDescription>
                    </PostInfo>
                    <PostLink target="blank" href="https://groupeleclerc.net/">
                      <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm5-6h4c2.76 0 5 2.24 5 5s-2.24 5-5 5h-4v-1.9h4c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-4V7Z" clip-rule="evenodd"></path>
                      </svg>
                    </PostLink>
                  </ProfilePost>
                  <ProfilePost>
                    <img src={iou} alt="" />
                    <PostInfo>
                      <ComingSoon><p>comming soon</p></ComingSoon>
                      <PostTitle>IOU</PostTitle>
                      <PostDescription>
                        IOU is an advanced bill payment tracking app leveraging Google Gemini AI to manage and streamline shared expenses. It uses AI to analyze receipts, split costs, send reminders, and suggest payment methods.
                      </PostDescription>
                    </PostInfo>
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
        <MailButton href="mailto:hello@matandessaur.me">
          <svg fill="#fff" height="28px" width="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2Zm8 9 8-5V6l-8 5-8-5v2l8 5Z" clip-rule="evenodd"></path>
          </svg>
        </MailButton>
        <CallButton href="tel:+1(438)-393-1817">
          <svg fill="#fff" height="28px" width="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"></path>
          </svg>
        </CallButton>
      </ContentContainer>
    </AppContainer>
  );
}

