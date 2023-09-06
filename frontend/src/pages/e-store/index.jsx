import SampleImg from '@/assets/images/business-woman-on-a-laptop.jpg'
import Logo from '@/assets/images/tenbit-no-bg.png'
import PrimaryBtn from '@/components/PrimaryBtn'
import Head from 'next/head'
import Image from 'next/image'
import StoreFooter from '../storeName/StoreFooter'
import StoreNavbar from '../storeName/StoreNavbar'
import About from './About'
import FeaturedProducts from './FeaturedProducts'
import HotDeals from './HotDeals'
import LatestProducts from './LatestProducts'
import TopCategories from './TopCategories'

const storeCredentials = {
	name: 'TenBits e-Store',
	description: 'Your one-stop online store for all your fashion accessories',
	logo: Logo,
	socials: [
		{ name: 'facebook', url: 'www.facebook.com' },
		{ name: 'twitter', url: 'www.twitter.com' },
		{ name: 'instagram', url: 'www.instagram.com' },
	],
	featuredImg: SampleImg,
	featureText:
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ex quo deserunt, autem cum praesentium ut quibusdam maxime, quaerat sit eius adipisci ullam itaque sed veniam porro vero perspiciatis voluptatem!',
	storeCategory: 'fashion',
	tagline: 'Your one-stop online store for all your fashion accessories',
	productCategories: ['shoes', 'bags', 'underwear', 'belt'],
}

export default function Store() {
	return (
		<>
			<Head>
				<meta name="description" content={storeCredentials.description} />
				<title>{storeCredentials.name}</title>
			</Head>
			<StoreNavbar logo={storeCredentials.logo} name={storeCredentials.name} />

			<section>
				<article className="min-h-[25rem] pb-6 flex justify-center items-end bg-hero-bg bg-no-repeat bg-cover bg-center bg-black bg-blend-screen opacity-90 relative lg:min-h-[85vh] lg:bg-hero-bg-wide lg:justify-end ">
					<div className="flex items-center flex-col gap-2 h-full w-3/4 px-6 pt-2 pb-6 bg-primary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-500 lg:w-1/2 lg:mx-auto lg:h-fit">
						<h3 className="text-primary-dark text-xl mx-auto my-6 capitalize font-bold self-start">
							{storeCredentials.tagline}
						</h3>
						<p className="mb-4 text-accent text-sm">
							{storeCredentials.featureText}
						</p>
						<PrimaryBtn link={'/auth/register'} text={'get started'} />
					</div>
					<div className="relative">
						<Image src={storeCredentials.featuredImg} fill />
					</div>
				</article>
			</section>
			<FeaturedProducts />
			<TopCategories />
			<HotDeals />
			<LatestProducts />
			<About />
			<StoreFooter logo={storeCredentials.logo} name={storeCredentials.name} />
		</>
	)
}
