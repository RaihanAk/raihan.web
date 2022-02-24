/* eslint-disable object-curly-newline */
/* eslint-disable global-require */
/* eslint-disable no-else-return */

import Image from 'next/image'

export default function Logos() {
  return (
    <>
      <a
        href="https://github.com/RaihanAk/"
        className="w-8 mr-5 transition-colors duration-150 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark-hover:text-gray-100"
      >
        <Image src="/images/rai_logo-90x90.png" alt="Rai logo" width={150} height={150} />
      </a>
    </>
  )
}
