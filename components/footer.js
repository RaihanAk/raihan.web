import { useDarkMode } from 'next-dark-mode'
import GitHub from './icons/github'
import LinkedIn from './icons/linkedin'

export default function Footer() {
  const { darkModeActive } = useDarkMode()

  return (
    <footer className={`py-12 mt-16 ${darkModeActive ? 'bg-black' : 'bg-[#EDF2F7]'}`}>
      <div className="max-w-screen-xl mx-auto px-8 py-32 xl:px-0">
        <div className="flex flex-col items-center gap-12">
          <h1 className={`text-5xl font-bold mb-6 ${darkModeActive ? 'text-white' : 'text-gray-900'}`}>
            Let&apos;s collaborate
          </h1>
          <div className="flex flex-col items-center">
            <a
              href="mailto:raihanakbar1999@gmail.com/"
              target="_blank"
              className={`transition-colors duration-150 ${
                darkModeActive 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              aria-label="Mail"
            >
              <p className={`text-1xl mb-6 ${darkModeActive ? 'text-white' : 'text-gray-900'}`}>
                raihanakbar1999@gmail.com
              </p>
            </a>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/raihan-akbar/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 transition-colors duration-150 ${
                  darkModeActive 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/RaihanAk/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 transition-colors duration-150 ${
                  darkModeActive 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                aria-label="GitHub"
              >
                <GitHub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
