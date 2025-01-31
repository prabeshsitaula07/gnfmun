import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="min-h-fit py-20 bg-blue-50 flex items-center text-center flex-col gap-10 justify-center">
      <h1 className="text-6xl">Connect with Us</h1>
        <div className="text-xl text-gray-600">
            Kathmandu-3, Panipokhari Travel House<br />
            <FaPhoneAlt />9851064446<br />
            greatnepalfoundation@gmail.com
        </div>
        <div className="flex gap-10 text-3xl">
            <a href="" target="_blank"><FaFacebook /></a>
            <a href="" target="_blank"><FaTwitter /></a>
            <a href="" target="_blank"><FaInstagram /></a>
            <a href="" target="_blank"><FaLinkedin /></a>
        </div>
        <span className="text-xl text-gray-600">Keep up with our events on social media</span>
    </div>
  )
}
