import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className={" my-container hero container-fluid d-flex align-items-end"}>
			<div className={"row"}>
				<div className={"col-sm-12 col-md-8 col-lg-8 mb-3"}>
					<h1 className={""}>A passionate analyst focus on 
					turning data into <i>i</i>nsights</h1>
				</div>
				<div className={"col-sm-12 col-md-5 col-lg-5 mb-3"}>
					<p>My name is Gelo, and I am an analyst & programmer with 
					strong interest to driving simple yet meaningful solutions across my works.</p>
				</div>
				
			</div>
		</div>
	)
}

export default Hero;
