import Link from "next/link"
import React from "react"

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="font-montserrat z-50 grid h-16 w-full select-none grid-cols-2 items-center border-b-2 border-zinc-900/50 bg-zinc-900/80 backdrop-blur-sm transition">
				<p className="mx-8 justify-self-start text-white lg:mx-24">
					#SoF
				</p>
				<div className="mx-8 justify-self-end lg:mx-24">
					<Link href="/">
						<span className="rounded-2xl py-2 px-3 text-white transition-colors hover:bg-zinc-500/10 lg:mr-4">
							Главная
						</span>
					</Link>
					<Link href="/wiki">
						<span className="rounded-2xl py-2 px-3 text-white transition-colors hover:bg-zinc-500/10 lg:mx-4">
							Вики
						</span>
					</Link>
					<Link href="/bank">
						<span className="rounded-2xl py-2 px-3 text-white transition-colors hover:bg-zinc-500/10 lg:ml-4">
							Банк
						</span>
					</Link>
				</div>
			</nav>
		)
	}
}
