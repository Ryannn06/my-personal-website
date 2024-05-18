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
		<nav className={"navbar navbar-expand-lg fixed-top row navbar-dark bg-dark"}>
		    <div className={"container-fluid"}>
		        <a className={"navbar-brand text-uppercase"} href="#">Gelo Dela Cruz</a>
		        <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
		        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		            <span className={"navbar-toggler-icon"}></span>
		        </button>

		        <div className={"collapse navbar-collapse"} id="navbarNav">
		            <ul className={"navbar-nav ms-auto"}>
		                <li className={"nav-item"}>
		                    <a className={"nav-link"} href="">My Works</a>
		                </li>
		                <li className={"nav-item"}>
		                    <a className={"nav-link"} href="">What I Do</a>
		                </li>
		                <li className={"nav-item"}>
		                    <a className={"nav-link"} href="">Services</a>
		                </li>
		                <li className={"nav-item"}>
		                    <a className={"nav-link"} href="#">Contact Me</a>
		                </li>
		            </ul>
		        </div>
		    </div>
		</nav>
		
	)
}

export default Navbar;