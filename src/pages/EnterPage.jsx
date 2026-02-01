import "../styles/EnterPage.css";
import { useNavigate } from "react-router-dom";
import enterSound from "../assets/sounds/enter.mp3";

const EnterPage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    const sound = new Audio(enterSound);
    sound.volume = 0.8;
    sound.play();

    // Optional delay so sound finishes
    setTimeout(() => {
      navigate("/intro"); // or home / main page
    }, 600);
  };

  return (
    <div className="enter-root">
      <button className="enter-btn" onClick={handleEnter}>
        ENTER
      </button>
    </div>
  );
};

export default EnterPage;
