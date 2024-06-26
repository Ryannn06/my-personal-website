"use client";

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'


const whatido_array = [
		{
			title: "UI DESIGN",
			image:"circle.svg",
			description:"I love crafting user-friendly websites that follow the state of simplicity and minimalism."
		}, 
		{
			title:"WEB DEVELOPMENT",
			image:"square.svg",
			description:"I make sites functional and purposeful that convey straightforward solutions to users."
		},
		{
			title:"WEB HOSTING",
			image:"hexagon.svg",
			description:"I can take charge of deployment to publish website on the internet"
		},
		{
			title:"SUPPORT & MAINTENANCE",
			image:"arrow-up-right.svg",
			description:"Maintains website to ensure it gets updated features and securities "
		},
	]

const WhatIDo = () => {

	const [ whatido, setWhatido] = useState(whatido_array)

	return(
		<div className={"my-container"} id="what_i_do">
			<div className={"row"}>
				<h4>What I do</h4>
			</div>
			<hr></hr>
			<div className={"row gx-5 gy-5"}>
				{
					whatido_array.map((data, index) => {
						return(
							<div className={"col-md-6"} key={index}>
								<div>
									<Image src={`/icons/${data.image}`} width="80" height="80" alt={data.image}/>
								</div>
								<div>
									<h5>{data.title}</h5>
									<p>{data.description}</p>
								</div>
							</div>

						)
					})
				}
			</div>
		</div>
	)
}


export default WhatIDo;
