import Header from '@/components/Dashboard/Header';
import { authUserSession } from '@/libs/auth-libs';
import prisma from '@/libs/prisma';
import Link from 'next/link';

export default async function Page() {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

  return (
    <section className="mt-4 px-5 w-full">
      <Header title="My Comment" />
      <div className="grid grid-cols-1 gap-4 px-1">
        {comments.length === 0 ? 
        <div className='flex justify-center items-center bg-color-red my-56 mx-40 rounded'>
          <h3 className='text-2xl py-4 text-color-white'>Komentar masih kosong.</h3>
        </div>
        :
        (comments.map((comment) => (
          <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className='bg-color-dark text-color-white p-4'>
            <p className='text-color-aqua'>{comment.anime_title}</p>
            <p className='italic text-xl'>{comment.comment}</p>
          </Link>
        )))
      }
      </div>
    </section>
  );
}
