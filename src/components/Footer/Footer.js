import React from "react";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Join</FooterSubHeading>
        <FooterSubText>unsubscribe</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle> About Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/sign-up'>testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle> About Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/sign-up'>testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle> About Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/sign-up'>testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle> About Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/sign-up'>testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
