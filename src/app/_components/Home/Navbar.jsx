"use client";

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'

const Navbar = () => {
	
	const openNavbar = () => {
		document.getElementById("navbar_menu").style.width = "100%";
	}

	const closeNavbar = () => {
		document.getElementById("navbar_menu").style.width = "0";
	}

	return (
		<div className={styles.navbar_container}>
			<div>
				<h6>Ryan Angelo Dela Cruz</h6>
			</div>
			<div className={styles.navbar_center_brand}>
				<h6>--</h6>
				<h6>Developer & Programmer<br></br>Based in Philippines</h6>
			</div>
			<div className={styles.navbar_extended_links}>
				<Link href="#"><h6>Home</h6></Link>
				<Link href="#about_me"><h6>About Me</h6></Link>
				<Link href="#"><h6>About Me</h6></Link>
				<Link href="#"><h6>My Projects</h6></Link>
				<Link href="#"><h6>Contacts</h6></Link>
			</div>
			<div className={styles.navbar_button_container}>
				<button onClick={openNavbar} className={styles.navbar_button}>
					<Image alt="navbar" src="/icons/burger-menu.svg" width="35" height="35" />
				</button>
			</div>

			<div id="navbar_menu" className={styles.navbar_menu}>
				<div className={styles.navbar_close_button_container}>
					<button onClick={closeNavbar} className={styles.navbar_close_button}>
						<Image alt="navbar" className={styles.navbar_button_image} src="/icons/x-close.svg" width="25" height="25" />
						
					</button>
				</div>
				<div className={styles.navbar_menu_links}>
					<Link href="#my_works" onClick={closeNavbar} className={styles.navbar_links}>
						<h6>01</h6>
						<h4>My works</h4>
					</Link>
					<Link href="#about_me" onClick={closeNavbar} className={styles.navbar_links}>
						<h6>02</h6>
						<h4>About me</h4>
					</Link>
					<Link href="#my_contacts" onClick={closeNavbar} className={styles.navbar_links}>
						<h6>03</h6>
						<h4>What I do</h4>
					</Link>
					<Link href="#my_contacts" onClick={closeNavbar} className={styles.navbar_links}>
						<h6>04</h6>
						<h4>Tools</h4>
					</Link>
					<Link href="#my_contacts" onClick={closeNavbar} className={styles.navbar_links}>
						<h6>05</h6>
						<h4>Contacts</h4>
					</Link>
				</div>
			</div>
		</div>
		
	)
}

export default Navbar;