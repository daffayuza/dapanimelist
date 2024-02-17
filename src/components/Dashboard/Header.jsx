'use client'
import { useRouter } from "next/navigation";

import { ArrowSquareLeft } from "@phosphor-icons/react";

export default function Header({title}){
    const router = useRouter();

    function handleBack(e){
        e.preventDefault();
        router.back();
    }

    return (
        <div className="flex justify-between mb-4">
                <button><ArrowSquareLeft size={32} onClick={handleBack}/></button>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
    )
}