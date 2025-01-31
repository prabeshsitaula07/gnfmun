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
        <div className="text-xl text-gray-600 flex flex-col">
            <span>Kathmandu-3, Panipokhari Travel House</span>
            <span className="flex items-center gap-4"><FaPhoneAlt />9851064446</span>
            <span className="flex items-center gap-4"><IoMail />greatnepalfoundation@gmail.com</span>
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
