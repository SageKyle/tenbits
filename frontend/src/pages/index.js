import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Benefits from './home/Benefits'
import ComingSoon from './home/ComingSoon'
import Contact from './home/Contact'
import Features from './home/Features'
import Highlight from './home/Highlight'

export default function Home() {
	return (
		<main className="">
			<Hero />
			<Highlight />
			<Benefits />
			<Features />
			<ComingSoon />
			<Contact />
			<Footer />
		</main>
	)
}
