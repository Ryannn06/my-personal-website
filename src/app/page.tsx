import Image from 'next/image'
import styles from './page.module.css'

import Navbar from './_components/Home/Navbar'
import Hero from './_components/Home/Hero'
import AboutMe from './_components/Home/AboutMe'
import Tools from './_components/Home/Tools'
import ContactMe from './_components/Home/ContactMe'
/* import Parallax from './_components/Home/Parallax'*/
import MyProject from './_components/Home/MyProject'
import WhatIDo from './_components/Home/WhatIDo'

export default function page() {
	return (

		<main className={styles.main}>
	  		<div className={styles.container}>
	  			<Navbar/>
				<Hero/>
				<MyProject/>
				<AboutMe/>
				<Tools/>
				<ContactMe/>
				{/*
				[]
				<Parallax/> 
				*/}

				
	  		</div>
		</main>
  	)
}
