import Blog from "../Blog/Blog";
import Description from "../Description/Description";
import SponsorChild from "../SponsorChild/SponsorChild";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <SponsorChild />
      <Description/>
      <Blog />
    </div>
  )
}
