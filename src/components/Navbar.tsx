import Icon from './Icon';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TanStack Query
          </span>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {darkMode ? (
              <Icon
                name="Moon"
                color="white"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <Icon
                name="Sun"
                color="black"
                onClick={() => setDarkMode(true)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
