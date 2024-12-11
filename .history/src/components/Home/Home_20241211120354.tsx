import Blog from "../Blog/Blog";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>

    

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
