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
          happy borthday pamilerin wish you long life and prosperity 
        
        </motion.p>
      )}
    </div>
  );
}
