import styles from 'src/app/_components/CSS/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
	return(
		<div className={styles.footer_container}>
			<div className={styles.footer_content}>
				<h1>GELO DELA CRUZ WEB DEVELOPER</h1>
			</div>
		</div>
	)
}

export default Footer;