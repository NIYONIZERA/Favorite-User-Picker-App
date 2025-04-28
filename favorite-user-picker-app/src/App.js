import { FavoriteUserProvider } from './components/FavoriteUserContext';
import UserPicker from './components/UserPicker';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <FavoriteUserProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
        <h1 className="text-xlg font-bold text-blue-500 mb-6">Favorite User Picker App</h1>
        <div className="w-full max-w-md">
          <UserPicker />
          <UserDisplay />
        </div>
      </div>
    </FavoriteUserProvider>
  );
}

export default App;
