"use client";

import styles from 'src/app/_components/CSS/Myproject.module.css'

import Link from 'next/link'
import Image from 'next/image'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/app/firebase/config'


const Content = () => {
	const parameter = useParams()
	const [ theProject, settheProject ] = useState([]);

	const getProject = doc(db, `my_projects/${parameter.project_id}`)

	useEffect(() => {
		const getData = async() => {
			const docSnap = await getDoc(getProject);
			if (docSnap.exists()){
				settheProject(docSnap.data())
			} else {
				console.log("no document")
			}
			
		};

		getData();
	}, [])

	return(
		<div className={styles.content_container}>
			<div>
				<h1>{theProject.title}</h1>
				<p>{theProject.description}</p>
			</div>
			
		</div>
	)
}

export default Content