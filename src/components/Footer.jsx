import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <strong>Grafika Komputer</strong>. All rights reserved.
        </p>

        <div className='flex items-center justify-center gap-3'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='object-contain w-6 h-6'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
