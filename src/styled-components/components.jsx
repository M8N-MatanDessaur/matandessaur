import styled, {keyframes, css} from 'styled-components';

export const AppContainer = styled.div`
  background-color: #10150a;
  min-height: 100dvh;
  color: white;
  font-size: calc(10px + 2vmin);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 80%;
  margin: auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const ContentContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: start;
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

export const ProfileHeader = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:  center;
  padding: 0;
`;

export const ProfileInfo = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:  flex-start;
  margin-top: 60px;
  padding: 35px 75px;

  @media (max-width: 765px) {
    padding: 35px 35px;
  }
`;


export const introduceSpin = keyframes`
  0% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const Spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

export const ProfileImageContainer = styled.div`
  position: absolute;
  top: 98px;
  left: 68px;
  width: 175px;
  height: 175px;
  perspective: 1200px;
  transform-style: preserve-3d;
  cursor: pointer;
  animation: ${props => props.isRotated 
    ? css` ${Spin} 0.175s ease-in 0.1s both` 
    : css` ${introduceSpin} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s both`};


  @media (max-width: 765px) {
    left: 35px;
    top: 150px;
    width: 110px;
    height: 110px;
  }
`;

export const ProfileImageSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  border: 10px solid #7f9c82;
  background: #11150b;
  backface-visibility: hidden;
`;

export const ProfileBackground = styled.div`
position: absolute;
top: 85px;
left: 55px;
width: 200px;
height: 200px;
background-color: #11150b;
border-radius: 50%;
z-index: 0;

@media (max-width: 765px) {
  top: 140px;
  left: 25px;
  width: 130px;
  height: 130px;
}
`;

export const ProfileImageFront = styled(ProfileImageSide)`
  background-image: url(${props => props.profile ? props.profile : ''});
  background-size: cover;
`;

export const ProfileImageBack = styled(ProfileImageSide)`
  transform: rotateY(180deg);
  background-color: #11150b;
  background-image: url(${props => props.avatar ? props.avatar : ''});
  background-size: cover;
`;


export const CoverImage = styled.div`
  position: relative;
  background-image: url(${props => props.cover ? props.cover : ''});
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: right;
  overflow: hidden;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const magicFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const perspectiveFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ProfileName = styled.div`
  font-size: 35px;
  font-weight: 700;
  animation: ${magicFade} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s both;
`;

export const ProfileDescription = styled.div`
  font-size: 16px;
  font-weight: 400;

  span {
    color: #e89531;
    font-weight: 700;

    &:active {
      color: #fff;
      text-shadow: 0px 0px 10px #fff;
    }
  }

  i {
    color: #e89531;

    &:active {
      color: #fff;
      text-shadow: 0px 0px 10px #fff;
    }
  }

  b {
    &:active {
      color: #fff;
      text-shadow: 0px 0px 10px #fff;
    }
  }

  animation: ${magicFade} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s both;
`;

export const ProfileLinks = styled.div`
  width: 100%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:  flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 35px;
  perspective: 1200px;
  transform-style: preserve-3d;

  animation: ${perspectiveFadeIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s both;
`;

export const ProfileLink = styled.a`
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  background-color: #7f9c82;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #FFF;
    background-color: #e89531;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const ProfilePosts = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 35px 0;

  @media (max-width: 1300px) {
    width: 100%;
    padding: 15px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 765px) {
    width: 100%;
    padding: 15px;
    grid-template-columns: 1fr;
  }
`;

export const ProfilePost = styled.div`
  position: relative;
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
    aspect-ratio: 1/1 !important;
    object-fit: cover;
    border-radius: 8px;
    background: black;
  }
`;

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
`;

export const PostTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

export const PostDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  padding-right: 25px;

  &::-webkit-scrollbar {
    display: block;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #7f9c82;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #7f9c82;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #7f9c82;
  }

  &::-webkit-scrollbar-thumb:window-inactive {
    background: #7f9c82;
  }

`;

export const PostLink = styled.a`
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  color: #fff;
  background-color: #7f9c82;
  padding: 10px;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    color: #FFF;
    background-color: #e89531;
    & svg {
      fill: #FFF;
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Tabs = styled.div`
  width: 90%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;

  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const Tab = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  width: 100%;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 10px;

  &:hover {
    text-shadow: 0px 0px 20px #fff;
  }

  &:active {
    border-bottom: 3px solid #7f9c82;
  }

  border-bottom: ${(props) => (props.selected === props.children.toLowerCase() ? "4px solid #7f9c82" : "none")};
`;

export const MailButton = styled.a`
  position: absolute;
  top: 40px;
  right: 15px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 50px;
  background-color: #11150b;

  &:active {
    transform: scale(0.9);
  }

  animation: ${magicFade} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s both;
`;

export const CallButton = styled.a`
  position: absolute;
  top: 100px;
  right: 15px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 50px;
  background-color: #11150b;

  &:active {
    transform: scale(0.9);
  }

  animation: ${magicFade} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s both;
  animation-delay: 0.5s;
`;

export const Gallery = styled.div`
  padding: 0 35px !important;

  @media (max-width: 960px) {
    padding: 15px !important;
  }

  @media (max-width: 765px) {
    padding: 5px !important;
  }
`;