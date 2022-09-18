import "./App.css";

import {
  AboutSection,
  BannerSection,
  BookNowSection,
  CounterSection,
  ExploreFoodSection,
  FooterSection,
  FqaSection,
  NavbarSection,
  NewsletterSection,
  StorySection,
  TestimonialSection,
} from "./layers/index";

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <BannerSection />
      <CounterSection />
      <AboutSection />
      <StorySection />
      <ExploreFoodSection />
      <TestimonialSection />
      <FqaSection />
      <BookNowSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}

export default App;
