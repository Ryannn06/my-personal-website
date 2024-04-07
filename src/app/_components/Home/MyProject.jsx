"use client";

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'


const projectArray = [
	{
		title: "Thesis Archive",
		description: "A digital thesis archive built in Django and MySQL",
		github_link: "https://github.com/Ryannn06/DIGITAL-THESIS-ARCHIVE",
		bg_color: "#ff6961",
		image:"Thesis_archive.png",
	},
	{
		title: "Plant.co",
		description: "A plant service website built in Nextjs",
		github_link: "https://github.com/Ryannn06/DIGITAL-THESIS-ARCHIVE",
		bg_color: "#add0b3",
		image: "Plantco.png"
	},
	
	{
		title: "Paws",
		description: "A pet center website built in Nextjs and Firebase",
		github_link: "#",
		bg_color: "#ffd1dc",
	},
]

const MyProject = () => {
	const [ project, setProject ] = useState(projectArray);

	return (
		<div className={styles.myproject_container}>
			<div>
				<h6>01/</h6>
				<h3>Selected works</h3>
			</div>
			<div>
				{ project.map ( (data, index) => {
					return (
						<div className={styles.cards} key={index}>
							<div className={styles.cards_image} style={{ "backgroundColor": `${data.bg_color}` }}>
								<Image src={`/images/${data.image}`} 
									style={{objectFit: "contain"}}
									fill
									alt={data.image}
								/>
							</div>
							<div className={styles.cards_text}>
								<div>
									<h5>
										{data.title} 
									</h5>
									<p>{data.description}</p>
								</div>
								<div className={styles.project_button}>
										<Link href={data.github_link} target="_blank" className={styles.project_button_link}>
											<Image src="/icons/arrow-right.svg" width="25" height="25" alt="arrow-right.svg" />
										</Link>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>

	)
}

export default MyProject;
