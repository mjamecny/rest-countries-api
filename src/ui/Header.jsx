import { CiDark } from "react-icons/ci"

import { useDarkMode } from "../context/DarkModeContext"

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className=" bg-white dark:bg-darkBlue shadow-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-1.6 py-2.4">
        <h1 className="font-extrabold dark:text-white lg:text-2.4">
          Where in the world?
        </h1>
        <button
          className="flex items-center gap-0.8 dark:text-white"
          onClick={toggleDarkMode}
        >
          <CiDark /> Dark Mode
        </button>
      </div>
    </div>
  )
}
