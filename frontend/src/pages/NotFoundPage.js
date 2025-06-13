// Imports
import { Link } from "react-router-dom";


export default function NotFound() {



  return (
    <div className="">
        <p>
          404 Not Found
        </p>

        <Link className="button" to="/">Go to Home</Link>
        {/* <a className="button"  href="/">Go to Home (without React Router)</a> */}
    </div>
  )
}