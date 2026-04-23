import Slideshow from "./Slideshow";
import Countdown from "./Countdown";
import About from "./About";
import Timeline from "./Timeline";

function HomePage() {
  return (
    <>
      <Slideshow />
      <Countdown />
      <div className="content-wrapper">
        <About />
        <Timeline />
      </div>
    </>
  );
}

export default HomePage;
