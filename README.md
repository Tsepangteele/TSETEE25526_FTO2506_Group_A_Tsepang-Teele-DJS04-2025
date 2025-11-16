🎧 DJS03 – React Podcast Preview Application

A React-based podcast preview app that fetches data from an external API and displays it in a clean, responsive card layout.
This project builds on the concepts from DJS01 and DJS02, transitioning from vanilla JavaScript + Web Components to a modular React architecture.

🚀 Features

Live API Fetching from:
https://podcast-api.netlify.app/shows

Responsive grid of podcast preview cards

Genre mapping using static data (data.js)

Human-readable last updated date using a custom utility

Loading spinner while data is being fetched

Error handling with a friendly UI message

Reusable component-driven structure (React best practices)

📁 Project Structure
src/
│
├── api/
│   └── fetchPodcasts.js    # Fetches podcast data from remote API
│
├── components/
│   ├── Header.jsx          # Navigation / header component
│   ├── PodcastCard.jsx     # Displays an individual podcast card
│   └── PodcastGrid.jsx     # Renders the full grid of cards
│
├── utils/
│   └── formatDate.js       # Converts ISO timestamps into readable dates
│
├── App.jsx                 # Root component managing state + layout
├── data.js                 # Static mapping of genre IDs to titles
├── index.css               # Global styles, layout, spinner, tags
├── main.jsx                # Vite entry point

🛠️ How It Works
1. Data Fetching

fetchPodcasts.js handles:

Sending the API request

Returning data or throwing an error

Used inside App.jsx with React hooks

2. Genre Mapping

The API returns genre IDs — so data.js maps each ID to:

A genre title

A readable tag used inside PodcastCard.jsx

3. UI Rendering

PodcastGrid.jsx loops through the list of podcasts

Each podcast is passed into PodcastCard.jsx

Cards display:

Poster image

Title

Season count

Genre tags

Last updated date

4. Styling

Grid layout

Tags

Spinner animation

Error message UI
All created with plain CSS in index.css.

🎓 Learning Goals

By completing this project, you will learn how to:

Structure a React application using functional components

Use the useEffect and useState hooks for data fetching

Apply conditional rendering (loading, success, error)

Consume an external API in a React front-end

Build reusable UI components

Use utility functions + static data inside React
