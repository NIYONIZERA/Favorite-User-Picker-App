import  { createContext, useState, useEffect } from 'react';

// Create the context
export const FavoriteUserContext = createContext();

// Create the provider
export const FavoriteUserProvider = ({ children }) => {
  // State for favorite user
  const [favoriteUser, setFavoriteUser] = useState(null);

  // Load favorite user from localStorage 
  useEffect(() => {
    const storedUser = localStorage.getItem('favoriteUser');
    if (storedUser) {
      setFavoriteUser(JSON.parse(storedUser));
    }
  }, []);

  // Save favorite user to localStorage when it changes
  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem('favoriteUser', JSON.stringify(favoriteUser));
    }
  }, [favoriteUser]);

  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
      
    </FavoriteUserContext.Provider>
  );
};