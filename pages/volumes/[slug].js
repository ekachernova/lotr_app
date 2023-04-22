export default function VolumeDetail() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="../volumes">All Volumes</Link>
      <h1>Fellowship of the Ring</h1>
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
        <Link href="/volumes">Previous</Link>
      </div>
      <div>
        <Link href="/volumes/the-two-towers">Next</Link>
      </div>
    </>
  );
}
