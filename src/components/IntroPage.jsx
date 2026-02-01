import "../styles/IntroPage.css";
import { useState } from "react";
import introVideo from "../assets/videos/intro.mp4";
import omnitrixImg from "../assets/images/omnitrix.png";

const menuItems = [
  { label: "HOME", icon: "🏠" },
  { label: "ABOUT", icon: "ℹ️" },
  { label: "PROFILE", icon: "👤" },
  { label: "EVENTS", icon: "📅" },
  { label: "SCHEDULE", icon: "⏰" },
  { label: "WORKSHOPS", icon: "🛠️" },
  { label: "PAPERS", icon: "📄" },
  { label: "GAME", icon: "🎮" },
];

const IntroPage = () => {
  const [activated, setActivated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleActivate = () => {
    if (activated) return; // prevent re-trigger
    setActivated(true);

    // wait for Omnitrix fly animation
    setTimeout(() => {
      setShowMenu(true);
    }, 400);
  };

  const handleClose = () => {
    setShowMenu(false);
    setActivated(false);
  };

  return (
    <div className="intro-root">
      {/* Background Video */}
      <video className="intro-video" autoPlay muted loop playsInline>
        <source src={introVideo} type="video/mp4" />
      </video>

      <div className="intro-overlay"></div>

      {/* OMNITRIX BUTTON */}
      {!showMenu && (
        <button
          className={`omnitrix-menu-btn ${activated ? "activate" : ""}`}
          onClick={handleActivate}
          aria-label="Open menu"
        >
          <img src={omnitrixImg} alt="Omnitrix Menu" />
        </button>
      )}

      {/* RADIAL MENU */}
      {showMenu && (
        <div className="radial-menu" role="navigation">
          {/* CENTER CLOSE */}
          <div
            className="radial-center"
            onClick={handleClose}
            aria-label="Close menu"
          >
            ✕
          </div>

          {/* MENU ITEMS */}
          {menuItems.map((item, index) => {
            const angle = (360 / menuItems.length) * index - 90;
            const radius = 135;

            return (
              <div
                key={item.label}
                className="radial-item"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translateY(-${radius}px)
                    rotate(${-angle}deg)
                  `,
                  animationDelay: `${index * 0.06}s`,
                }}
              >
                <div className="radial-icon">{item.icon}</div>
                <span className="radial-text">{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default IntroPage;
