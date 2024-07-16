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
import webcitylogo from "./assets/media/webcitylogo.png";
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
              Hey there, I'm <b>Matan</b> 👋🏼<br />
              I am a motivated full stack developer, UI/UX designer, and photographer, creating innovative apps and visual stories. <br />
              Driven by a profound <i>passion</i> and ever-expanding <i>curiosity</i>, I constantly seek new challenges and opportunities to grow.
              <br /><br />
              With an eye for detail, I blend <i>creativity</i> and <i>technical expertise</i> to craft visually stunning and functional web applications.<br />
              My work is fueled by a commitment to <i>excellence</i> and a desire to make a positive impact through technology and design.
            </ProfileDescription>
            <ProfileLinks>
              <ProfileLink href="https://github.com/M8N-MatanDessaur" title="github">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12 1.5a10.5 10.5 0 0 0-3.323 20.46c.525.098.75-.225.75-.502v-1.785c-2.917.63-3.532-1.41-3.532-1.41a2.782 2.782 0 0 0-1.215-1.538c-.953-.645.075-.637.075-.637a2.205 2.205 0 0 1 1.605 1.087 2.25 2.25 0 0 0 3.06.87c.042-.532.277-1.03.66-1.402-2.325-.27-4.778-1.17-4.778-5.19a4.05 4.05 0 0 1 1.08-2.82 3.75 3.75 0 0 1 .105-2.775s.878-.285 2.888 1.072a9.975 9.975 0 0 1 5.25 0c2.002-1.357 2.88-1.072 2.88-1.072a3.75 3.75 0 0 1 .105 2.775 4.05 4.05 0 0 1 1.08 2.82c0 4.035-2.453 4.92-4.793 5.182a2.499 2.499 0 0 1 .713 1.943v2.88c0 .345.187.607.75.502A10.5 10.5 0 0 0 12 1.5Z" clip-rule="evenodd"></path>
                </svg>
              </ProfileLink>
              <ProfileLink href="https://www.instagram.com/matan.dessaur/" title="instagram">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.805 8.277a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 0 0 0 2.16Z"></path>
                  <path d="M12 7.375a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm0 7.622a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                  <path d="M12 4.622c2.403 0 2.688.009 3.637.052.57.007 1.136.112 1.671.31a2.982 2.982 0 0 1 1.708 1.708c.198.535.303 1.1.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637a4.982 4.982 0 0 1-.31 1.671 2.98 2.98 0 0 1-1.708 1.708 4.98 4.98 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.981 4.981 0 0 1-1.671-.31 2.981 2.981 0 0 1-1.708-1.708 4.982 4.982 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.007-.57.112-1.136.31-1.67a2.981 2.981 0 0 1 1.708-1.709 4.981 4.981 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052ZM12 3c-2.444 0-2.75.01-3.71.054a6.605 6.605 0 0 0-2.185.419 4.602 4.602 0 0 0-2.633 2.632 6.605 6.605 0 0 0-.418 2.185C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.015.747.157 1.486.419 2.185a4.602 4.602 0 0 0 2.632 2.633c.7.262 1.438.403 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.419 4.6 4.6 0 0 0 2.633-2.632c.262-.7.403-1.438.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71a6.603 6.603 0 0 0-.419-2.185 4.603 4.603 0 0 0-2.632-2.632 6.605 6.605 0 0 0-2.185-.418C14.75 3.01 14.444 3 12 3Z"></path>
                </svg>
              </ProfileLink>
              <ProfileLink href="https://www.facebook.com/matan.dessaur.7/" title="facebook">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.003 3H3.997A1.005 1.005 0 0 0 3 3.998v16.005a1.005 1.005 0 0 0 .998.997h8.617v-6.96h-2.34v-2.722h2.34V9.315c0-2.325 1.418-3.592 3.502-3.592.698 0 1.395 0 2.093.104V8.25h-1.433c-1.132 0-1.35.54-1.35 1.328v1.732h2.7l-.352 2.723h-2.347V21h4.575a1.006 1.006 0 0 0 .997-.997V3.997A1.005 1.005 0 0 0 20.003 3Z"></path>
                </svg>
              </ProfileLink>
              <ProfileLink href="https://x.com/matandxssaur" title="x">
                <svg width="25" height="25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1668.56 1221.19" viewBox="0 0 1668.56 1221.19" id="twitter-x"><path d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" transform="translate(52.39 -25.059)"></path></svg>
              </ProfileLink>
              <ProfileLink href="https://www.linkedin.com/in/m8n-matandessaur/" title="linkedin">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.65 3H4.35C3.6 3 3 3.6 3 4.275V19.65c0 .675.6 1.275 1.35 1.275h15.3c.75 0 1.35-.6 1.35-1.275V4.275C21 3.6 20.4 3 19.65 3ZM8.325 18.3H5.7V9.75h2.625v8.55ZM7.05 8.55a1.584 1.584 0 0 1-1.575-1.575c0-.9.675-1.575 1.575-1.575.825 0 1.575.675 1.575 1.575 0 .9-.75 1.575-1.575 1.575Zm11.325 9.675H15.75v-4.2c0-.975 0-2.325-1.425-2.325s-1.575 1.125-1.575 2.175v4.275h-2.625v-8.4H12.6v1.125h.075c.375-.675 1.275-1.425 2.55-1.425 2.7 0 3.225 1.8 3.225 4.125v4.65h-.075Z"></path>
                </svg>
              </ProfileLink>
              <ProfileLink href="https://webcity.dev/toolbox" title="toolbox">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 6.75H18V4.5A1.5 1.5 0 0 0 16.5 3h-9A1.5 1.5 0 0 0 6 4.5v2.25H3.75A2.25 2.25 0 0 0 1.5 9v10.5A1.5 1.5 0 0 0 3 21h18a1.5 1.5 0 0 0 1.5-1.5V9a2.25 2.25 0 0 0-2.25-2.25ZM7.5 4.5h9v2.25h-9V4.5Zm13.5 15H3v-6.75h6v3.75h6v-3.75h6v6.75Zm-10.5-6.75h3V15h-3v-2.25ZM3 11.25V9a.75.75 0 0 1 .75-.75h16.5A.75.75 0 0 1 21 9v2.25H3Z"></path>
                </svg>
              </ProfileLink>
              <ProfileLink href="https://webcity.dev/" title="webcity">
              <img src={webcitylogo} alt="webcity.dev" width="25" height="25" fill="currentColor"/>
              </ProfileLink>
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

