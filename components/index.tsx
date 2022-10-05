import React from 'react'
import Image from 'next/image'
import arm from '../public/arm.png'
import heart from '../public/heart.png'
import hammer_and_pick from '../public/hammer-and-pick.png'
import event from '../public/event.png'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div className='w-full h-full grid justify-items-center py-8'>
                    <div className='lg:flex items-center pixel:mx-4 text-center lg:text-left'>
                        <Image src={arm} className='scale-50'/>
                        <div className='pixel:-mt-16'>
                            <h1 className='font-manrope text-zinc-50 mx-4 text-xl lg:text-2xl'>
                                – какой хороший бесплатный сервер с модами? <br/>
                                – соф модс
                            </h1>
                            <button className='mt-4 py-3 px-5 bg-zinc-500/10 hover:bg-zinc-400/10 rounded-2xl text-white text-manrope'>
                                <a href='https://discord.gg/jZudXQM'>
                                    Подать заявку!
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 rounded-t-[48px] py-1 lg:py-3.5 text-white'>
                    <div className="container px-6 mx-auto my-12 grid gap-12">
                        <div className="py-12 bg-red-900/10 rounded-[48px] px-6">
                            <div className="grid place-items-center mb-3">
                                <Image src={heart} width={64} height={64} />
                            </div>
                            <h2 className="text-3xl font-extrabold font-manrope tracking-tight mb-6 text-center text-red-500">Коммьюнити</h2>
                            <p className="leading-relaxed max-w-lg mx-auto mb-8 text-center">Игроки сервера дружелюбно относятся к новичкам, так-же они помогут вам развится на начале вашей игры!</p>
                        </div>
                    </div>
                    <div className="container px-6 mx-auto my-12 grid gap-12">
                        <div className="py-12 bg-amber-900/10 rounded-[48px] px-6">
                            <div className="grid place-items-center mb-3">
                                <Image src={hammer_and_pick} width={64} height={64} />
                            </div>
                            <h2 className="text-3xl font-extrabold font-manrope tracking-tight mb-6 text-center text-amber-500">Совместные проекты</h2>
                            <p className="leading-relaxed max-w-lg mx-auto mb-8 text-center">Игроки сервера объеденяются в группы и кланы, вместе они строят совместные проекты, или помогают другим!</p>
                        </div>
                    </div>
                    <div className="container px-6 mx-auto my-12 grid gap-12">
                        <div className="py-12 bg-purple-900/10 rounded-[48px] px-6">
                            <div className="grid place-items-center mb-3">
                                <Image src={event} width={64} height={64} />
                            </div>
                            <h2 className="text-3xl font-extrabold font-manrope tracking-tight mb-6 text-center text-purple-500">Ивенты</h2>
                            <p className="leading-relaxed max-w-lg mx-auto mb-8 text-center">Игроки сервера могут проводить собственные ивенты! Если вы хотите свои предметы для ивента попросите админов!</p>
                        </div>
                    </div>
                    <div className="container px-6 mx-auto my-12 grid gap-12">
                        <div className="py-12 bg-slate-800/10 rounded-[48px] px-6">
                            <h2 className="text-3xl font-extrabold font-manrope tracking-tight mb-6 text-center text-slate-500">Остались вопросы?</h2>
                            <div className='grid justify-items-center'>
                                <p className="leading-relaxed max-w-lg mx-auto mb-8 text-center">Задавай их смело в нашем Discord сервере!</p>
                                <button className='-mt-6 py-3 px-5 bg-zinc-500/10 hover:bg-zinc-400/10 rounded-2xl text-white text-manrope'>
                                    <a href='https://discord.gg/jZudXQM'>
                                        Discord сервер
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
