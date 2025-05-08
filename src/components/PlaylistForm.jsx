import React, { useState } from 'react';
import { usePlaylists } from '../contexts/PlaylistContext';

function PlaylistForm() {
    const { addPlaylist } = usePlaylists();
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlaylist({ name, genre, artist });
        setName('');
        setGenre('');
        setArtist('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Namn" />
            <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
            <input value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" />
            <button type="submit">Skapa spellista</button>
        </form>
    );
}

export default PlaylistForm;
