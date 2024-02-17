import Link from "next/link";
import UserAuthButton from "./UserActionButton";
import InputSearch from "./inputSearch";

export default function Navbar(){
    return (
        <header className="bg-color-1">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 px-6 gap-2">
                <Link href='/' className="font-bold text-color-white text-2xl ">DAPANIMELIST🔥</Link>
                <InputSearch />
                <UserAuthButton/>
            </div>
        </header>
    )
}   