"use client";

import { motion } from 'framer-motion'

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import introduction from 'src/app/lib/introduction.json'


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
					<motion.div 
						/**initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						viewport={{once:true}}**/
						className={"pb-5"}>
						<h1>Hello, my name is Gelo Dela Cruz</h1>
					</motion.div>
					
					<div className={"row pt-5 gy-5 gx-5"}>
					{ introduction.map((data, index) => {
						return(
							data.id == 1 ? (
								<div className={"col-md-12"} key={index}>
									<div className={"col-md-6"}>
										<h6 className={"text-uppercase pb-2"}>{data.id}</h6>
										<h6 className={"text-uppercase pb-2"}>{data.title}</h6>
										<p className={""}>{data.body}</p>
									</div>
								</div>
							) : (
								<div className={"col-md-6"}>
									<h6 className={"text-uppercase pb-2"}>{data.id}</h6>
									<h6 className={"text-uppercase pb-2"}>{data.title}</h6>
									<p className={""}>{data.body}</p>
								</div>
							)

						)
					})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe;