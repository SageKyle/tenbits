import Footer from '@/components/Footer'
import PrimaryBtn from '@/components/PrimaryBtn'
import { TbSocial } from 'react-icons/tb'
import checkmarkAnimation from './checkmarkStyles.module.css'

const user = { firstName: 'John', lastName: 'Doe', email: 'example@email.com' }

export default function VerifyEmail() {
	return (
		<article className="w-screen h-screen flex flex-col items-center justify-between">
			<section className="h-fit w-[90%] bg-accent mt-8 bg-opacity-20 flex flex-col justify-center px-6 gap-4 max-w-[30rem] p-8 justify-self-center shadow rounded-lg">
				{/* animated success checkmark with /> */}
				<div className={`${checkmarkAnimation.circle} mx-auto`}>
					<span className={`${checkmarkAnimation.checkmark}`}></span>
				</div>

				<h2>
					Congratulations{' '}
					<span className="font-semibold">{user.firstName}</span>, you are
					one-step closer to setting up your very own e-Store.
				</h2>
				<p className="italic">
					To be sure it's you, we sent an email to{' '}
					<span className="font-semibold">{user.email}</span>, please click on
					the link to verify your email address.
				</p>

				<PrimaryBtn
					link={'/user/profile'}
					text={'Go to your profile'}
					styles={'mx-auto normal-case'}
				/>
			</section>
			<Footer />
		</article>
	)
}
