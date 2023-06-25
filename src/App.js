import { useState, useEffect, useRef } from "react";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const navRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;
    const stickyNav = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) setIsIntersecting(true);
      else if (entry.isIntersecting) setIsIntersecting(false);
    };
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight * 1.5}px`,
    });
    headerObserver.observe(headerRef.current);
  }, []);

  return (
    <main className="App">
      <div className="gradient__bg">
        <Navbar isIntersecting={isIntersecting} navRef={navRef} />
        <Header headerRef={headerRef} />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
