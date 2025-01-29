import Blog from "../Blog/Blog";
import SponsorChild from "../SponsorChild/SponsorChild";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <SponsorChild />
      <Blog />
    </div>
  )
}
