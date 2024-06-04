'use client';

import { useRef, useState } from 'react';
import SearchBar from './components/SearchBar';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';

const Page = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState({});
  const audioRef = useRef();

  let audio = [];

  if (isFetched) {
    data.forEach((chunk) => {
      const filteredChunks = chunk.phonetics.filter(
        (item) => item.audio !== ''
      );
      filteredChunks.forEach((chunk) => audio.push(chunk));
    });
    console.log(audio);
  }

  return (
    <div className="mt-4 mb-10 light">
      <SearchBar setData={setData} setIsFetched={setIsFetched} />
      {isFetched && (
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-3xl ">{data[0].word}</h1>
              <p className="text-green-600 dark:text-green-200">
                {data[0].phonetic}
              </p>
            </div>
            <div
              className={` ${
                audio.length === 0
                  ? 'bg-gray-100 cursor-not-allowed'
                  : 'bg-green-200 text-green-600 hover:bg-green-300 cursor-pointer'
              } rounded-full p-4 `}
              onClick={() => audio.length > 0 && audioRef.current.play()}
            >
              <FaPlay className="text-2xl " />
            </div>
          </div>

          {data.map((chunk) =>
            chunk.meanings.map((item, key) => (
              <div key={key}>
                <div>
                  <h2 className="text-lg font-semibold ">
                    {item.partOfSpeech}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-light">Meaning</h1>
                  <ul className="list">
                    {item.definitions.slice(0, 3).map((item, key) => (
                      <li key={key}>{item.definition}</li>
                    ))}
                  </ul>
                </div>
                {item.synonyms.length > 1 && (
                  <div className="mt-2">
                    <span className="mr-4 text-lg font-semibold">Synonyms</span>
                    {item.synonyms.slice(0, 2).map((snapshot, key) => (
                      <span key={key} className="text-green-600 ">
                        {snapshot}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}

          <div className="w-full ">
            <h1 className="text-lg font-semibold">Source </h1>
            <span className="w-full text-wrap">
              <Link
                className="text-xs underline hover:text-gray-600"
                target="_blank"
                href={`https://api.dictionaryapi.dev/api/v2/entries/en/${data[0].word}`}
              >{`https://api.dictionaryapi.dev/api/v2/entries/en/${data[0].word}`}</Link>
            </span>
          </div>
          {audio.length > 0 && <audio src={audio[0].audio} ref={audioRef} />}
        </div>
      )}
    </div>
  );
};

export default Page;
