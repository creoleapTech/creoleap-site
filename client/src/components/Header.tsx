import { useState, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { Icon } from '@iconify/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [programMenuOpen, setProgramMenuOpen] = useState(false);
  const [schoolsSubMenuOpen, setSchoolsSubMenuOpen] = useState(false);
  const [collegesSubMenuOpen, setCollegesSubMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
//  const navigate = useNavigate();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const programDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);   // <-- NEW

  const services = [
    { name: "STEM & Robotics Lab", path: "/labs/stem-robotics" },
{ name: "Composite Skill Lab", path: "/labs/composite-skill" },
    { name: "ATAL Tinkering Lab", path: "/labs/atal" },
    { name: "ICT Lab", path: "/labs/ict" },
     { name: "Bal Vatika Lab", path: "/labs/bal-vatika" },
  ];

  const programs = {
    schools: [
      { name: "AI Integrated Robotics", path: "/programs?tag=schools&id=ai-robotics" },
      { name: "AI Integrated Electronics", path: "/programs?tag=schools&id=ai-electronics" },
      { name: "NEP Aligned Curriculum", path: "/programs?tag=schools&id=nep-curriculum" },
      { name: "Teacher Empowerment Program", path: "/programs?tag=schools&id=teacher-empowerment" },
    ],
    colleges: [
      { name: "Industry 4.0 Readiness Program", path: "/programs?tag=colleges&id=industry-4.0" },
      { name: "ROS2 Certification", path: "/programs?tag=colleges&id=ros2" },
      { name: "Embedded System & IoT Certification", path: "/programs?tag=colleges&id=embedded-iot" },
    ],
  };

  /* ──────────────────────  SCROLL DETECTION  ────────────────────── */
  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  /* ──────────────────────  CLICK OUTSIDE (dropdowns)  ────────────────────── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target as Node)
      ) {
        setServicesMenuOpen(false);
      }
      if (
        programDropdownRef.current &&
        !programDropdownRef.current.contains(e.target as Node)
      ) {
        setProgramMenuOpen(false);
        setSchoolsSubMenuOpen(false);
        setCollegesSubMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* ──────────────────────  CLICK OUTSIDE (mobile drawer)  ────────────────────── */
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handler = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        closeAll();
      }
    };

    // Small delay so the toggle button click doesn't close it immediately
    const id = setTimeout(() => {
      document.addEventListener('mousedown', handler);
    }, 0);

    return () => {
      clearTimeout(id);
      document.removeEventListener('mousedown', handler);
    };
  }, [mobileMenuOpen]);

