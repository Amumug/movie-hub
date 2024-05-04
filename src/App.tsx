import React, { useState, useEffect } from "react";
import {
  NavBar,
  Button,
  ContentHub,
  Faq,
  Filter,
  Footer,
  Hero,
  Pagination,
} from "./components";

function App() {
  return (
    <div>
      <div className="bg-primarycolor w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <NavBar />
          </div>
        </div>
        <div className="bg-primarycolor flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>

        <div className="bg-primarycolor sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w[1280] w-full">
            <Button />
            <ContentHub />
            <Faq />
            <Filter />
            <Footer />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
