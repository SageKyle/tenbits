import PrimaryBtn from '@/components/PrimaryBtn'

export default function EasySetup() {
	return (
		<article className="p-10">
			<h3 className="text-orange text-xs font-bold capitalize text-center">
				simplicity redefined
			</h3>
			<p className="text-center">
				Creating your online store is now as simple as
				<span className="font-bold"> 123!</span>
			</p>
			<section className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,1fr))] gap-8 my-12">
				<div className="bg-slate-50 p-4 rounded-md">
					<div className="text-primary text-2xl font-semibold border border-primary p-2 rounded-full flex items-center justify-center w-10 h-10 font-mono">
						<span>1</span>
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Create an account
					</h5>
					<p className="mt-2 text-sm">
						All you need is your name and email address. Oh, and of course a
						password to secure your account.
					</p>
				</div>
				<div className="bg-slate-50 p-4 rounded-md">
					<div className="text-primary text-2xl font-semibold border border-primary p-2 rounded-full flex items-center justify-center w-10 h-10 font-mono">
						<span>2</span>
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Setup your business profile
					</h5>
					<p className="mt-2 text-sm">
						Easily fill out your business profile by setting your business name,
						logo, social media links, etc. Don't have a logo? We also show you
						how to get a customized logo for FREE!
					</p>
				</div>
				<div className="bg-slate-50 p-4 rounded-md">
					<div className="text-primary text-2xl font-semibold border border-primary p-2 rounded-full flex items-center justify-center w-10 h-10 font-mono">
						<span>3</span>
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Add Products
					</h5>
					<p className="mt-2 text-sm">
						Seamlessly add products to your
						<span className="text-primary font-semibold">
							{' '}
							TenBits e-Store{' '}
						</span>
						to let your customers know what you sell. You can add text, images
						and short video descriptions of your products.
					</p>
				</div>
			</section>
			<div className="w-full flex justify-center">
				<PrimaryBtn link="auth/register" text="register" />
			</div>
		</article>
	)
}
