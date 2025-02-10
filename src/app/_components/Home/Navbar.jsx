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
		<div className={"navbar-container"}>
			<div className={"navbar p-0 m-0"}>
				<div>
					<h6>[ Gelo Dela Cruz ]</h6>
				</div>
				<div>
					<h6>[ Analyst, Programmer ]</h6>
				</div>
				<div>
					<h6>[ Dec. 06, 2001 ]</h6>
				</div>
			</div>
			<hr></hr>
		</div>
		
	)
}

export default Navbar;