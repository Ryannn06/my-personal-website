"use client";

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


import { useEffect, useState } from 'react'


const AboutMe = () => {
	return(
		<div className={"my-container"} id="about_me">
			<div className={"row"}>
				<h5 className={""}>Personal Profile</h5>
			</div>
			<hr></hr>
			<div className={"row pt-1"}>
				<div className={"col-md-12 col-lg-4"}>
					
				</div>
				<div className={"col-md-12 col-lg-8"}>
					<h1 className={""}>Hello, my name is Gelo Dela Cruz</h1>
					
					<div className={"row pt-5"}>
						<div className={"col-md-6"}>
							<h6 className={"text-uppercase pb-3"}>01</h6>
							<h6 className={"text-uppercase pb-3"}>introduction</h6>
							<p className={""}>I am based in the Philippines with specialization in full stack web development. 
							I was born on December 06, 2001. As someone who has calm and thoughtful nature, 
							lies a mind brimming with creativity and bright ideas.</p>
						</div>
					</div>
					<div className={"row pt-5 gy-5 gx-5"}>
						<div className={"col-md-6"}>
							<h6 className={"text-uppercase pb-3"}>02</h6>
							<h6 className={"text-uppercase pb-3"}>education</h6>
							<p className={""}>Bachelor of Engineering Technology in 
							Computer Engineering Technology at TUP </p>
						</div>
						<div className={"col-md-6"}>
							<h6 className={"text-uppercase pb-3"}>03</h6>
							<h6 className={"text-uppercase pb-3"}>interests</h6>
							<p className={""}>On my free time, I love listening to music, reading words of affirmation
							and playing games. </p>
						</div>
					</div>
					<div className={"row pt-5"}>
						<div className={"col-md-6"}>
							<h6 className={"text-uppercase pb-3"}>04</h6>
							<h6 className={"text-uppercase pb-3"}>as a skykid</h6>
							<p>I am a skykid who finds himself 
							helping moths on their dailies and wing hunts, socializing with other skykids for acquaintance and friendship.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe;