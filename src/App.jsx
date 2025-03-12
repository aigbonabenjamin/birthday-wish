import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // ✅ Import CSS file

export default function BirthdayWish() {
  const [play, setPlay] = useState(false);
  const [showNote, setShowNote] = useState(false);

  const handlePlayMusic = () => {
    const audio = new Audio("happy-birthday.mp3");
    audio.play();
    setPlay(true);

    // Show the note with animation after 2 seconds
    setTimeout(() => setShowNote(true), 2000);
  };

  return (
    <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday pamilerin ! 🎂
      </motion.h1>

      <motion.p
        className="message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Wishing you a day filled with love and joy may God bless this new age...it's your special day!!
      </motion.p>

      {/* Button to Play Music */}
      <button onClick={handlePlayMusic} className="btn">
        {play ? "🎶 Playing..." : "Play Birthday Song 🎵"}
      </button>

      {/* Animated Note Appears After Clicking the Button */}
      {showNote && (
        <motion.p
          className="note"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          while you are listening to my strrings...heres a little somthing i cooked up for you..
          I thank God for the day i met you, you have been a blessing pamilerin you taught me discipline,
          how not to wear shorts to church, how to love and a alot more. Even if our frendship grew from you being
          the girl that hugged and i felt the most comfort from to you know.. me messing up a few times i believe life 
          is in seasons and in every season we shall celecbrate only many more years ahead woman of God more annoionting 
          and more grace our Doctor in the making Happy birthday once again to a beautiful girl named pamilerin  💞🎈
        </motion.p>
      )}
    </div>
  );
}
