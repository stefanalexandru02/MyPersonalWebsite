import React, { Component } from 'react';
import Section from '../components/Section';

import HomeSection from './Sections/HomeSection';
import AboutSection from './Sections/AboutSection';
import PortfolioSection from './Sections/PortfolioSection';
import TestimonialsSection from './Sections/TestimonialsSection';
import ContactSection from './Sections/ContactSection';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <Section
          activeClass="active"
          dark={true}
          id="home_section">
          <HomeSection />
        </Section>
        <Section
          activeClass="active"
          dark={false}
          id="about_section">
          <AboutSection />
        </Section>
        <Section
          activeClass="active"
          dark={true}
          id="portfolio_section">
          <PortfolioSection />
        </Section>
        {/* <Section
          activeClass="active"
          dark={false}
          id="testimonials_section">
          <TestimonialsSection />
        </Section> */}
        <Section
          activeClass="active"
          dark={true}
          id="contact_section">
          <ContactSection />
        </Section>
      </>
    );
  }
}
