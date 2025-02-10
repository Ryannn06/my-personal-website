"use client";

import styles from 'src/app/_components/CSS/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { BsArrowUpRight } from "react-icons/bs";

import { useEffect, useState } from 'react';


const projectArray = [

	{
		title: "Uber Customer Reviews 2024",
		description: "A Tableau dashboard, visualizing key insights from 12,000+ Uber reviews in Google Play Store",
		github_link: "https://public.tableau.com/views/UberCustomerReviews/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		bg_color: "#add0b3",
		date_:"2025.02.07"
	},
	{
		title: "EDA & MLA: Global Population",
		description: "Exploring and predicting global population using Python and Linear Regression",
		github_link: "https://www.kaggle.com/code/ryanangelodelacruz/eda-mla-global-population",
		bg_color: "#add0b3",
		date_:"2025.01.22"
	},
	{
		title: "Mobile App Activity Analysis",
		description: "An analysis using Python, uncovering user behaviour patterns, activity trends, and predictions",
		github_link: "https://www.kaggle.com/code/ryanangelodelacruz/mobile-app-screen-time-eda-mla",
		bg_color: "#ffd1dc",
		date_:"2025.01.06"
	},
	{
		title: "World Happiness Report 2024",
		description: "A Tableau dashboard, visualizing countries with happiness scores alongside other factors",
		github_link: "https://public.tableau.com/shared/B5PC3R7GF?:display_count=n&:origin=viz_share_link",
		bg_color: "#ffd1dc",
		date_:"2024.12.19"
	},
	{
		title: "Spotify Streams 2024",
		description: "A Tableau dashboard, exploring Spotify's 2024 most streamed tracks and albums",
		github_link: "https://public.tableau.com/views/Spotify_Streams_17353873277910/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		bg_color: "#ffd1dc",
		date_:"2024.12.28"
	},
	{
		title: "Thesis Archive system",
		description: "A Digital Thesis Archive for storing of e-thesis documents built in Django and MySQL",
		github_link: "https://github.com/Ryannn06/DIGITAL-THESIS-ARCHIVE-DJANGO-PROJECT",
		bg_color: "#ff6961",
		image:"Thesis_archive2.svg",
		date_:"2023.01.16"
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
									<Link href={data.github_link} className={"link"}>
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
