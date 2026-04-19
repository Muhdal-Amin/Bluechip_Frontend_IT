/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from 'react'
import styles from './finder.module.css'
import type { UnsplashPhoto } from '@/types'

export default function Finder() {
    const [query, setQuery] = useState('');
    const [results, setresults] = useState<UnsplashPhoto[]>([]);

    //Function to handle the form submission
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (query.trim() === '') return;

        try {
            // Send a GET request to the unsplash API with the query.
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=xiYVQVRu32EgmLBRl4TyTffC7WU85fsqs1vtRxVj8Qg`)

            // Parse the response and update the results state.
            const data = await response.json();

            // Update the results state with the data received from the API.
            setresults(data.results);
        } catch (error) {
            console.log('Error fetching data from Unsplash API:', error);
        }
    }

    // Render the search form and the results.
    return (
  <div>
    <h1 className={styles.title}>Photo Finder</h1>

    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for photos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>

    <div className={styles.results}>
      {results.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.regular}
          alt={photo.alt_description ?? ''}
        />
      ))}
    </div>
  </div>
);
}