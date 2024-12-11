import Blog from "../Blog/Blog";
import Typewriter from 'typewriter-effect';
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div>

    <LandingPage/>

      <Blog/>


      <Typewriter
                  options={{
                    strings: ['React Developer', 'AI Enthusiast', 'ML Engineer To Be'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
    </div>
  )
}
