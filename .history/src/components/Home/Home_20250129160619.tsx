import Blog from "../Blog/Blog";
import ChairmanSpeech from "../ChairmanSays/ChairmanSpeech";
import Description from "../Description/Description";
import MakeDifference from "../MakeDifference/MakeDifference";
import SponsorChild from "../SponsorChild/SponsorChild";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <SponsorChild />
      <Description />
      <MakeDifference/>
      <ChairmanSpeech/>
      
      <Blog />
    </div>
  )
}
