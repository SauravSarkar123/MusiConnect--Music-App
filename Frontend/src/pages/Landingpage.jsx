import React, { useState, useContext } from "react";
import Header from "../components/header";
import Topindie from "../components/Topindie";
import MusicPlayer from "../components/musicplayer";
import { MusicContext } from '../MusicContext';  // Correct import

const Landing = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const { artists, music } = useContext(MusicContext);  // Access context here

  const handleSongSelection = (songIndex) => {
    setSelectedSong(songIndex);
  };

  return (
    <div className="bg-black min-h-screen relative">
      <Header />
      <div>
        <Topindie onSongSelect={handleSongSelection} songs={music} artists={artists} />
      </div>
      {selectedSong !== null && (
        <div className="fixed bottom-0 left-0 border-violet-600 w-full z-50">
          <MusicPlayer selectedSongIndex={selectedSong} songs={music} />
        </div>
      )}
    </div>
  );
};

export default Landing;
