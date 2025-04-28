
import {useState,useEffect,useContext} from 'react';
import {FavoriteUserContext} from './FavoriteUserContext';
 function UserPicker(){
 const [users,setUsers]=useState([]);
 const [loading,setLoading]=useState(true);
 const {setFavoriteUser}=useContext(FavoriteUserContext);

 //Fetch users by using useEffect
 useEffect(()=> {
    const fetchUsers= async ()=>{
        try{
            const response= await fetch('https://jsonplaceholder.typicode.com/users');
            const data= await response.json();
            setUsers(data);
        } catch(error){
            console.error('Error fetching users:',error);
            

        }
        finally{
            setLoading(false);
        }
    };
    fetchUsers();

 },[])

  // Handle selecting a user
  const handlePickUser = (user) => {
    setFavoriteUser({ name: user.name, email: user.email });
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="mb-8">
      <p className="text-lg font-semibold text-gray-700 mb-4">Select  your favorite user:</p>
      <ul className="bg-blue-400  text-sm rounded-lg shadow divide-y divide-gray-200">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handlePickUser(user)}
            className="p-4 hover:bg-gray-50 cursor-pointer transition"
          >
            <span className="text-gray-800">{user.name}</span>
            <span className="text-gray-500 text-sm block">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPicker;