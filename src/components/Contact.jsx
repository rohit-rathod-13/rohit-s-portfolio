import React from "react";
import "./Contact.css";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from "lucide-react";


const Contact = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:rohit13rathod1313@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+917887400367",
      label: "Phone"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/rohit-rathod-13a06a06r/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/rohit-rathod-13/",
      label: "GitHub"
    },
    // {
    //   icon: <Twitter className="w-5 h-5" />,
    //   href: "https://twitter.com/_RohitRathod",
    //   label: "Twitter"
    // },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/rohitrathod_13/",
      label: "Instagram"
    }
  ];

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}

          {/* Social Links */}
          <div className="contact-info-container">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link flex items-center gap-4 p-4 rounded-lg"
                  >
                    <span className="text-blue-600 dark:text-blue-400">
                      {link.icon}
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
