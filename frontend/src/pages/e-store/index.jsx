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

			<section className="w-full">
				<article className=" w-full bg-accent py-6 flex flex-col-reverse justify-evenly items-center lg:flex-row">
					<div className="flex items-center flex-col mt-6 w-[90%] pt-2 pb-6 lg:pl-8 lg:w-[40%]">
						<h4 className="text-xs capitalize font-bold text-orange self-start">
							{storeCredentials.name}
						</h4>
						<h3 className="text-primary text-xl mb-4 font-bold self-start">
							{storeCredentials.tagline}
						</h3>
						<p className="mb-4 text-sm">{storeCredentials.featureText}</p>
						<PrimaryBtn link={'/auth/register'} text={'get started'} />
					</div>
					<div className="w-[90%] mx-auto relative h-[30rem] lg:w-[40%]">
						<Image src={storeCredentials.featuredImg} fill loading="lazy" />
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
