import Link from "next/link"
import { volumes } from "../../public/resources 3/lib/data"

export default function FellowshipOfTheRing() {

    return (
        <>
        <Link href={`/volumes/`}>All Volumes</Link>
        <h1>Fellowship of the Ring</h1>
        <p>{volumes[0].description}</p>
        <ul>
            <li>{volumes[0].books[0].title} {volumes[0].books[0].ordinal}</li>
            <li>{volumes[0].books[1].title} {volumes[0].books[1].ordinal}</li>
        </ul>
        <div>
        <Link href="">Previous</Link>
        </div>
        <div>
        <Link href="">Next</Link>
        </div>
        </>
        )
}