// Imports
import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className="">
        <p>
          Home Page
        </p>

        <Link className="button" to="/profiles">Go to Profiles</Link>
    </div>
  );
}
