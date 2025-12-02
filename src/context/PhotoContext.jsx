import { createContext, useState } from 'react';

export const PhotoContext = createContext();

export function PhotoProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  const toggleFavorite = (id) => {
    setPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, liked: !photo.liked } : photo
      )
    );
  };

  return (
    <PhotoContext.Provider value={{ photos, setPhotos, toggleFavorite }}>
      {children}
    </PhotoContext.Provider>
  )
}