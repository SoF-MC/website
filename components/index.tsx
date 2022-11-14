import oplotDev from "../public/oplotDev.png"
import Vladirus from "../public/Vladirus.png"
import train_station from "../public/train_station.png"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Desc from "./desc"

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<div className="mx-8 grid items-center justify-items-center text-center lg:mx-24 lg:grid-cols-2 lg:text-left">
					<div className="justify-self-start">
						<Image
							alt=""
							src={train_station}
							width={480}
							height={480}
						/>
					</div>
					<div className="font-montserrat justify-self-end text-white">
						<p className="text-xl">
							- какой самый лучший приватный сервер с модами?
							<br />- софе модед
						</p>
						<div>
							<button className="text-manrope mt-4 rounded-2xl bg-zinc-500/10 py-3 px-5 text-white hover:bg-zinc-400/10 lg:ml-4">
								<Link href="/form">
									Подать заявку!
								</Link>
							</button>
							<button className="text-manrope ml-2 mt-4 rounded-2xl border border-zinc-500 py-3 px-5 text-white hover:bg-zinc-500/10">
								<Link href="/wiki/about">О сервере</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="mt-8 rounded-t-[48px] bg-zinc-900 py-1 text-white lg:py-3.5">
					<Desc />
					<div className="font-manrope w-full justify-items-center text-center text-3xl">
						Хотите задонатить?
					</div>
					<div className="container mx-auto my-12 grid gap-12 px-6 lg:grid-cols-2">
						<div className="rounded-[48px] bg-fuchsia-900/10 py-12 px-6">
							<div className="mb-3 grid place-items-center">
								<Image
									alt=""
									src={Vladirus}
									width={64}
									height={64}
									className="rounded-[24px]"
								/>
							</div>
							<h2 className="font-manrope mb-6 text-center text-3xl font-extrabold tracking-tight text-fuchsia-500">
								Vladirus
							</h2>
							<div className="grid justify-items-center">
								<p className="mx-auto mb-8 max-w-lg text-center leading-relaxed">
									Создатель оригинального #SoF, ютубер,
									стример
								</p>
								<div className="grid gap-8 text-center lg:grid-cols-2 lg:gap-2">
									<Link
										href="https://www.donationalerts.com/r/vladirus"
										target={"_blank"}
										className="text-manrope -mt-6 rounded-2xl bg-zinc-500/10 py-3 px-5 text-white hover:bg-zinc-400/10"
									>
										DonationAlerts
									</Link>
									<Link
										href="https://www.youtube.com/c/Владирус"
										target={"_blank"}
										className="text-manrope -mt-6 rounded-2xl bg-zinc-500/10 py-3 px-5 text-white hover:bg-zinc-400/10"
									>
										YouTube
									</Link>
								</div>
							</div>
						</div>
						<div className="rounded-[48px] bg-zinc-700/10 py-12 px-6">
							<div className="mb-3 grid place-items-center">
								<Image
									alt=""
									src={oplotDev}
									width={64}
									height={64}
									className="rounded-[24px]"
								/>
							</div>
							<h2 className="font-manrope mb-6 text-center text-3xl font-extrabold tracking-tight text-zinc-500">
								MeiNanziiii (oplotDev)
							</h2>
							<div className="grid justify-items-center">
								<p className="mx-auto mb-8 max-w-lg text-center leading-relaxed">
									Создатель и идея #SoF Mods, создатель сайта
								</p>
								<Link
									href="https://www.buymeacoffee.com/meinanziiii"
									target={"_blank"}
									className="text-manrope -mt-6 rounded-2xl bg-zinc-500/10 py-3 px-5 text-white hover:bg-zinc-400/10"
								>
									Buy me a coffee
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
