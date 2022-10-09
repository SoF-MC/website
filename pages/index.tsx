import Index from '../components'
import Head from 'next/head'

export class PageIndex {
	render() {
		return (
			<div>
				<Head>
                	<title>#SoF</title>
            	</Head>
				<Index />
			</div>
		)
	}
}

export default new PageIndex().render