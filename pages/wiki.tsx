import Image from 'next/image'
import hammer_and_pick from '../public/hammer-and-pick.png'

export class Wiki {
	render() {
		return (
			<div className='h-screen grid place-items-center'>
				<div className='flex items-center'>
					<Image alt='' src={hammer_and_pick} width={64} height={64} />
					<p className='text-white font-montserrat mx-6 text-2xl text-center'>
						Вики в разработке
					</p>
				</div>
			</div>
		)
	}
}

export default new Wiki().render