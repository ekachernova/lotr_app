import Link from "next/link"
import { introduction } from "../../public/resources 3/lib/data"
import { volumes } from "../../public/resources 3/lib/data"

export default function Volumes() {
    return (
        <>
        <h1>Lord of Ring</h1>
        <p>{introduction}</p>
        <h2>All volumes</h2>
        <ul>
            
        {volumes.map((volume) => 
          <li key={volume.slug}>
          <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
         )}
        
        </ul>
        </>
    )
}
