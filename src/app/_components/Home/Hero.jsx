import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className={" my-container hero container-fluid d-flex align-items-end"}>
			<div className={"row"}>
				<div className={"col-sm-12 col-md-8 col-lg-8 mb-3"}>
					<h1 className={""}>A passionate developer focus on 
					digital <i>e</i>xperiences</h1>
				</div>
				<div className={"col-sm-12 col-md-5 col-lg-5 mb-3"}>
					<p>My name is Gelo, and I am a full stack web developer with 
					strong interest to driving simple yet dynamic solutions across my works.</p>
				</div>
				
			</div>
		</div>
	)
}

export default Hero;
