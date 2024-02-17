'use client'

import { FileMagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function NotFound(){
    const router = useRouter();

    return (
        <div className="my-60 mx-auto flex justify-center">
            <div className="flex items-center flex-col gap-3">
                <FileMagnifyingGlass size={35} />
                <h3 className="md:text-4xl text-2xl font-bold">NOT FOUND</h3>
                <button onClick={() => router.back()} className="text-color-white p-2 px-3 rounded bg-color-blue my-2 border-solid border-2 border-color-black" >Kembali</button>
            </div>
        </div>
    )
}