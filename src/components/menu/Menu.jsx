import React from "react";
import styled from "styled-components";
import LamaTube from "../../img/logo.png";
import {
  HomeIcon,
  SettingsBrightnessOutlinedIcon,
  PlayCircleOutlinedIcon,
  CameraAltOutlinedIcon,
  CardGiftcardOutlinedIcon,
  MilitaryTechOutlinedIcon,
  TuneOutlinedIcon,
  EventAvailableOutlinedIcon,
  AddReactionOutlinedIcon,
  SentimentDissatisfiedOutlinedIcon,
  LocationOnOutlinedIcon,
  LanguageOutlinedIcon,
  AddTaskOutlinedIcon,
} from "./icons";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 10px 16px;
  width: 200px;
  // height: 100vh;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const HomeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 0px;

  /* &:hover {
    background-color: ${({ theme }) => theme.soft};
  } */
`;

const Hr = styled.hr`
  margin: 10px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  /* margin-top: 10px; */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {/* <Logo>
            <Img src={LamaTube} />
            LamaTube
          </Logo> */}
          <HomeItem>
            <HomeIcon color="warning"/>
            الرئسية
          </HomeItem>
        </Link>
        {/* <Item>
          <HomeIcon />
        </Item> */}
        <Link
          to="videopage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <PlayCircleOutlinedIcon />
            الفديوهات
          </Item>
        </Link>
        <Link
          to="imagepage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <CameraAltOutlinedIcon />
            الصور
          </Item>
        </Link>
        <Link
          to="offerpage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <CardGiftcardOutlinedIcon />
            العروض
          </Item>
        </Link>
        <Hr />
        <Link
          to="spesficationpage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <TuneOutlinedIcon />
            المميزات
          </Item>
        </Link>
        <Link
          to="rankingpage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <MilitaryTechOutlinedIcon />
            التقييم
          </Item>
        </Link>
        <Hr />
        <Login>
          <Link
            to="signin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button>
              <AddTaskOutlinedIcon />
              احجز الان
            </Button>
          </Link>
        </Login>
        <Hr />
        <Link
          to="freedaypage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <EventAvailableOutlinedIcon />
            الايام المتوفرة
          </Item>
        </Link>
        <Link
          to="momentspage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <AddReactionOutlinedIcon />
            لحظات جميلة
          </Item>
        </Link>
        <Link
          to="complainepage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SentimentDissatisfiedOutlinedIcon />
            شكوى
          </Item>
        </Link>

        <Hr />

        <Link
          to="locationpage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <LocationOnOutlinedIcon />
            الموقع
          </Item>
        </Link>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "النهاري" : "اليلي"} الوضع
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LanguageOutlinedIcon />
          {darkMode ? "Eng" : "عربي"} اللغة
        </Item>
      </Wrapper>
    </Container>
  );
};
export default Menu;
