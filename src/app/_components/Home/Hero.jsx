import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className={styles.hero_container}>
			<div>
				<div>
					<h1>A passionate developer focus on digital experiences</h1>
				</div>
				<div>
					<div className={styles.hero_button_container}>
						<div className={styles.hero_button}>
							<Link href="mailto:ryanangelo.delacruz12@gmail.com" className={styles.hero_button_link}>
								<h6>drop me a line</h6>
								<Image src="/icons/arrow-right.svg" width="20" height="20" alt="arrow-right.svg"/>
							</Link>
						</div>
						
					</div>
					<div>
						<p>My name is Gelo, and I am a full stack web developer
						with strong interest to driving simple yet dynamic solutions across
						my works.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero;
