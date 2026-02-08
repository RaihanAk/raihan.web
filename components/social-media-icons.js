import { useDarkMode } from 'next-dark-mode'
import LinkedIn from './icons/linkedin'

export default function SocialMediaIcons() {
  const { darkModeActive } = useDarkMode()

  return (
    <>
      <a
        href="https://www.linkedin.com/in/raihan-akbar/"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-8 mr-5 transition-colors duration-150 ${
          darkModeActive 
            ? 'text-gray-400 hover:text-white' 
            : 'text-gray-700 hover:text-gray-900'
        }`}
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </a>
    </>
  )
}
