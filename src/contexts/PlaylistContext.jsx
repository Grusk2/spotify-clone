import React, { createContext, useContext, useState } from 'react';

const PlaylistContext = createContext();

export function usePlaylists() {
    return useContext(PlaylistContext);
}

export function PlaylistProvider({ children }) {
    const [playlists, setPlaylists] = useState([]);

    const addPlaylist = (playlist) => {
        setPlaylists((prev) => [...prev, playlist]);
    };

    return (
        <PlaylistContext.Provider value={{ playlists, addPlaylist }}>
            {children}
        </PlaylistContext.Provider>
    );
}
