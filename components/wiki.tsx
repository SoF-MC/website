import wiki_questions from "../public/wiki_questions.png";
import wiki_about from "../public/wiki_about.png";
import wiki_rules from "../public/wiki_rules.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default class Wiki extends React.Component {
    render() {
        return (
            <div>
                <div className="w-full bg">
                    <div className="backdrop-blur-[6px] text-center text-white pt-48 pb-40">
                        <h1 className="font-manrope text-[2.75rem]">
                            Вики сервера
                        </h1>
                        <p className="text-xl font-montserrat">
                            Информация для <span className="underline">новичков</span> и <span className="underline">не только</span>
                        </p>
                    </div>
                </div>
                <div className="py-12 border-t border-zinc-800 bg-zinc-900 grid gap-12">
                    <div className="ml-8 font-manrope text-white text-3xl">
                        Главное
                        <div className="grid gap-4 lg:flex font-montserrat text-xl">
                            <div className="w-[300px] outline outline-8 outline-offset-8 outline-zinc-800 rounded-2xl mt-8 ml-3">
                                <div className="flex items-center m-2">
                                    <Image alt="" src={wiki_about} width={32} height={32} />
                                    <p className="ml-2">
                                        О сервере
                                    </p>
                                    <button className="ml-2 p-2 rounded-2xl hover:bg-zinc-800/50">
                                        <Link href="/wiki/about">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                                <div className="mt-2 text-sm font-manrope ml-2 max-w-[280px] grid grid-cols-3">
                                    <div className="bg-sky-300 rounded-[10px] text-black px-2 py-0.5 w-max">
                                        Новичкам
                                    </div>
                                    <div className="bg-red-300 rounded-[10px] text-black px-2 py-0.5 w-max">
                                        Важно
                                    </div>
                                </div>
                                <div className="text-base ml-2.5 mt-2">
                                    Информация о сервере
                                </div>
                            </div>
                            <div className="w-[300px] outline outline-8 outline-offset-8 outline-zinc-800 rounded-2xl mt-8 ml-3 lg:ml-12">
                                <div className="flex items-center m-2">
                                    <Image alt="" src={wiki_questions} width={32} height={32} />
                                    <p className="ml-2">
                                        ЧЗВ
                                    </p>
                                    <button className="ml-2 p-2 rounded-2xl hover:bg-zinc-800/50">
                                        <Link href="/wiki/questions">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                                <div className="mt-2 text-sm font-manrope ml-2 max-w-[280px] grid grid-cols-3">
                                    <div className="bg-sky-300 rounded-[10px] text-black px-2 py-0.5 w-max">
                                        Новичкам
                                    </div>
                                </div>
                                <div className="text-base ml-2.5 mt-2">
                                    Часто Задаваемые Вопросы
                                </div>
                            </div>
                            <div className="w-[300px] outline outline-8 outline-offset-8 outline-zinc-800 rounded-2xl mt-8 ml-3 lg:ml-12">
                                <div className="flex items-center m-2">
                                    <Image alt="" src={wiki_rules} width={32} height={32} />
                                    <p className="ml-2">
                                        Правила
                                    </p>
                                    <button className="ml-2 p-2 rounded-2xl hover:bg-zinc-800/50">
                                        <Link href="/wiki/rules">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                                <div className="mt-2 text-sm font-manrope ml-2 max-w-[280px] flex">
                                    <div className="bg-sky-300 rounded-[10px] text-black px-2 py-0.5 w-max">
                                        Новичкам
                                    </div>
                                    <div className="bg-red-300 rounded-[10px] text-black px-2 py-0.5 w-max ml-2">
                                        Важно
                                    </div>
                                    <div className="bg-amber-300 rounded-[10px] text-black px-2 py-0.5 w-max ml-2">
                                        Обязательно
                                    </div>
                                </div>
                                <div className="text-base ml-2.5 mt-2">
                                    Правила проекта
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};