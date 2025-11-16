🎧 DSJ04 – React Podcast App
Search • Sort • Filter • Pagination • State Sync

This project is an advanced podcast browsing application built with React. It expands on the earlier podcast preview project by introducing dynamic search, sorting, genre filtering, and pagination—all working together through synchronised state management.

The goal of the project is to create a smooth, real-time UI that updates instantly as users interact with the app, while maintaining consistent state across all features.

🚀 Features
🔍 Live Search

Search any part of a podcast title

Updates dynamically as the user types

Search results persist through sorting, filtering, and pagination

↕️ Sorting Options

Newest first (based on last updated date)

Title A–Z

Title Z–A

Sorting integrates seamlessly with current search/filter state

🎭 Genre Filtering

Filter podcasts by genre using a dropdown or multi-select

Genre titles mapped using data.js

Filters persist when switching pages or sorting

📄 Pagination

Display podcasts in smaller, manageable chunks

Methods supported:

Numbered pagination

Load More button

Infinite scroll (optional)

Pagination respects:

Active search

Active filters

Active sorting

🔄 State Synchronisation

All UI controls stay in sync

All selections persist as the user navigates

Centralised state using React hooks, context, or a state-management pattern

🧼 Clean, Scalable Codebase

Reusable functional components

Consistent formatting

JSDoc documentation for utilities & major functions

Modular file structure
