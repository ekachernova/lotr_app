import { useRouter } from "next/router";
import Link from "next/link";
import { volumes } from "../../public/resources 3/lib/data";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  // /volumes/[slug]
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);

  const i = volumes.findIndex((volume) => volume.slug === slug);
  const length = volumes.length;
  const prevSlug = volumes[i === 0 ? 0 : i - 1].slug;
  // i = 2  length = 3 : nextSlug = 3   length[3] => undefined
  const nextSlug = volumes[i >= length - 1 ? length - 1 : i + 1].slug;

  function getRandomElement(array) {
    console.log("random!");

    return array[Math.floor(Math.random() * array.length)];
  }

  function handleRandomButtonClick() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Link href="../volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        <li>
          {volume.title} {volumes[0].books[0].ordinal}
        </li>
        <li>
          {volume.books[1].title} {volume.books[1].ordinal}
        </li>
      </ul>
      <Image
        src={volume.cover}
        alt={volume.title}
        width={140}
        height={230}
      ></Image>
      <div>
        <button onClick={handleRandomButtonClick}>Go to random volume!</button>
      </div>
      <div>
        <Link href={`/volumes/${prevSlug}`}>Previous</Link>
      </div>
      <div>
        <Link href={`/volumes/${nextSlug}`}>Next</Link>
      </div>
    </>
  );
}
