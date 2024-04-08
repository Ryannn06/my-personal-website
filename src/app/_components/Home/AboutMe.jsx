"use client";

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


import { useEffect, useState } from 'react'


const AboutMe = () => {
	return(
		<div className={styles.aboutme_container} id="about_me">
			<div>
				<h6>02/</h6>
				<h3>About me</h3>
			</div>
			<div>
				<div>
					<h4>
						I am focus on creating dynamic purpose driven websites to users
					</h4>
				</div>
				<div>
					<p>
						Based in the Philippines with specialization in full stack web development, I 
						build digital experiences that offer functionality and purpose to people
						through development and design. On my free time, I build websites and listen to mellow music.
						<br></br><br></br>
						
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe;