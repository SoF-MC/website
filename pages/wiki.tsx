import Wiki from "../components/wiki"
import Head from "next/head"

export class PageWiki {
	render() {
		return (
			<div>
				<Head>
					<title>#SoF - Вики</title>
				</Head>
				<Wiki />
			</div>
		)
	}
}

export default new PageWiki().render
