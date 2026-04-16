const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

async function fetchFromJikan(endpoint) {
    const response = await fetch(`${JIKAN_BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

// Existing TMDB functions...
