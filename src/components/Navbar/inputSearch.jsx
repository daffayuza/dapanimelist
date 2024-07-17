'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value.trim();
    if(keyword){
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <form>
        <input placeholder="Search for..." className="w-full p-2 rounded" ref={searchRef} />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
}
