import getAnimeResponse from '@/libs/api-libs';
import VideoPlayer from '@/components/utilities/VideoPlayer';
import Image from 'next/image';
import CollectionButton from './CollectionButton';
import { authUserSession } from '@/libs/auth-libs';
import prisma from '@/libs/prisma';
import CommentInput from './CommentInput';
import CommentBox from './CommentBox';

export default async function Page({ params }) {
  const { id } = params;
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where : { anime_mal_id : id, user_email: user?.email }
  })

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className='text-4xl font-bold'>
          {anime.data.title} - {anime.data.year}
        </h3>
        { !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/> }
      </div>
      <div className="flex pt-4 px-4 text-sm font-bold gap-2 overflow-x-auto">
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>PERINGKAT</h1>
          <p className="text-color-white">{anime.data.rank}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>SKOR</h1>
          <p className="text-color-white">{anime.data.score}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>ANGGOTA</h1>
          <p className="text-color-white">{anime.data.members}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 bg-color-blue w-32 py-1 rounded">
          <h1>EPISODE</h1>
          <p className="text-color-white">{anime.data.episodes}</p>
        </div>
      </div>
      <div className="flex gap-6 pt-4 px-4 md:flex-nowrap flex-wrap">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded" />
        <div>
          <h3 className='font-bold text-2xl mb-2'>Sinopsis :</h3>
          <p className="text-xl text-justify">{anime.data.synopsis}</p>
        </div>
      </div>
      {user && 
        <div className='px-4 pt-4'>
          <CommentInput anime_mal_id={id} user_email={user?.email} anime_title={anime.data.title} username={user?.name}/>
        </div>
      }
      <div className='mx-4 mb-4'>
        <CommentBox anime_mal_id={id}/>
      </div>
      <div>
        <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
}
