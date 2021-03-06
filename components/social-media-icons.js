import GitHub from './icons/github'
import Twitter from './icons/twitter'

export default function SocialMediaIcons() {
  return (
    <>
      <a
        href="https://github.com/RaihanAk/"
        className="w-8 mr-5 transition-colors duration-150 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark-hover:text-gray-100"
      >
        <GitHub />
      </a>
      <a
        href="https://twitter.com/raidiance__"
        className="w-8 mr-5 transition-colors duration-150 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark-hover:text-gray-100"
      >
        <Twitter />
      </a>
    </>
  )
}
