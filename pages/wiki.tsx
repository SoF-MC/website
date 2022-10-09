import Head from 'next/head'
import Wiki from '../components/wiki'

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