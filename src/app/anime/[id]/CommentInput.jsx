'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function CommentInput({ anime_mal_id, user_email, anime_title, username }){
    const [comment, setComment] = useState('');
    const [isCreated, setIsCreated] = useState(false);

    const router = useRouter();

    async function handlePosting(e){
        e.preventDefault();
        const data = { anime_mal_id, user_email, anime_title, username, comment };
        const response = await fetch('/api/v1/comment', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const postComment = await response.json();
        if (postComment.isCreated) {
            setIsCreated(true);
            setComment('');
            router.refresh();
        }
    }

    return (
        <div className="flex flex-col gap-2">
            { isCreated && <p>Komentar Terkirim...</p> }
            <textarea onChange={(e) => setComment(e.target.value)} value={comment} className="md:w-2/3 w-full border h-32 rounded py-2 px-3 text-xl" placeholder="Tambahkan komentar..."></textarea>
            <button onClick={handlePosting} disabled={!comment.trim()} className={`bg-color-realBlue w-32 p-2 rounded border-2 border-color-black text-color-white ${!comment.trim() && 'opacity-60'}`}>Comment</button>
        </div>
    )
}