import React from 'react';
import PlaylistForm from '../components/PlaylistForm';
import PlaylistList from '../components/Playlist';

function Home() {
    return (
        <div>
            <h1>Spellistehanterare</h1>
            <PlaylistForm />
            <PlaylistList />
        </div>
    );
}

export default Home;
