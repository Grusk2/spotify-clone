import React from 'react';
import { PlaylistProvider } from './contexts/PlaylistContext';
import Home from './pages/Home';

function App() {
    return (
        <PlaylistProvider>
            <Home />
        </PlaylistProvider>
    );
}

export default App;
