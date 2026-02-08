import Image from 'next/image'

export default function Projects() {
  return (
    <>
      <div className="w-16 mx-auto mt-12 md:w-20">
        <Image src="/images/rai_profile.png" alt="Raihan Akbar" width={192} height={192} className="rounded-full" />
      </div>

      <h2 className="px-8 pb-4 mt-4 font-black text-center text-large md:text-xl dark:text-gray-100">
        I&apos;m a Game Developer.
      </h2>

      <p className="px-8 mx-auto mb-16 text-base text-center text-gray-700 md:text-xl dark:text-gray-500 md:px-20">
        I develop games using Unity and Unreal game engines. <br/>
        A passionate programmer at heart. <br/>
        And a big-time music enthusiast, no matter the genre.
      </p>

      <h2 className="px-8 pb-16 mt-16"/>
    </>
  )
}
