import Header from './header';
import AboutMe from './aboutMe';
import Projects from './projects';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className=" bg-contain w-full h-header ">
      <div className="bg-blue-600 w-full h-header p-5">
        <Header />
      </div>
      <AboutMe />
      <div className="bg-custom-blue w-full">
        <Projects />
      </div>
    </div>
  );
}
