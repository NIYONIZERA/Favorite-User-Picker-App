import  { useContext } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

function UserDisplay() {
  const { favoriteUser, setFavoriteUser } = useContext(FavoriteUserContext);

  // Handle clearing the favorite user
  const handleClearFavorite = () => {
    setFavoriteUser(null);
    localStorage.removeItem('favoriteUser');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-blue-400 mb-4">Your Favorite User:</h2>
      {favoriteUser ? (
        <p className="text-gray-800 text-sm">
          Your favorite user is <strong className="text-sm">{favoriteUser.name}({favoriteUser.email})</strong> 
          
        </p>
      ) : (
        <p className="text-gray-500 text-sm">No favorite user selected.</p>
      )}
      {favoriteUser && (
        <button
          onClick={handleClearFavorite}
          className="mt-4 bg-blue-600 text-sm text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Clear Favorite
        </button>
      )}
    </div>
  );
}

export default UserDisplay;