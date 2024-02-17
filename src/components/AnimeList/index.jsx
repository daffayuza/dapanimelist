import Image from 'next/image';
import Link from 'next/link';

export default function AnimeList({ api }) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer hover:text-color-blue transition-all border-2 rounded">
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-80 rounded" />
            <h1 className="font-bold md:text-xl text-md p-4">{anime.title}</h1>
          </Link>
        );
      })}
    </div>
  );
}
