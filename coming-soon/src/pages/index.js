import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
//
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FaCartArrowDown, FaStore } from 'react-icons/fa'

export default function Home() {
	return (
		<main
			className={`flex flex-col justify-between bg-slate-50 w-full min-h-screen ${inter.className}`}
		>
			<Header />
			<section className="p-10 max-w-2xl mx-auto font-sans relative">
				<svg
					className="hidden lg:inline-block absolute left-2 top-8"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M35.8333 25.8333C36.3 25.8333 36.6666 26.2 36.6666 26.6666V28.3333C36.6666 31.1 34.4333 33.3333 31.6666 33.3333C31.6666 30.5833 29.4166 28.3333 26.6666 28.3333C23.9166 28.3333 21.6666 30.5833 21.6666 33.3333H18.3333C18.3333 30.5833 16.0833 28.3333 13.3333 28.3333C10.5833 28.3333 8.33331 30.5833 8.33331 33.3333C5.56665 33.3333 3.33331 31.1 3.33331 28.3333V25C3.33331 24.0833 4.08331 23.3333 4.99998 23.3333H20.8333C21.9384 23.3333 22.9982 22.8943 23.7796 22.1129C24.561 21.3315 25 20.2717 25 19.1666V9.99998C25 9.08331 25.75 8.33331 26.6666 8.33331H28.0666C29.2666 8.33331 30.3666 8.98331 30.9666 10.0166L32.0333 11.8833C32.1833 12.15 31.9833 12.5 31.6666 12.5C30.5616 12.5 29.5018 12.939 28.7204 13.7204C27.939 14.5018 27.5 15.5616 27.5 16.6666V21.6666C27.5 22.7717 27.939 23.8315 28.7204 24.6129C29.5018 25.3943 30.5616 25.8333 31.6666 25.8333H35.8333Z"
						fill="#F34213"
					></path>
					<path
						d="M13.3333 36.6666C14.2174 36.6666 15.0652 36.3155 15.6903 35.6903C16.3155 35.0652 16.6666 34.2174 16.6666 33.3333C16.6666 32.4493 16.3155 31.6014 15.6903 30.9763C15.0652 30.3512 14.2174 30 13.3333 30C12.4493 30 11.6014 30.3512 10.9763 30.9763C10.3512 31.6014 9.99998 32.4493 9.99998 33.3333C9.99998 34.2174 10.3512 35.0652 10.9763 35.6903C11.6014 36.3155 12.4493 36.6666 13.3333 36.6666ZM26.6666 36.6666C27.5507 36.6666 28.3985 36.3155 29.0237 35.6903C29.6488 35.0652 30 34.2174 30 33.3333C30 32.4493 29.6488 31.6014 29.0237 30.9763C28.3985 30.3512 27.5507 30 26.6666 30C25.7826 30 24.9347 30.3512 24.3096 30.9763C23.6845 31.6014 23.3333 32.4493 23.3333 33.3333C23.3333 34.2174 23.6845 35.0652 24.3096 35.6903C24.9347 36.3155 25.7826 36.6666 26.6666 36.6666ZM36.6666 20.8833V23.3333H31.6666C30.75 23.3333 30 22.5833 30 21.6666V16.6666C30 15.75 30.75 15 31.6666 15H33.8166L36.2333 19.2333C36.5166 19.7333 36.6666 20.3 36.6666 20.8833ZM21.8 3.33331H9.48331C6.08331 3.33331 3.33331 6.08331 3.33331 9.48331V20.1333C3.33331 21.05 4.08331 21.8 4.99998 21.8H20.25C21.95 21.8 23.3333 20.4166 23.3333 18.7166V4.86665C23.3333 4.01665 22.65 3.33331 21.8 3.33331ZM15.6333 13.1833C15.6333 13.6166 15.4 14.0333 15.0333 14.25L12.95 15.5C12.7333 15.6333 12.5166 15.6833 12.3 15.6833C11.8833 15.6833 11.4666 15.4666 11.2333 15.0833C10.8666 14.4833 11.0666 13.7166 11.65 13.3666L13.1333 12.4833V10.6833C13.1333 9.99998 13.7 9.43331 14.3833 9.43331C15.0666 9.43331 15.6333 9.99998 15.6333 10.6833V13.1833Z"
						fill="#F34213"
					></path>
				</svg>

				<svg
					className="hidden lg:inline-block absolute right-2 top-3"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M26.9833 3.33331H13.0166C6.94998 3.33331 3.33331 6.94998 3.33331 13.0166V26.9666C3.33331 33.05 6.94998 36.6666 13.0166 36.6666H26.9666C33.0333 36.6666 36.65 33.05 36.65 26.9833V13.0166C36.6666 6.94998 33.05 3.33331 26.9833 3.33331ZM28.7666 16.6L24.9166 21.5666C24.4333 22.1833 23.75 22.5833 22.9666 22.6666C22.1833 22.7666 21.4166 22.55 20.8 22.0666L17.75 19.6666C17.7073 19.6292 17.6564 19.6021 17.6015 19.5877C17.5465 19.5732 17.4889 19.5717 17.4333 19.5833C17.3666 19.5833 17.25 19.6166 17.15 19.75L13.1833 24.9C12.9333 25.2166 12.5666 25.3833 12.2 25.3833C11.9333 25.3833 11.6666 25.3 11.4333 25.1166C11.3031 25.0171 11.1937 24.8928 11.1115 24.751C11.0293 24.6091 10.9759 24.4525 10.9542 24.29C10.9325 24.1275 10.9431 23.9623 10.9852 23.8039C11.0274 23.6454 11.1004 23.4969 11.2 23.3666L15.1666 18.2166C15.65 17.6 16.3333 17.2 17.1166 17.1C17.8833 17 18.6666 17.2166 19.2833 17.7L22.3333 20.1C22.45 20.2 22.5666 20.2 22.65 20.1833C22.7166 20.1833 22.8333 20.15 22.9333 20.0166L26.7833 15.05C26.8829 14.9193 27.0075 14.8099 27.15 14.7281C27.2924 14.6463 27.4497 14.5937 27.6127 14.5735C27.7757 14.5534 27.9411 14.5659 28.0992 14.6105C28.2573 14.6552 28.4049 14.7309 28.5333 14.8333C29.0833 15.2833 29.1833 16.0666 28.7666 16.6Z"
						fill="#EADC7D"
					></path>
				</svg>

				<svg
					className="hidden lg:inline-block absolute left-6 bottom-16"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M29.3333 8.85169L19.9167 3.78502C19.4272 3.52243 18.8804 3.38501 18.325 3.38501C17.7696 3.38501 17.2228 3.52243 16.7333 3.78502L7.33333 8.85169C6.64999 9.23502 6.21666 9.96836 6.21666 10.7684C6.21666 11.585 6.63333 12.3184 7.33333 12.685L16.75 17.7517C17.2364 18.0143 17.7805 18.1517 18.3333 18.1517C18.8861 18.1517 19.4302 18.0143 19.9167 17.7517L29.3333 12.685C30.0167 12.3184 30.45 11.585 30.45 10.7684C30.45 9.96836 30.0167 9.23502 29.3333 8.85169ZM15.2 19.5167L6.44999 15.15C6.1227 14.9832 5.75803 14.9033 5.39097 14.918C5.02392 14.9327 4.66679 15.0414 4.35388 15.2339C4.04096 15.4263 3.78276 15.6959 3.60404 16.0169C3.42533 16.3378 3.33211 16.6993 3.33332 17.0667V25.3334C3.33332 26.7667 4.13332 28.05 5.41666 28.7L14.1667 33.0667C14.4667 33.2167 14.8 33.3 15.1333 33.3C15.5167 33.3 15.9167 33.1834 16.2667 32.9834C16.9 32.5834 17.2833 31.9 17.2833 31.15V22.8834C17.2667 21.45 16.4667 20.1667 15.2 19.5167ZM33.3333 17.0667V21.1667C32.5333 20.9334 31.6833 20.8334 30.8333 20.8334C28.5667 20.8334 26.35 21.6167 24.6 23.0167C22.2 24.9 20.8333 27.75 20.8333 30.8334C20.8333 31.65 20.9333 32.4667 21.15 33.25C20.9 33.2167 20.65 33.1167 20.4167 32.9667C19.7833 32.5834 19.4 31.9 19.4 31.15V22.8834C19.4 21.45 20.2 20.1667 21.4667 19.5167L30.2167 15.15C30.5439 14.9832 30.9086 14.9033 31.2757 14.918C31.6427 14.9327 31.9999 15.0414 32.3128 15.2339C32.6257 15.4263 32.8839 15.6959 33.0626 16.0169C33.2413 16.3378 33.3345 16.6993 33.3333 17.0667Z"
						fill="#9F97AD"
					></path>
					<path
						d="M36.6333 26.0833C35.9335 25.2207 35.0492 24.5259 34.0455 24.05C33.0418 23.5741 31.9441 23.3292 30.8333 23.3333C29.0667 23.3333 27.4333 23.95 26.15 24.9833C25.2674 25.6808 24.5552 26.57 24.0672 27.5835C23.5792 28.5971 23.3282 29.7084 23.3333 30.8333C23.3333 33.1833 24.4 35.2666 26.0833 36.6333C27.3667 37.7 29.0333 38.3333 30.8333 38.3333C32.7333 38.3333 34.45 37.6166 35.7833 36.4666C36.5827 35.7615 37.2234 34.8948 37.663 33.9237C38.1025 32.9526 38.331 31.8993 38.3333 30.8333C38.3333 29.0333 37.7 27.3666 36.6333 26.0833ZM32.55 31.3C32.55 31.7333 32.3167 32.15 31.95 32.3666L29.6 33.7666C29.4 33.8833 29.1833 33.95 28.95 33.95C28.5333 33.95 28.1167 33.7333 27.8833 33.35C27.5333 32.75 27.7167 31.9833 28.3167 31.6333L30.05 30.6V28.5C30.05 27.8166 30.6167 27.25 31.3 27.25C31.9833 27.25 32.55 27.8166 32.55 28.5V31.3Z"
						fill="#9F97AD"
					></path>
				</svg>

				<FaStore className="text-3xl text-[#04084A] hidden lg:inline-block absolute right-6 bottom-24" />

				<FaCartArrowDown className="text-3xl text-[#04084A] opacity-30 hidden lg:inline-block absolute right-36 bottom-0" />
				<h2 className="text-2xl text-center font-bold mb-3 lg:text-3xl">
					Build Your Own Stunning Online Store <br /> in Minutes!
				</h2>
				<p className="">
					Unlock your e-commerce potential with our user-friendly builder.
					Customize, manage inventory, secure payments, and gain insights for
					growth. Launching soon!
				</p>
				<div className="flex items-center justify-center gap-4 font-semibold capitalize text-lg my-8">
					{/* <Link
						href={'support'}
						role="button"
						className="px-6 py-3 border border-[#222566] text-[#222566] rounded-sm"
					>
						empower us
					</Link> */}
					<Link
						href={'register'}
						role="button"
						className="px-6 py-3 border border-[#222566] bg-[#222566] text-white rounded-sm"
					>
						join waitlist
					</Link>
				</div>
			</section>
			<Footer />
		</main>
	)
}