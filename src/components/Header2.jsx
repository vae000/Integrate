function Header2() {
  return (
    <div className="text-sm text-gray-900">
      <nav className="flex items-center px-4 py-3 bg-gray-900 justify-between">
        <div className="text-white flex items-center space-x-3">
          <a className="w-6 fill-current hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6"
            >
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
          </a>
          <div className="relative">
            <input
              type="text"
              className="rounded bg-gray-900 border border-gray-600 placeholder-gray-400  w-72 px-3 py-1"
              placeholder="search or jump to ... "
            />
            <div className="absolute top-0 right-0 flex items-center h-full">
              <div className="border border-gray-400 rounded text-xs text-gray-400 px-2 mr-2">
                /
              </div>
            </div>
          </div>
          <ul className="flex items-center space-x-4 font-semibold">
            <li>
              <a href="#" className="hover:text-gray-400">
                Pull requests
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Issues
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Explore
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white flex items-center space-x-4 ">
          <a href="#" className="relative hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 fill-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>

            <div className="absolute top-0 right-0 bg-blue-400 w-2 h-2 rounded-full"></div>
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center">
            <div className="w-6 h-6 rounded-full bg-blue-600">
              <img
                src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                alt=""
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </nav>
      <div className="bg-gray-100 flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="flex text-xl ml-2">
            <a href="#" className="text-blue-600 hover:underline">
              tailwindlab
            </a>
            <span className="mx-1">/</span>
            <a href="#" className="text-blue-600 hover:underline">
              tailwind
            </a>
          </div>
          <div className="flex items-center p-2 h-4 border border-gray-300 bg-gray-100 rounded-xl text-gray-600 text-xs ml-2">Public</div>
        </div>
        <div className="flex space-x-2">
          <div className="flex shadow-sm text-xs"></div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
