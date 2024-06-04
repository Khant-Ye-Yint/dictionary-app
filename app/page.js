'use client';

import { useRef, useState } from 'react';
import SearchBar from './components/SearchBar';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';

const Page = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState({});
  const audioRef = useRef();

  let audio;

  if (isFetched) {
    audio = data.phonetics.filter((item) => item.audio !== '');
    console.log(audio);
  }

  return (
    <div className="mt-4 mb-10 light">
      <SearchBar setData={setData} setIsFetched={setIsFetched} />
      {isFetched && (
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-3xl ">{data.word}</h1>
              <p className="text-green-600 dark:text-green-200">
                {data.phonetic}
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
          <div>
            <h2 className="text-lg font-semibold ">
              {data.meanings[0].partOfSpeech}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-light">Meaning</h1>
            <ul className="list">
              {data.meanings[0].definitions.slice(0, 3).map((item, key) => (
                <li key={key}>{item.definition}</li>
              ))}
            </ul>
          </div>
          {data.meanings[0].synonyms.length > 1 && (
            <div>
              <span className="mr-4 text-lg font-semibold">Synonyms</span>
              {data.meanings[0].synonyms.slice(0, 2).map((item, key) => (
                <span key={key} className="text-green-600 ">
                  {item}
                </span>
              ))}
            </div>
          )}
          {data.meanings[1] && (
            <>
              <div>
                <h2 className="text-lg font-semibold ">
                  {data.meanings[1].partOfSpeech}
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-lg font-light ">Meaning</div>
                <ul className="list">
                  {data.meanings[1].definitions.slice(0, 3).map((item, key) => (
                    <li key={key}>{item.definition}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
          <div className="w-full ">
            <h1 className="text-lg font-semibold">Source </h1>
            <span className="w-full text-wrap">
              <Link
                className="text-xs underline hover:text-gray-600"
                target="_blank"
                href={`https://api.dictionaryapi.dev/api/v2/entries/en/${data.word}`}
              >{`https://api.dictionaryapi.dev/api/v2/entries/en/${data.word}`}</Link>
            </span>
          </div>
          {audio.length > 0 && <audio src={audio[0].audio} ref={audioRef} />}
        </div>
      )}
    </div>
  );
};

export default Page;
