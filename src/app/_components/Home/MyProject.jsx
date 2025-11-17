"use client";

import styles from 'src/app/_components/CSS/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { BsArrowUpRight } from "react-icons/bs";

import { useEffect, useState } from 'react';


const projectArray = [
	{
		title: "Analysis of Deped Schools Masterlist",
		description: "A SQL analysis and Power BI dashboard on the DepEd Schools Masterlist 64k+ dataset",
		github_link: "https://github.com/Ryannn06/SQL-Case-Study-on-DepEd-Schools-Masterlist",
		bg_color: "#add0b3",
		date_:"2025.02.07",
		image:"1.png",
		badge: ["Python", "PostgreSQL", "Power BI"]
	},
	{
		title: "Uber Customer Reviews 2024",
		description: "A Tableau dashboard, visualizing key insights from 12,000+ Uber reviews in Google Play Store",
		github_link: "https://public.tableau.com/views/UberCustomerReviews/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		bg_color: "#add0b3",
		date_:"2025.02.07",
		image:"1.png",
		badge: ["Tableau"]
	},
	{
		title: "Mobile App Activity Analysis",
		description: "An analysis using Python, uncovering user behaviour patterns, activity trends, and predictions",
		github_link: "https://www.kaggle.com/code/ryanangelodelacruz/mobile-app-screen-time-eda-mla",
		bg_color: "#ffd1dc",
		date_:"2025.01.06",
		badge: ["Python", "Pandas", "Matplotlib"]
	},
	{
		title: "Spotify Streams 2024",
		description: "A Tableau dashboard, exploring Spotify's 2024 most streamed tracks and albums",
		github_link: "https://public.tableau.com/views/Spotify_Streams_17353873277910/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		bg_color: "#ffd1dc",
		date_:"2024.12.28",
		badge: ["Tableau"]
	},
	{
		title: "Thesis Archive system",
		description: "A Digital Thesis Archive for storing of e-thesis documents built in Django and MySQL",
		github_link: "https://github.com/Ryannn06/DIGITAL-THESIS-ARCHIVE-DJANGO-PROJECT",
		bg_color: "#ff6961",
		image:"Thesis_archive2.svg",
		date_:"2023.01.16",
		badge: ["Django", "MySQL", "Bootstrap"]
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
			<div className={"row gx-5 gy-3"}>
				{ project.map ( (data, index) => {
					return (
						<div className={"col-md-6"} key={index}>
							<hr></hr>
							<div className={"row pt-1"}>
								<div className={"col-md-6"}>
									<p>{data.date_}</p>
								</div>
								<div className={"col-md-6"}>
									<Link href={data.github_link} className={"link"}>
										<h4 className={"text-uppercase"}>{data.title}
											<BsArrowUpRight/>
										</h4>
									</Link>
									<p className={"pt-1"}>{data.description}</p>
									{data.badge && data.badge.map((b, i) => (
										<span key={i} className="badge bg-light text-dark me-2">
											{b}
										</span>
                  					))}
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
