'use client';

import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useThemeStore } from '@/store/theme';
import Link from 'next/link';
// import Cookies from 'js-cookie';
// import { useRouter } from 'next/navigation';

const NavBar = () => {
  const toggleHandler = useThemeStore((state) => state.toggleTheme);
  const isDark = useThemeStore((state) => state.dark);
  // const theme = Cookies.get('theme');
  // const router = useRouter();

  // const toggleHandler = () => {
  //   Cookies.set('theme', theme === 'dark' ? 'light' : 'dark', { expires: 7 });
  //   console.log(Cookies.get('theme'));
  //   router.refresh();
  // };

  return (
    <div className=" min-h-[10vh] flex flex-row justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold ">Dictionary</h1>
      </Link>

      <div
        className="p-2 text-xl text-green-600 bg-gray-200 rounded-md cursor-pointer dark:bg-gray-800 dark:text-green-400"
        onClick={toggleHandler}
      >
        {isDark ? <MdDarkMode /> : <MdLightMode />}
      </div>
    </div>
  );
};

export default NavBar;
