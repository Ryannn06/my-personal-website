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
							<Link href="emailto:ryanangelo.delacruz12@gmail.com" className={styles.contact_button_link}>
								<h6>ryanangelo.delacruz12@gmail.com</h6>
								<Image src="/icons/arrow-right.svg" width="25" height="25" />
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
						<Link href=""><p>Home</p></Link>
						<Link href=""><p>About me</p></Link>
						<Link href=""><p>What I do</p></Link>
						<Link href=""><p>Tools</p></Link>
					</div>
				</div>
				<div>
					<h6>03</h6>
					<div>
						<Link href=""><p>Linkedin</p></Link>
						<Link href=""><p>Instagram</p></Link>
						<Link href=""><p>Github</p></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactMe;