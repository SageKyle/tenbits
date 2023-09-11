import Logo from '@/assets/images/tenbit-no-bg.png'
import StoreNavbar from './StoreNavbar'

// export async function getServerSideProps() {}

// export async function getStaticPaths() {}

export default function StoreName() {
	return (
		<article>
			<StoreNavbar logo={Logo} />
			<h2>Store name</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
				sint, beatae deleniti illo dolore fuga aut minima, modi nemo eum
				asperiores cumque commodi sed quod dicta incidunt eos repudiandae
				accusantium!
			</p>
		</article>
	)
}
