import React from "react"

import { ContactLayout } from './styles'

const Contact = () => {
  return (
    <ContactLayout
      data-aos="zoom-in"
      name="contact"
      id="contact"
    >
      <h1 className="heading">Contact</h1>
      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>0xb37h0@protonmail.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/0xb0b1/"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* Twitter */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/p_vcent/"
            >
              <i className="fab fa-twitter" title="twitter" id="twitter"></i>
            </a>

            {/* telegram */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/b_0_b_1"
            >
              <i className="fab fa-telegram" title="telegram" id="telegram"></i>
            </a>

          </div>
        </div>

      </div>
    </ContactLayout>
  )
}

export default Contact