"use client";

import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import tools from 'src/app/lib/tools.json'


const toolsArray = []

const Tools = () => {

	/**const [ tools, setTools ] = useState(toolsArray)**/

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
										<h6>{data.title}</h6>
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
