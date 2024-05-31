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
    setData(data[0]);

    setIsFetched(true);
    keywordRef.current.value = '';
  };

  return (
    <form
      className=" flex flex-row justify-between items-center bg-gray-200 dark:bg-gray-600 px-2 py-2 rounded-sm mb-8"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className=" w-full bg-transparent border-none outline-none"
        ref={keywordRef}
      />
      <button>
        <FaSearch className=" text-xl" />
      </button>
    </form>
  );
};

export default SearchBar;
