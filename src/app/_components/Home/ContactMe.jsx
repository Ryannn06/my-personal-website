import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ContactMe = () => {
	return(
		<div className={styles.contactme_container} id="my_contacts">
			<div>
				<div>
					<div>
						<h1>The best way to reach me is via email</h1>
					</div>
					<div className={styles.contact_button_container}>
						<div className={styles.contact_button}>
							<Link href="mailto:ryanangelo.delacruz12@gmail.com" target="_blank" className={styles.contact_button_link}>
								<h6>ryanangelo.delacruz12@gmail.com</h6>
								<Image src="/icons/arrow-right.svg" width="25" height="25" alt="arrow-right.svg" />
							</Link>
						</div>
					</div>
				</div>
				<div></div>
			</div>
			<div>
				<div>
					<p>Designed and developed by Gelo</p>
				</div>
				<div>
					<div>
						<h6>01</h6>
					</div>
					<div>
						<p>Cavite, Philippines</p>
						<p>(+63)9692935578</p>
					</div>
				</div>
				<div>
					<div>
						<h6>02</h6>
					</div>
					<div>
						<Link href="/"><p>Home</p></Link>
						<Link href="#my_works"><p>My Works</p></Link>
						<Link href="#about_me"><p>About me</p></Link>
						<Link href="#what_i_do"><p>What I do</p></Link>
						<Link href="#tools"><p>Tools</p></Link>
					</div>
				</div>
				<div>
					<h6>03</h6>
					<div>
						<Link href="https://discord.com/users/geloo_c" target="_blank"><p>Discord</p></Link>
						<Link href="https://www.linkedin.com/in/gelo-oc12" target="_blank"><p>Linkedin</p></Link>
						<Link href="https://github.com/Ryannn06" target="_blank"><p>Github</p></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactMe;
