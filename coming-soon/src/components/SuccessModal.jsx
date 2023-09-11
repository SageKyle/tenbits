import checkmarkAnimation from '@/styles/checkmarkStyles.module.css'
import Link from 'next/link'

export default function SuccessModal({ firstName }) {
	return (
		<section className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
			<dialog className="h-fit w-[95%] bg-white flex flex-col justify-center px-6 gap-4 max-w-md py-8 px-8 shadow px-12 rounded-lg">
				{/* animated success checkmark with /> */}
				<div className={`${checkmarkAnimation.circle} mx-auto`}>
					<span className={`${checkmarkAnimation.checkmark}`}></span>
				</div>

				<h4 className="font-semibold">Hey {firstName} 👋</h4>
				<p className="">
					Thank you for signing up for the waitlist. We will be sure to notify
					you as soon as we launch!
				</p>
				<Link
					href={'/'}
					className="px-4 py-2 text-center font-bold border border-[#222566] bg-[#222566] text-white rounded-sm capitalize"
				>
					home
				</Link>
			</dialog>
		</section>
	)
}
