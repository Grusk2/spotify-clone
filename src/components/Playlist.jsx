import React from 'react';
import { usePlaylists } from '../contexts/PlaylistContext';

function PlaylistList() {
    const { playlists } = usePlaylists();

    return (
        <div>
            {playlists.map((p, index) => (
                <p key={index}>{p.name} - {p.genre} - {p.artist}</p>
            ))}
        </div>
    );
}

export default PlaylistList;
