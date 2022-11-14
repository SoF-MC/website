import Wiki from "../components/wiki";
import Head from "next/head";
import Footer from "../components/footer";
import Nav from "../components/nav";

export class PageWiki {
	render() {
		return (
			<div>
				<Head>
					<title>#SoF - Вики</title>
				</Head>
				<Wiki />
			</div>
		);
	}
}

export default new PageWiki().render;
