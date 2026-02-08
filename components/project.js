import { useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import StarIcon from './icons/star'

const classNames = require('classnames')

const fetcher = url => fetch(url).then(res => res.json())

export default function Project({ content, dark, reverse }) {
  const { data } = useSWR(
    content.apiUrl,
    fetcher
  )

  // Support both old format (single image) and new format (array of images)
  let images = []
  
  if (content.images) {
    // If images is a string (JSON), parse it
    if (typeof content.images === 'string') {
      try {
        images = JSON.parse(content.images)
      } catch (e) {
        // If parsing fails, treat as single image path
        images = [{ src: content.images, srcDark: content.images }]
      }
    } else if (Array.isArray(content.images)) {
      images = content.images
    }
  } else if (content.imageSrc) {
    // Fallback to old format
    images = [{
      src: content.imageSrc,
      srcDark: content.imageSrcDark || content.imageSrc,
      width: content.imageWidth,
      height: content.imageHeight
    }]
  }
  
  // Normalize image objects to ensure they have the required structure
  images = images.map(img => {
    if (typeof img === 'string') {
      return {
        src: img,
        srcDark: img,
        width: content.imageWidth || 460,
        height: content.imageHeight || 215
      }
    }
    return {
      src: img.src || img.imageSrc,
      srcDark: img.srcDark || img.imageSrcDark || img.src || img.imageSrc,
      width: img.width || content.imageWidth || 460,
      height: img.height || content.imageHeight || 215
    }
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImage = images[currentImageIndex]
  const hasMultipleImages = images.length > 1

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (!currentImage) {
    return null
  }

  return (
    <div className={
      classNames('mb-16 flex flex-col', {
        'md:flex-row': !reverse,
        'md:flex-row-reverse': reverse
      })
     }
    >
      <div className="flex items-center w-full px-8 md:w-1/2">
        <div className={
          classNames('w-full relative', {
            "bg-white rounded border border-gray-200 dark:border-0": content.imageBorder
          })
         }
        >
          <a href={content.url} className="block">
            {dark ? (
              <Image
                src={currentImage.srcDark || currentImage.src}
                alt={`${content.title} - Image ${currentImageIndex + 1}`}
                width={currentImage.width || content.imageWidth || 460}
                height={currentImage.height || content.imageHeight || 215}
                layout='responsive'
                className={!content.imageBorder ? "rounded" : ""}
              />
            ) : (
              <Image
                src={currentImage.src}
                alt={`${content.title} - Image ${currentImageIndex + 1}`}
                width={currentImage.width || content.imageWidth || 460}
                height={currentImage.height || content.imageHeight || 215}
                layout='responsive'
                className={!content.imageBorder ? "rounded" : ""}
              />
            )}
          </a>

          {/* Navigation Controls */}
          {hasMultipleImages && (
            <>
              <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="pointer-events-auto bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="pointer-events-auto bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all z-10"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none z-10">
                <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full px-8 py-6 text-gray-700 dark:text-gray-500 md:py-0 md:w-1/2">
        <h3 className="text-xl font-bold">
          <a href={content.url}>
            {content.title}
          </a>
        </h3>
        <p>
          {content.projectBrief}
        </p> <br/>
        <p>
          {content.description}
        </p> <br/>
        <p>
          {content.tools}
        </p>
        <p className="mt-4">
          {/* Shows repo's stargazer count
          <StarIcon size={16} />
          <span className="inline-block ml-2 align-middle">{data && data.language}</span> */}
        </p>
      </div>
    </div>
  )
}
