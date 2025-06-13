// Imports
import { useParams } from "react-router-dom";


export default function ProfilePage() {

  const params = useParams();
  console.log(params);

  return (
     <div className="">
        <p>
          Profile Page {params.id}
        </p>
    </div>
  )
}
