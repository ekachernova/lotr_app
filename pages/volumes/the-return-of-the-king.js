import Link from "next/link"
import { volumes } from "../../public/resources 3/lib/data"
import Image from "next/image";
export default function ReturnOfTheKing() {
    const volume = volumes.find(
        ({ slug }) => slug === "the-return-of-the-king"
      );
    
    return (
        <>
        <Link href="../volumes">All Volumes</Link>
        <h1>The return of the King</h1>
        <p>{volume.description}</p>
        <ul>
            <li>{volume.title} {volumes[0].books[0].ordinal}</li>
            <li>{volume.books[1].title} {volume.books[1].ordinal}</li>
        </ul>
        <Image
             src={volume.cover}
             alt={volume.title}
             width={140}
             height={230}
        >
        </Image>
        <div>
        <Link href="/volumes/the-two-towers">Previous</Link>
        </div>
        <div>
        <Link href="/volumes">Next</Link>
        </div>
        </>
        )
}
