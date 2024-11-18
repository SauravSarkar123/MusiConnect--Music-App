import React, { createContext, useState } from 'react';

// Create the context
export const MusicContext = createContext();

// Create the provider component
export const MusicProvider = ({ children }) => {
    const [artists, setArtists] = useState([
        { id: 1, name: "Artist 1", image: "/Artist1.jfif" },
        { id: 2, name: "Artist 2", image: "/Artist2.jfif" },
        { id: 3, name: "Artist 3", image: "/Artist1.jfif" },
        { id: 4, name: "Artist 4", image: "/Artist2.jfif" },
        { id: 5, name: "Artist 5", image: "/Artist1.jfif" },
        { id: 6, name: "Artist 6", image: "/Artist2.jfif" },
        { id: 7, name: "Artist 7", image: "/Artist1.jfif" },
        { id: 8, name: "Artist 8", image: "/Artist2.jfif" },
        { id: 9, name: "Artist 9", image: "/Artist1.jfif" },
        { id: 10, name: "Artist 10", image: "/Artist2.jfif" },
    ]);
    const [music, setMusic] = useState([
        { id: 1, title: "Elegant", artist: "Singer A", image: "/Music1.jfif", duration: "3:45", src: "/Songs1.mp3" },
        { id: 1, title: "Beautiful", artist: "Singer B", image: "/Music2.jfif", duration: "4:10", src: "/Songs2.mp3" },
        { id: 1, title: "Fantastic", artist: "Singer C", image: "/Music3.jfif", duration: "5:00", src: "/Songs3.mp3" },
        { id: 1, title: "Gorgeous", artist: "Singer D", image: "/Music1.jfif", duration: "3:30", src: "/Songs1.mp3" },
        { id: 1, title: "Pathetic", artist: "Singer E", image: "/Music2.jfif", duration: "4:20", src: "/Songs2.mp3" },
        { id: 1, title: "Song 6", artist: "Singer F", image: "/Music3.jfif", duration: "3:50", src: "/Songs3.mp3" },
        { id: 1, title: "Song 7", artist: "Singer G", image: "/Music1.jfif", duration: "4:00", src: "/Songs1.mp3" },
        { id: 1, title: "Song 8", artist: "Singer H", image: "/Music2.jfif", duration: "3:55", src: "/Songs2.mp3" },
        { id: 1, title: "Song 9", artist: "Singer I", image: "/Music3.jfif", duration: "4:30", src: "/Songs3.mp3" },
        { id: 1, title: "Song 10", artist: "Singer J", image: "/Music1.jfif", duration: "4:05", src: "/Songs1.mp3" },
    ]);

    return (
        <MusicContext.Provider value={{ artists, music, setArtists, setMusic }}>
            {children}
        </MusicContext.Provider>
    );
};
