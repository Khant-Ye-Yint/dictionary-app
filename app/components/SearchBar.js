'use client';

import { FaSearch } from 'react-icons/fa';
import { useRef } from 'react';

const SearchBar = ({ setData, setIsFetched }) => {
  const keywordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keywordRef.current.value}`
    );
    const data = await res.json();
    setData(data);

    setIsFetched(true);
    keywordRef.current.value = '';
  };

  return (
    <form
      className="flex flex-row items-center justify-between px-2 py-2 mb-8 bg-gray-200 rounded-sm  dark:bg-gray-600"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="w-full bg-transparent border-none outline-none "
        ref={keywordRef}
      />
      <button>
        <FaSearch className="text-xl " />
      </button>
    </form>
  );
};

export default SearchBar;
