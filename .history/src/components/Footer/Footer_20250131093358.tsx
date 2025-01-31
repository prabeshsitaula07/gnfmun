import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center text-center flex-col gap-6 justify-center">
      <h1 className="text-6xl">Connect With Us</h1>
        <div className="">
            Kathmandu-3, Panipokhari Travel House<br />
            9851064446<br />
            greatnepalfoundation@gmail.com
        </div>
        <div className="flex gap-10">
            <a href="" target="_blank"><FaFacebook /></a>
            <a href="" target="_blank"><FaTwitter /></a>
            <a href="" target="_blank"><FaInstagram /></a>
            <a href="" target="_blank"><FaLinkedin /></a>
        </div>
        <span>Keep up with our events on social media</span>
    </div>
  )
}
