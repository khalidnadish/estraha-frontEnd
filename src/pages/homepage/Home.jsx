import React from "react";
import {Container, HeroBanner,
  HeroImg,
  TextHeroBanner,
  ImageSection,
  ImageWraper,
  ImgSection,
  ContactSection,
  ContactWarper,
  AraeTitle,
  AreaText,
  OverlayImg,
  ContactSectionHeader} from "./cpm"
import { Link } from "react-router-dom";

import data from "./data.json";

import {
  BsWhatsapp,
  BsTelephone,
  BsInstagram,
  BsGoogle,
  BsSnapchat,
} from "react-icons/bs";

import { MdOutlineContactless } from "react-icons/md";
import { IoLogoUsd } from "react-icons/io";

// import LamaTube from "../../img/heroimage.webp";
const Home = () => {
  return (
    <Container>
      <HeroBanner>
        <HeroImg src={data.heroImage} />
      </HeroBanner>
      <TextHeroBanner>{data.heroTEXT}</TextHeroBanner>

      <ImageSection>
        <Link to="imagepage">
          
          <ImageWraper>
            <ImgSection src={data.imag1} />
          </ImageWraper>
        </Link>
        <Link to="imagepage">
          <ImageWraper>
            <ImgSection src={data.imag2} />
          </ImageWraper>
        </Link>
        <Link to="imagepage">
          <ImageWraper>
            <ImgSection src={data.imag3} />
          </ImageWraper>
        </Link>
        <Link to="imagepage">
          <ImageWraper>
            <ImgSection src={data.imag4} />
          </ImageWraper>
        </Link>
      </ImageSection>
      {/* contact */}

      <ContactSection>
        <ContactSectionHeader>
          <MdOutlineContactless size={"1.5em"} />
          <AraeTitle> للتواصل </AraeTitle>
        </ContactSectionHeader>
        <ContactWarper>
          <AraeTitle>
            <BsTelephone />
          </AraeTitle>
          <AreaText>{data.mobile}</AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle>
            <BsWhatsapp />
          </AraeTitle>
          <AreaText>{data.whatsapp}</AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle>
            <BsInstagram />
          </AraeTitle>
          <AreaText>{data.instagram}</AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle>
            <BsSnapchat />
          </AraeTitle>
          <AreaText> {data.snapshot}</AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle>
            <BsGoogle />
          </AraeTitle>
          <AreaText> {data.google}</AreaText>
        </ContactWarper>
      </ContactSection>
      <ContactSection>
        <ContactSectionHeader>
          <IoLogoUsd size={"1.2em"} />

          <AraeTitle>الاسعار</AraeTitle>
        </ContactSectionHeader>
        {/* Price */}

        <ContactWarper>
          <AraeTitle variant="price">الاربعاء</AraeTitle>
          <AreaText> {data.wenPrice} </AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle variant="price">الخميس</AraeTitle>
          <AreaText> {data.thrPrice} </AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle variant="price">الجمعة</AraeTitle>
          <AreaText> {data.friPrice} </AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle variant="price">السبت</AraeTitle>
          <AreaText> {data.satPrice} </AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle variant="price">الاحد</AraeTitle>
          <AreaText> {data.sunPrice} </AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle variant="price">الاثنين</AraeTitle>
          <AreaText> {data.monPrice} </AreaText>
        </ContactWarper>
        <ContactWarper>
          <AraeTitle variant="price">الثلاثاء</AraeTitle>
          <AreaText> {data.tusPrice} </AreaText>
        </ContactWarper>
      </ContactSection>
    </Container>
  );
};

export default Home;
