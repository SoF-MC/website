import React from 'react'

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="fixed w-full h-16 font-montserrat border-b-2 transition items-center z-50 select-none bg-zinc-900/80 backdrop-blur-sm border-zinc-900/50 flex">
                <p className='ml-32 pixel:ml-8 text-white'>
                    #SoF Mods
                </p>
                <div className='ml-[640px] pixel:ml-16'>
                    <a href="/" className='lg:mx-4 text-white hover:bg-zinc-500/10 py-2 px-3 rounded-2xl transition-colors'>
                        Главная
                    </a>
                    <a href="/wiki" className='lg:mx-4 text-white hover:bg-zinc-500/10 py-2 px-3 rounded-2xl transition-colors'>
                        Вики
                    </a>
                </div>
            </nav>
        )
    }
}
