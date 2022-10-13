import Bank from "../components/bank";
import Head from "next/head";

export class PageBank {
	render() {
		return (
			<div>
				<Head>
					<title>#SoF - Банк</title>
				</Head>
				<Bank />
			</div>
		);
	};
};

export default new PageBank().render;