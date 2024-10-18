import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/mdashraf/" },
  { icons: <FaGithub />, path: "https://github.com/ashrafbd1496/" },
  { icons: <FaInstagram />, path: "https://www.instagram.com/ashrafbd1496/" },
  {
    icons: <FaWhatsapp />,
    path: "https://wa.me/03361455314?text=Hi%ashrafbd1496!",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
