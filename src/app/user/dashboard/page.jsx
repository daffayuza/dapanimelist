import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image";
import Link from "next/link";

export default async function Page(){
    const user = await authUserSession();

    return (
        <div className="flex flex-col gap-6 justify-center items-center mt-10">
            <h3 className="text-2xl font-bold">Welcome, {user?.name} !</h3>
            <Image src={user?.image} width={250} height={250} className='rounded-full border-4 border-color-1'/>
            <div className="flex gap-4">
                <Link href='/user/dashboard/collection' className="bg-color-blue py-2.5 px-2 rounded border-2 border-color-black text-color-white">My Collection</Link>
                <Link href='/user/dashboard/comment' className="bg-color-blue py-2.5 px-2 rounded border-2 border-color-black text-color-white">My Comment</Link>
            </div>
        </div>
    )
}