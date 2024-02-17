'use client';

import { useState } from 'react';

export default function CollectionButton({ anime_mal_id, user_email, anime_image, anime_title }) {
  const [isCreated, setIsCreated] = useState(false);

  async function handleCollection(e) {
    e.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch('/api/v1/collection', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
  }

  return (
    <>
      {isCreated ? (
        <p>Berhasil Disimpan Ke Koleksi</p>
      ) : (
        <button onClick={handleCollection} className="text-sm bg-color-1 text-color-white border-2 border-color-black p-2 rounded mt-2">
          Add To Collection
        </button>
      )}
    </>
  );
}
