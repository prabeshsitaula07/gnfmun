import Blog from "../Blog/Blog";
import 
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
                    pauseFor: 2000,
                  }}
                />
    </div>
  )
}