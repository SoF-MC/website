import React from 'react'
import Link from 'next/link'

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="fixed w-full h-16 font-montserrat border-b-2 transition items-center z-50 select-none bg-zinc-900/80 backdrop-blur-sm border-zinc-900/50 flex">
                <p className='ml-32 pixel:ml-8 text-white flex-none'>
                    #SoF Mods
                </p>
                <div className='ml-[640px] pixel:ml-8'>
                    <Link href="/" className='lg:mx-4 text-white hover:bg-zinc-500/10 py-2 px-3 rounded-2xl transition-colors'>
                        <a>Главная</a>
                    </Link>
                    <Link href="/wiki" className='lg:mx-4 text-white hover:bg-zinc-500/10 py-2 px-3 rounded-2xl transition-colors'>
                        <a>Вики</a>
                    </Link>
                    <Link href="/bank" className='lg:mx-4 text-white hover:bg-zinc-500/10 py-2 px-3 rounded-2xl transition-colors'>
                        <a>Банк</a>
                    </Link>
                </div>
            </nav>
        )
    }
}
