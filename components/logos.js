import Image from 'next/image'
import PaintIcon from './icons/paint-icon'

export default function Logos() {
  return (
    <>
      <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-16 md:w-20 p-5 md:p-6 text-gray-800 dark:text-gray-200 mx-auto mt-12">
        <PaintIcon />
      </div>

      <h2 className="text-center pb-4 px-8 mt-4 mb-4 text-large md:text-xl font-black dark:text-gray-100">
        My interest are
      </h2>

      <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0">
        <div className="bg-orange-100 dark:bg-orange-200 p-12 sm:p-16 flex items-center h-64">
          <Image src="/images/logos/unity.png" alt="Unity logo" width={1044} height={380} />
        </div>
        <div className="bg-teal-100 dark:bg-teal-200 p-12 sm:p-16 flex items-center h-64">
          <Image src="/images/logos/oculus.png" alt="Oculus logo" width={914} height={380} />
        </div>
        {/* <div className="bg-green-100 dark:bg-green-200 p-12 sm:p-16 flex items-center h-64">
          <Image src="/images/logos/vrtk.png" alt="VRTK logo" width={608} height={160} />
        </div>
        <div className="bg-blue-100 dark:bg-blue-200 p-12 sm:p-16 flex items-center h-64">
          <Image src="/images/logos/neovim.png" alt="Neovim logo" width={741} height={214} />
        </div>  */}
      </div>
    </>
  )
}
