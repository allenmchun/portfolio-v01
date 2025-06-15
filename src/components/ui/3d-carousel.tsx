"use client"

import { memo, useEffect, useLayoutEffect, useMemo } from "react"
import { motion } from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
) {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const matches = useMemo(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  }, [query, initializeWithValue, defaultValue])

  return matches
}

const projects = [
  {
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*CIQMZBw2K3OGsRn5",
    url: "https://ucladatares.medium.com/analyzing-domestic-airlines-and-flights-4ea21f31d932"
  },
  {
    image: "https://i0.wp.com/stadiumsportzz.com/wp-content/uploads/2020/03/c5971973-56ea-4b00-ab4e-51da22d25cf3-2019-12-07_Westbrook_Harden.jpeg?fit=2823%2C1588&ssl=1",
    url: "https://www.bruinsportsanalytics.com/post/why-the-houston-rockets-small-ball-experiment-failed"
  },
  {
    image: "https://static.wixstatic.com/media/d20f08_d1a01badaf9f4dc9bbfd2c988ef89498~mv2.jpg/v1/fill/w_740,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d20f08_d1a01badaf9f4dc9bbfd2c988ef89498~mv2.jpg",
    url: "https://www.bruinsportsanalytics.com/post/knicks_success"
  },
  {
    image: "https://phantom-marca.unidadeditorial.es/06132837c902175bdc4a9586109cc3e3/resize/828/f/jpg/assets/multimedia/imagenes/2020/10/29/16039926717087.jpg",
    url: "https://fcpanalytics.wordpress.com/wp-content/uploads/2022/04/predicting_nba_salaries-1.pdf"
  },
  {
    image: "https://prod.statics.indeed.com/eml/assets/images/logo/indeed_logo_1200x630.png",
    url: "https://fcpanalytics.wordpress.com/wp-content/uploads/2022/03/140xp_final_report.pdf"
  },
  {
    image: "https://sportsmania.asia/wp-content/uploads/2023/01/Rashford-celebration-explained.jpeg",
    url: "https://public.tableau.com/app/profile/allen8597/viz/ManchesterUnited2022-2023/ManchesterUnited"
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*YEIFGO60NGb-Nht78ijRxw.jpeg",
    url: "https://medium.com/@allenmchun/using-k-means-clustering-to-identify-nba-player-similarity-2b33f11e3aa7"
  }
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(({ handleClick }: { handleClick: (url: string) => void }) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
  const cylinderWidth = isScreenSizeSm ? 695.75 : 1138.5 // Increased by additional 10%
  const faceCount = projects.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative flex h-full origin-center justify-center animate-carousel-spin"
        style={{
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
      >
        {projects.map((item, i) => (
          <motion.div
            key={`key-${item.image}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${
                i * (360 / faceCount)
              }deg) translateZ(${radius}px)`,
            }}
            onClick={() => item.url && handleClick(item.url)}
          >
            <motion.img
              src={item.image}
              alt={`Project ${i + 1}`}
              className="w-full rounded-xl object-cover aspect-square cursor-pointer hover:scale-105 transition-transform"
              initial={{ filter: "blur(4px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={transition}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
})

function ThreeDPhotoCarousel() {
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div className="relative">
      <div className="relative h-[350px] w-full overflow-hidden"> {/* Increased to 350px */}
        <Carousel handleClick={handleClick} />
      </div>
    </div>
  )
}

export { ThreeDPhotoCarousel }