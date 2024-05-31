'use client';

import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useThemeStore } from '@/store/theme';
import Link from 'next/link';

const NavBar = () => {
  const toggleHandler = useThemeStore((state) => state.toggleTheme);
  const isDark = useThemeStore((state) => state.dark);

  return (
    <div className=" min-h-[10vh] flex flex-row justify-between items-center">
      <Link href="/">
        <h1 className=" text-2xl font-bold">Dictionary</h1>
      </Link>

      <div
        className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md cursor-pointer text-green-600 dark:text-green-400 text-xl"
        onClick={toggleHandler}
      >
        {isDark ? <MdDarkMode /> : <MdLightMode />}
      </div>
    </div>
  );
};

export default NavBar;
