import type { NextPage } from 'next'
import Index from '../components'
import Nav from '../components/nav'

export class Home {
	render() {
		return (
			<div>
				<Index />
			</div>
		)
	}
}

export default new Home().render