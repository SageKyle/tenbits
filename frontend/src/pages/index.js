import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Benefits from './home/Benefits'
import CTA from './home/CTA'
import ComingSoon from './home/ComingSoon'
import EasySetup from './home/EasySetup'
import Features from './home/Features'
import Highlight from './home/Highlight'

export default function Home() {
	return (
		<main className="">
			<Hero />
			<EasySetup />
			<Highlight />
			<Benefits />
			<Features />
			<ComingSoon />
			<CTA />
			<Footer />
		</main>
	)
}
