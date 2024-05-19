"use client";

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'


const toolsArray = [
	{
		count: "01",
		title:"Django Python Web Framework", 
	},
	{
		count: "02",
		title:"Next.js React Framework", 
		
	},
	{
		title:"null", 
		
	},
	{
		count: "03",
		title:"Hypertext Mark-up Language (HTML)", 
		
	},
	{
		count: "04",
		title:"Cascading Style Sheets (CSS)", 
		
	},
	{
		title:"null", 
		
	},
	{
		count: "05",
		title:"Javascript", 
		
	},
	{
		count: "06",
		title:"Python Programming Language", 
		
	},
	{
		title:"null", 
		
	},
	{
		count: "07",
		title:"Bootstrap CSS Framework", 
		
	},
	{
		count: "08",
		title:"MySQL RDBMS", 
		
	},
	{
		count: "09",
		title:"Google Firebase", 
		
	},
	{
		count: "10",
		title:"MIT App Inventor"
	},
	{
		count: "11",
		title:"GIT", 
		
	}
]

const Tools = () => {

	const [ tools, setTools ] = useState(toolsArray)

	return(
		<div className={"my-container"} id="tools">

			<div className={"row"}>
				<div>
					<h5>Frameworks & Tools I have used</h5>
				</div>
			</div>
			<hr></hr>
			<div className={"row pt-1 gx-2 gy-2"}>
				{tools.map( (data, index) => {
					return(
						data.title != "null" ? (
							<div className={"col-6 col-md-4 col-lg-3"} key={index}>
								<div className={"visible_card"}>
									<div>
										<Image src="/icons/bxs-circle.svg" width="12" height="12" alt="bxs-circle.svg" />
									</div>
									<div>
										<h5>{data.title}</h5>
									</div>
								</div>
								
							</div>
						): (
							<div className={"col-6 col-md-4 col-lg-3"} key={index}>
								<div className={"invisible_card"}></div>
							</div>
						)
						
					)
					
				})}
				
			</div>
		</div>
	)
}

export default Tools;
