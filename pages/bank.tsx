import Head from 'next/head'
import Bank from '../components/bank'

export class PageBank {
	render() {
		return (
			<div>
				<Head>
                	<title>#SoF - Банк</title>
            	</Head>
				<Bank />
			</div>
		)
	}
}

export default new PageBank().render