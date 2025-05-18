"use client";
import { useState, useEffect } from "react";
import { BurgerButton } from "./burger-button";
import Image from "next/image";
import GabsImage from "@/assets/gabs.jpeg";

export function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    // Check if we're on client-side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      // Set initial value
      handleResize();
      setIsLoading(false);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Clean up
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["bio", "news", "publications"];
      const scrollPosition = window.scrollY + 100; // Fixed offset for header
      const viewportHeight = window.innerHeight;

      let currentSection = activeSection;
      let maxVisibleHeight = 0;
      let hasTallSection = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionBottom = offsetTop + offsetHeight;

          // Check if this section is at least viewport height
          if (offsetHeight >= viewportHeight) {
            hasTallSection = true;
          }

          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(offsetTop, scrollPosition);
          const visibleBottom = Math.min(
            sectionBottom,
            scrollPosition + viewportHeight
          );
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            currentSection = section;
          }
        }
      }

      // Only update active section if we have at least one tall section
      if (hasTallSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection(""); // Clear active section when no tall sections
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set active section immediately for better UX
      setActiveSection(sectionId);

      // Scroll to the section
      element.scrollIntoView({ behavior: "smooth" });

      // Close mobile menu if open
      if (isMobile) {
        setIsOpen(false);
      }

      // Add a small delay to ensure the scroll animation has started
      setTimeout(() => {
        // Force a scroll event to update the active section
        window.dispatchEvent(new Event("scroll"));
      }, 100);
    }
  };

  const navItems = [
    {
      name: "Bio",
      id: "bio",
    },
    {
      name: "News",
      id: "news",
    },
    {
      name: "Publications",
      id: "publications",
    },
  ];

  const externalLinks = [
    {
      name: "GitHub",
      href: "https://github.com/gabriel-kaunang",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gabriel-kaunang-296073204",
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=0xDrpt4AAAAJ&hl=en",
    },
  ];

  return (
    <>
      {/* Fixed burger button that stays in place */}
      <div className="fixed top-5 right-5 z-[60] lg:hidden">
        <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
      </div>

      <div className={`fixed top-0 left-0 right-0 z-50 lg:hidden`}>
        <div className="text-[#0A0A0A] bg-white flex justify-between items-center p-5">
          <div>
            <p className="text-xl font-bold">Gabriel Kaunang</p>
            <p className="text-sm font-medium -mt-1">University of Chicago</p>
          </div>
        </div>
      </div>

      {/* Sliding header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-[#0A0A0A] text-white flex justify-between items-center p-5">
          <div>
            <p className="text-xl font-bold">Gabriel Kaunang</p>
            <p className="text-sm font-medium -mt-1">University of Chicago</p>
          </div>
        </div>
      </div>

      {/* Sidebar - with animation */}
      <div
        className={`
         fixed inset-0 bg-[#0A0A0A] text-white lg:bg-white lg:text-black z-40 transform transition-transform duration-300 ease-in-out
          ${
            !isLoading && (isOpen || !isMobile)
              ? "translate-x-0"
              : "-translate-x-full"
          }
          lg:relative lg:translate-x-0 lg:z-0
          p-5 lg:p-20 lg:pr-0 flex flex-col gap-20 h-full lg:w-lg
          ${isMobile ? "pt-64" : ""}
      `}
      >
        <div className="hidden lg:block space-y-4">
          <Image
            src={GabsImage.src}
            alt="Gabriel Kaunang"
            width={100}
            height={100}
            className="rounded-full w-48 h-auto"
          />
          <div>
            <p className="text-4xl font-bold mb-3">Gabriel Kaunang</p>
            <div className="flex flex-col text-lg/5 font-medium">
              <p>Ph.D. Student</p>
              <p>University of Chicago</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2 items-start">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-3xl font-medium 
                transition-opacity duration-300
                hover:opacity-100
                cursor-pointer
                ${activeSection === item.id ? "" : "opacity-50"}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* External Links */}
        <div className="flex flex-col gap-1 items-start">
          {externalLinks.map((item, index) => (
            <a
              href={item.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-medium
                          transition-opacity duration-300
                          opacity-50
                          hover:opacity-100"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
