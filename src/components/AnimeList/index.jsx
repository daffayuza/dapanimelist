import Image from 'next/image';
import Link from 'next/link';

export default function AnimeList({ api }) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={index}
            className="cursor-pointer text-color-white hover:text-color-info bg-color-coklat transition-all outline outline-2 outline-color-black hover:outline-color-blue hover:outline-4 outline-red-300 rounded-lg overflow-hidden"
          >
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-80 border-b border-color-black" />
            <h1 className="font-bold md:text-xl text-md p-4">{anime.title}</h1>
          </Link>
        );
      })}
    </div>
  );
}
