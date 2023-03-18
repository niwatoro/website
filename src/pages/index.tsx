import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Feed } from "@/components/Feed";
import { News } from "@/components/News";
import { Slide } from "@/components/Slide";
import { Top } from "@/components/Top";
import { Works } from "@/components/Works";
import { NextPage } from "next";

export const Home: NextPage = () => {
  return (
    <div>
      <Slide id="top">
        <Top />
      </Slide>
      <Slide id="about">
        <About />
      </Slide>
      <Slide id="feed">
        <Feed />
      </Slide>
      <Slide id="works">
        <Works />
      </Slide>
      <Slide id="news">
        <News />
      </Slide>
      <Slide id="contact">
        <Contact />
      </Slide>
    </div>
  );
};

export default Home;
