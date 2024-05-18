import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ContactMe = () => {
	return(
		<div className={"my-container"} id="my_contacts">
			<div className={"row pb-5"}>
				<div className={"col-md-6"}>
					<h2 className={"pb-3"}>The best way to reach me is via email</h2>
					<Link href="mailto:ryanangelo.delacruz12@gmail.com" target="_blank" className={"text-decoration-underline text-uppercase"}>
						<h6>drop me a line</h6>
					</Link>
				</div>
				<div></div>
			</div>
			<div className={"row gx-3 gy-5 pt-5"}>
				<div className={"col-6 col-sm-6 col-md-3"}>
					<p>Designed and developed by Gelo</p>
				</div>
				<div className={"col-6 col-sm-6 col-md-3"}>
					<div className={"row"}>
						<div className={"col-md-2"}>
							<h6>01</h6>
						</div>
						<div className={"col-md-10"}>
							<p>Cavite, Philippines</p>
							<p>(+63)9692935578</p>
						</div>
					</div>
				</div>
				<div className={"col-6 col-sm-6 col-md-3"}>
					<div className={"row"}>
						<div className={"col-md-2"}>
							<h6>02</h6>
						</div>
						<div className={"col-md-10"}>
							<Link href="/"><p>Home</p></Link>
							<Link href="#my_works"><p>My Works</p></Link>
							<Link href="#about_me"><p>About me</p></Link>
							<Link href="#what_i_do"><p>What I do</p></Link>
							<Link href="#tools"><p>Tools</p></Link>
						</div>
					</div>
				</div>
				<div className={"col-6 col-sm-6 col-md-3"}>
					<div className={"row"}>
						<h6 className={"col-md-2"}>03</h6>
						<div className={"col-md-10"}>
							<Link href="https://discord.com/users/geloo_c" target="_blank"><p>Discord</p></Link>
							<Link href="https://www.linkedin.com/in/gelo-oc12" target="_blank"><p>Linkedin</p></Link>
							<Link href="https://github.com/Ryannn06" target="_blank"><p>Github</p></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactMe;
