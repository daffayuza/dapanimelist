import prisma from '@/libs/prisma';

export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <>
      <h3 className="font-bold text-2xl mb-3 mt-4 ml-1 underline">{comments.length} Komentar :</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-color-dark p-4 rounded">
            <p className="font-bold text-color-aqua">{comment.username}</p>
            <p className="text-color-black bg-color-white p-1.5 mt-1.5">{comment.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
}
