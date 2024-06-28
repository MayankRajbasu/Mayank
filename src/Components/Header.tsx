import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const sections = document.querySelectorAll("main section");

      // Check if any section is at the top of the page
      if (!sections || sections.length === 0) {
        setActiveLink(null); // No sections found, set activeLink to null
        return;
      }

      const topSection = sections[0].getBoundingClientRect().top;

      if (topSection >= 0) {
        setActiveLink(sections[0].getAttribute("id")); // Set activeLink to the first section's id
      } else {
        sections.forEach((sec) => {
          const top = sec.getBoundingClientRect().top;
          if (top <= 0) {
            setActiveLink(sec.getAttribute("id")); // Set activeLink to the first section above the top
          }
        });
      }
    };

    // Add event listener for scroll events
    document.getElementById("container")?.addEventListener("scroll", handleScroll);

    // Call handleScroll on component mount to set the default active link
    handleScroll();

    // Remove event listener when component unmounts
    return () => {
      document.getElementById("container")?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
        <Navbar activeLink={activeLink} />
  );
};

export default Header;



