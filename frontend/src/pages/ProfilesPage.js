// Imports


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
    <div className="Home">
      <header className="Home-header">
        <p>
          Profiles Page 
        </p>
      </header>
    </div>
  )
}