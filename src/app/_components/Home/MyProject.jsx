"use client";

import styles from 'src/app/_components/CSS/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { BsArrowUpRight } from "react-icons/bs";

import { useEffect, useState } from 'react';


const projectArray = [
	{
		title: "Thesis Archive system",
		description: "A Digital Thesis Archive for storing of e-thesis documents built in Django and MySQL",
		github_link: "https://github.com/Ryannn06/DIGITAL-THESIS-ARCHIVE-DJANGO-PROJECT",
		bg_color: "#ff6961",
		image:"Thesis_archive2.svg",
		date_:"2023.01.16"
	},
	{
		title: "Plant.co",
		description: "A Plant Service informational website built in Nextjs",
		github_link: "https://github.com/Ryannn06/Plant.co",
		bg_color: "#add0b3",
		image: "Plantco.svg",
		date_:"2023.01.07"
	},
	
	{
		title: "The paws center",
		description: "A pet center website built in Nextjs and Firebase",
		github_link: "#",
		bg_color: "#ffd1dc",
		date_:"2024.05.10"
	},
]

const MyProject = () => {
	const [ project, setProject ] = useState(projectArray);

	return (
		<div className={"my-container"} id="my_works">
			<div className={"row pb-0"}>
				<div className={"col-md-12"}>
					<h5 className={""}>Selected Works</h5>
				</div>
			</div>
			<div className={"row gy-3"}>
				{ project.map ( (data, index) => {
					return (
						<div className={"col-md-12"} key={index}>
							<hr></hr>
							<div className={"row pt-1"}>
								<div className={"col-md-3"}>
									
								</div>
								<div className={"col-md-3"}>
									<p>{data.date_}</p>
								</div>
								<div className={"col-md-6"}>
									<Link href={data.github_link}>
										<h4 className={"text-uppercase"}>{data.title}
											<BsArrowUpRight/>
										</h4>
									</Link>
									<p className={"pt-1"}>{data.description}</p>
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
