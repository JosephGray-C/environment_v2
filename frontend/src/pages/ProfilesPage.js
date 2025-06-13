// Imports
import { Link, Outlet } from "react-router-dom";


export default function Profiles() {
  // Aquí se haria la llamada a la API para obtener los perfiles
  const profiles = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 }, 
    { id: 3, name: 'Alice Johnson', age: 28 },
    { id: 4, name: 'Bob Brown', age: 35 },  
    { id: 5, name: 'Charlie White', age: 22 }
  ];

  return (
    <div className="">
        <div className="">
            {profiles.map(profile => (
              <Link key={profile.id} to={`/profiles/${profile.id}`}>
                  Profile {profile.name}
              </Link>
            ))}
        </div>

        <Outlet />

        <Link className="button" to="/">Go to Home</Link>
    </div>
  )
}