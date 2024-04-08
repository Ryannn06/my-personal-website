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
		title:"null", 
		
	},
	{
		title:"null", 
		
	},
	{
		title:"null", 
		
	},
	{
		count: "11",
		title:"GIT", 
		
	}
]

const Tools = () => {

	const [ tools, setTools ] = useState(toolsArray)

	return(
		<div className={styles.tools_container} id="tools">

			<div>
				<div>
					<h6>04/</h6>
					<h3>Frameworks & Tools I have used</h3>
				</div>
			</div>
			<div>
				{tools.map( (data, index) => {
					return(
						data.title != "null" ? (
							<div className={styles.visible_card} key={index}>
								<div>
									<Image src="/icons/bxs-circle.svg" width="12" height="12" alt="bxs-circle.svg" />
								</div>
								<div>
									<h5>{data.title}</h5>
								</div>
								
							</div>
						): (
							<div className={styles.invisible_card} key={index}>
								
								
							</div>
						)
						
					)
					
				})}
				
			</div>
		</div>
	)
}

export default Tools;