/* ──────────────────────  BOOK DEMO HANDLER  ────────────────────── */
  // const handleBookDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   closeAll(); // Close mobile menu if open
    
  //   // Check if already on contact page
  //   if (window.location.pathname === '/contact') {
  //     const formElement = document.getElementById('form');
  //     if (formElement) {
  //       formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }
  //   } else {
  //     // Navigate to contact page then scroll
  //     navigate({ to: '/contact' });
  //     setTimeout(() => {
  //       const formElement = document.getElementById('form');
  //       if (formElement) {
  //         formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //       }
  //     }, 100);
  //   }
  // };

  /* ──────────────────────  TOGGLES  ────────────────────── */
  const toggleMobileMenu = () => {
    setMobileMenuOpen((v) => !v);
    setServicesMenuOpen(false);
    setProgramMenuOpen(false);
    setSchoolsSubMenuOpen(false);
    setCollegesSubMenuOpen(false);
  };
  const toggleServices = () => {
    setServicesMenuOpen((v) => !v);
    setProgramMenuOpen(false);
  };
  const toggleProgram = () => {
    setProgramMenuOpen((v) => !v);
    setServicesMenuOpen(false);
  };
  const toggleSchools = () => setSchoolsSubMenuOpen((v) => !v);
  const toggleColleges = () => setCollegesSubMenuOpen((v) => !v);
  const closeAll = () => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    setProgramMenuOpen(false);
    setSchoolsSubMenuOpen(false);
    setCollegesSubMenuOpen(false);
  };

  return (
    <section className="relative">
      <div className="bg-[linear-gradient(to_right,white_50%,#0a015a_50%)] shadow-2xl relative">
        {/* ──────  TOP CONTACT BAR  ────── */}
        <div
          className={`bg-gradient-to-br from-[#080A25] to-[#0a015a] rounded-bl-full text-white text-sm py-3 hidden md:block transition-all ${
            isScrolled ? 'opacity-0 h-0 py-0 overflow-hidden' : 'opacity-100'
          }`}
        >
          <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-5">
            {/* phone / mail */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919363208701" className="hover:text-blue-500 transition-colors">
                  +91 9363208701
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@creoleap.com" className="hover:text-blue-500 transition-colors">
                  info@creoleap.com
                </a>
              </div>
            </div>

            {/* social */}
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow Us:</span>
         <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/creoleap/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#FF6B6B] transition-colors">
                  <Icon icon="mdi:linkedin" width="16" height="16" />
                </a>
                <a href="https://www.instagram.com/creoleap_technologies?igsh=dG5jOG1iYTFmYXBz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#FF6B6B] transition-colors">
                  <Icon icon="mdi:instagram" width="16" height="16" />
                </a>
                <a href="https://www.facebook.com/share/1A4a8Az6fb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#FF6B6B] transition-colors">
                  <Icon icon="mdi:facebook" width="16" height="16" />
                </a>
                <a  href="https://wa.me/9363208701" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#FF6B6B] transition-colors">
                  <Icon icon="mdi:whatsapp" width="16" height="16" />
                </a>
                
                    <a href="https://x.com/CreoleapTech" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#FF6B6B] transition-colors">
                  <Icon icon="prime:twitter" width="12" height="12" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ──────  MAIN NAV (sticky)  ────── */}
        <nav
          className={`bg-white shadow-lg transition-all duration-1000 ${
            isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative lg:rounded-tr-full'
          }`}
        >
          <div className="container mx-auto max-w-7xl px-5 lg:px-8 xl:px-5">
            <div className="flex justify-between items-center">
              {/* LOGO */}
              <Link to="/">
                <img src="/logo.png" className="h-8 lg:h-10" alt="Creoleap Technologies Logo" />
              </Link>

              {/* DESKTOP LINKS */}
              <div className="hidden lg:flex items-center space-x-8 py-4">
                <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                  HOME
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                  ABOUT
                </Link>

                {/* ---- WHAT WE PROVIDE ---- */}
                <div className="relative" ref={programDropdownRef}>
                  <button
                    onClick={toggleProgram}
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors flex items-center space-x-1"
                  >
                    <span>WHAT WE PROVIDE</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${programMenuOpen ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {programMenuOpen && (
                    <div className="absolute -left-1/2 top-full mt-2 flex bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div>
                        <div className="px-4 py-3 text-sm text-center font-semibold bg-gray-200 text-gray-900 border-b border-gray-100">
                          For Schools
                        </div>
                        {programs.schools.map((i) => (
                          <Link
                            key={i.name}
                            to={i.path}
                            onClick={closeAll}
                            className="block px-4 py-3 text-center text-nowrap text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            {i.name}
                          </Link>
                        ))}
                      </div>
                      <div className="self-stretch w-px bg-gray-400 my-4 rounded-2xl" />
                      <div>
                        <div className="px-4 py-3 text-sm text-center font-semibold bg-gray-200 text-gray-900 border-b border-gray-100">
                          For Colleges
                        </div>
                        {programs.colleges.map((i) => (
                          <Link
                            key={i.name}
                            to={i.path}
                            onClick={closeAll}
                            className="block px-4 py-3 text-center text-sm text-nowrap text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            {i.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ---- AI LABS ---- */}
                <div className="relative" ref={servicesDropdownRef}>
                  <button
                    onClick={toggleServices}
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors flex items-center space-x-1"
                  >
                    <span>AI LABS</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {servicesMenuOpen && (
                    <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      {services.map((s) => (
                        <Link
                          key={s.name}
                          to={s.path}
                          onClick={closeAll}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="hidden lg:block py-4">
                <a
                  href="/contact#form"
                  className="bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium flex items-center space-x-2"
                >
                  <span className="text-nowrap">Book a Demo</span>
                </a>
              </div>

              {/* MOBILE TOGGLE */}
              <button className="lg:hidden text-gray-700 py-4" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* ──────  MOBILE MENU (always on top)  ────── */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-0 z-40 w-3/4 bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}   // prevent clicks inside from closing
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link to="/" onClick={closeAll} className="text-gray-700 hover:text-blue-900 font-medium py-2">
                HOME
              </Link>
              <Link to="/about" onClick={closeAll} className="text-gray-700 hover:text-blue-900 font-medium py-2">
                ABOUT
              </Link>

              {/* ---- WHAT WE PROVIDE (mobile) ---- */}
              <div ref={programDropdownRef} onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={toggleProgram}
                  className="w-full text-left flex items-center justify-between py-2 text-gray-700 hover:text-blue-900 font-medium"
                >
                  <span>WHAT WE PROVIDE</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${programMenuOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {programMenuOpen && (
                  <div className="pl-4 space-y-4 bg-gray-50 rounded-md p-2">
                    {/* Schools */}
                    <div>
                      <button
                        onClick={toggleSchools}
                        className="w-full text-left flex items-center justify-between py-2 text-gray-700 hover:text-blue-900 font-semibold"
                      >
                        <span>For Schools</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${schoolsSubMenuOpen ? 'rotate-180' : ''}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {schoolsSubMenuOpen && (
                        <div className="pl-4 space-y-2 bg-gray-100 rounded-md p-2">
                          {programs.schools.map((i) => (
                            <Link
                              key={i.name}
                              to={i.path}
                              onClick={closeAll}
                              className="block text-sm text-gray-600 hover:text-blue-900 py-1"
                            >
                              {i.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Colleges */}
                    <div>
                      <button
                        onClick={toggleColleges}
                        className="w-full text-left flex items-center justify-between py-2 text-gray-700 hover:text-blue-900 font-semibold"
                      >
                        <span>For Colleges</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${collegesSubMenuOpen ? 'rotate-180' : ''}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {collegesSubMenuOpen && (
                        <div className="pl-4 space-y-2 bg-gray-100 rounded-md p-2">
                          {programs.colleges.map((i) => (
                            <Link
                              key={i.name}
                              to={i.path}
                              onClick={closeAll}
                              className="block text-sm text-gray-600 hover:text-blue-900 py-1"
                            >
                              {i.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* ---- AI LABS (mobile) ---- */}
              <div ref={servicesDropdownRef} onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={toggleServices}
                  className="w-full text-left flex items-center justify-between py-2 text-gray-700 hover:text-blue-900 font-medium"
                >
                  <span>AI LABS</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {servicesMenuOpen && (
                  <div className="pl-4 space-y-2 bg-gray-50 rounded-md p-2">
                    {services.map((s) => (
                      <Link
                        key={s.name}
                        to={s.path}
                        onClick={closeAll}
                        className="block text-sm text-gray-600 hover:text-blue-900 py-1"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" onClick={closeAll} className="text-gray-700 hover:text-blue-900 font-medium py-2">
                CONTACT
              </Link>

              <Link
                to="/contact"
                onClick={closeAll}
                className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium text-center mt-4"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}