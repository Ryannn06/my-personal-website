'use client';

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import {useTransform, useScroll, motion} from 'framer-motion'
import {useRef, useEffect} from 'react'
import Lenis from '@studio-freight/lenis'
import useDimension from 'src/useDimension.js'

const images = [
	"photo_01.jpg",
	"photo_02.jpg",
	"photo_03.jpg",
	"taylor_01.jpg",
	"taylor_01.jpg",
	"keshi_01.jpg",
	"keshi_02.jpg"
]

const Parallax = () => {
	const container = useRef(null);

	const { height } = useDimension();

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start']
	})

	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

	useEffect( () => {
		const lenis = new Lenis()

		function raf(time) {
		  lenis.raf(time)
		  requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return(
		<div className={styles.parallax_container}>
			<div ref={container} className={styles.gallery}>
				<Column images={ [ images[0], images[1], images[2], images[3] ]} y={y} />
				<Column images={ [ images[4], images[5], images[6], images[1] ]} y={y2} />
				<Column images={ [ images[2], images[3], images[2], images[0] ]} y={y3} />
				<Column images={ [ images[0], images[2], images[3], images[1] ]} y={y4} />
				<Column images={ [ images[0], images[2], images[3], images[1] ]} y={y2} />
			</div>
		</div>
	)
}

export default Parallax;


const Column = ({images, y=0}) => {
	return (
		<motion.div style={{y}} className={styles.column}>
			{
				images.map( (src, index) => {
					return <div key={index} className={styles.imageContainer}>
						<Image src={`/parallax/${src}`} 
						style={{objectFit: "cover"}}
						fill
						alt="image"
						/>
					</div>
				})
			}
		</motion.div>
	)
}