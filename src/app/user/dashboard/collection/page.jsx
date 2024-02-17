import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page(){
    const user = await authUserSession();
    const collections = await prisma.collection.findMany({
        where: { user_email: user.email }
    })
    
    return (
        <section className="mt-4 px-4 w-full">
            <Header title='My Collection'/>
            
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
                {collections.length === 0 ? 
                <div className='my-20 mx-4'>
                    <h3 className='text-xl py-3 bg-color-red text-color-white text-center rounded'>Data Collection masih kosong.</h3>
                </div>
                :
                (collections.map((collection, index) => (
                    <Link key={index} href={`/anime/${collection.anime_mal_id}`} className="relative border-2 rounded">
                    <Image src={collection.anime_image} alt='' width={350} height={350} className="w-full rounded max-h-96 object"/>
                    <div className="absolute bg-color-realBlue bottom-0 w-full h-16 flex justify-center items-center border-t-2">
                        <h3 className="text-2xl text-center text-color-white">{collection.anime_title}</h3>
                    </div>
                </Link>
                )) )
              }
            </div>
        </section>
    )
}