import Link from "next/link"
import React from "react"

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="font-montserrat border-t border-zinc-800 bg-zinc-900">
				<div className="container mx-auto flex flex-col items-center px-4 py-5 sm:flex-row">
					<div className="w-full lg:flex">
						<div className="text-sm sm:ml-4">
							<div className="font-medium text-zinc-200">
								&copy; #SoF 2022.
							</div>
							<div className="text-xs font-light text-zinc-400 sm:text-base">
								We are in no way affiliated with or endorsed by
								Mojang, AB.
							</div>
						</div>
					</div>
					<div className="hidden w-full grid-cols-1 text-zinc-400 lg:grid">
						<Link
							href="https://vk.com/server_of_fun"
							target={"_blank"}
							className="justify-self-end"
						>
							VK
						</Link>
						<Link
							href="https://discord.com/invite/jZudXQM"
							target={"_blank"}
							className="justify-self-end"
						>
							Discord
						</Link>
					</div>
				</div>
			</footer>
		)
	}
}
