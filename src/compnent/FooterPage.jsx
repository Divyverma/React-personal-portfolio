import React from 'react'
import '../styling/Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function FooterPage() {
  return (
    <div>
        
        <footer class="footer">

        <div class="footl">
            <a class="footlogo" href="#">Divyansh</a>
            <div class="fd">
                <p>+91 6386198751</p>
                <p>divyanshverma689@gmail.com</p>
            </div>
        </div>
        <div class="l-1"></div>
        <div class="line"></div>

        <div class="footmid">
            <p>Thank You!</p>
        </div>

        <div class="line"></div>

        <div class="footr">
            <div class="icons">
                <a href="https://www.instagram.com/divyu_verma?igsh=MTl5OXl1d2l2MWx3YQ==" target="_blank"><FaInstagram /></a>
                <a href=" https://x.com/divyu_verma?t=30mmJBUjoiEr4IG3uzsu4w&s=08" target="_blank"><FaXTwitter/></a>
                <a href="https://www.linkedin.com/in/divyansh-verma-a30953227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><CiLinkedin/></a>
                <a href="https://wa.me/qr/ANUAPYTPUKTDH1" target="_blank"><FaWhatsapp/></a>
                <a href="https://github.com/Divyverma" target="_blank"><FaGithub/></a>
            </div>
        </div>

    </footer>

    </div>
  )
}
