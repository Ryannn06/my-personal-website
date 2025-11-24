"use client";

import styles from 'src/app/_components/CSS/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { BsArrowUpRight } from "react-icons/bs";

import { useEffect, useState } from 'react';


const projectArray = [
	{
		title: "Analysis of Tourist Arrivals in PHL",
		description: "An analysis on tourist arrivals in the Philippines using the official data from DOTr",
		github_link: "https://github.com/Ryannn06/Analysis-of-Tourist-Arrivals-in-the-Philippines-2023",
		date_:"2025.11.24",
		badge: ["Python", "Pandas", "SQL"]
	},
	{
		title: "Analysis of Grade 6 NAT Results",
		description: "A Python analysis on the DepEd NAT MPS Results, SY 2023-2024",
		github_link: "https://github.com/Ryannn06/Analysis-of-Grade-6-National-Achievement-Test-MPS-2023-2024",
		date_:"2025.11.20",
		badge: ["Python", "Pandas", "Seaborn"]
	},
	{
		title: "Analysis of Deped Masterlist",
		description: "A SQL analysis and Power BI dashboard on the DepEd Schools Masterlist 64k+ dataset",
		github_link: "https://github.com/Ryannn06/SQL-Case-Study-on-DepEd-Schools-Masterlist",
		date_:"2025.11.16",
		badge: ["Python", "PostgreSQL", "Power BI"]
	},
	{
		title: "Uber Customer Reviews 2024",
		description: "A Tableau dashboard, visualizing key insights from 12,000+ Uber reviews in Google Play Store",
		github_link: "https://public.tableau.com/views/UberCustomerReviews/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		date_:"2025.02.07",
		badge: ["Tableau"]
	},
	{
		title: "Mobile App Activity Analysis",
		description: "An analysis using Python, uncovering user behaviour patterns, activity trends, and predictions",
		github_link: "https://www.kaggle.com/code/ryanangelodelacruz/mobile-app-screen-time-eda-mla",
		date_:"2025.01.06",
		badge: ["Python", "Pandas", "Seaborn", "Scikit-learn"]
	},
	{
		title: "Thesis Archive system",
		description: "A Digital Thesis Archive for storing of e-thesis documents built in Django and MySQL",
		github_link: "https://github.com/Ryannn06/DIGITAL-THESIS-ARCHIVE-DJANGO-PROJECT",
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
									<p className={"text-muted"}>{data.date_}</p>
								</div>
								<div className={"col-md-6"}>
									<Link href={data.github_link} className={"link"}>
										<h4 className={"text-uppercase"}>{data.title}
											<BsArrowUpRight/>
										</h4>
									</Link>
									{data.badge && data.badge.map((b, i) => (
										<span key={i} className="badge bg-light text-dark me-2">
											{b}
										</span>
                  					))}
									<p className={"pt-3 text-muted"}>{data.description}</p>
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
