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
                <div className="bg w-full">
                    <div className="pt-48 pb-40 text-center text-white backdrop-blur-[6px]">
                        <h1 className="font-manrope text-[2.75rem]">
                            Вики сервера
                        </h1>
                        <p className="font-montserrat text-xl">
                            Информация для{" "}
                            <span className="underline">новичков</span> и{" "}
                            <span className="underline">не только</span>
                        </p>
                    </div>
                </div>
                <div className="grid gap-12 border-t border-zinc-800 bg-zinc-900 py-12">
                    <div className="font-manrope ml-8 text-3xl text-white">
                        Главное
                        <div className="font-montserrat grid gap-4 text-xl lg:flex">
                            <div className="mt-8 ml-3 w-[300px] rounded-2xl outline outline-8 outline-offset-8 outline-zinc-800">
                                <div className="m-2 flex items-center">
                                    <Image
                                        alt=""
                                        src={wiki_about}
                                        width={32}
                                        height={32}
                                    />
                                    <p className="ml-2">О сервере</p>
                                    <button className="ml-2 rounded-2xl p-2 hover:bg-zinc-800/50">
                                        <Link href="/wiki/about">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                                <div className="font-manrope mt-2 ml-2 grid max-w-[280px] grid-cols-3 text-sm">
                                    <div className="w-max rounded-[10px] bg-sky-300 px-2 py-0.5 text-black">
                                        Новичкам
                                    </div>
                                    <div className="w-max rounded-[10px] bg-red-300 px-2 py-0.5 text-black">
                                        Важно
                                    </div>
                                </div>
                                <div className="ml-2.5 mt-2 text-base">
                                    Информация о сервере
                                </div>
                            </div>
                            <div className="mt-8 ml-3 w-[300px] rounded-2xl outline outline-8 outline-offset-8 outline-zinc-800 lg:ml-12">
                                <div className="m-2 flex items-center">
                                    <Image
                                        alt=""
                                        src={wiki_questions}
                                        width={32}
                                        height={32}
                                    />
                                    <p className="ml-2">ЧЗВ</p>
                                    <button className="ml-2 rounded-2xl p-2 hover:bg-zinc-800/50">
                                        <Link href="/wiki/questions">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                                <div className="font-manrope mt-2 ml-2 grid max-w-[280px] grid-cols-3 text-sm">
                                    <div className="w-max rounded-[10px] bg-sky-300 px-2 py-0.5 text-black">
                                        Новичкам
                                    </div>
                                </div>
                                <div className="ml-2.5 mt-2 text-base">
                                    Часто Задаваемые Вопросы
                                </div>
                            </div>
                            <div className="mt-8 ml-3 w-[300px] rounded-2xl outline outline-8 outline-offset-8 outline-zinc-800 lg:ml-12">
                                <div className="m-2 flex items-center">
                                    <Image
                                        alt=""
                                        src={wiki_rules}
                                        width={32}
                                        height={32}
                                    />
                                    <p className="ml-2">Правила</p>
                                    <button className="ml-2 rounded-2xl p-2 hover:bg-zinc-800/50">
                                        <Link href="/wiki/rules">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                                <div className="font-manrope mt-2 ml-2 flex max-w-[280px] text-sm">
                                    <div className="w-max rounded-[10px] bg-sky-300 px-2 py-0.5 text-black">
                                        Новичкам
                                    </div>
                                    <div className="ml-2 w-max rounded-[10px] bg-red-300 px-2 py-0.5 text-black">
                                        Важно
                                    </div>
                                    <div className="ml-2 w-max rounded-[10px] bg-amber-300 px-2 py-0.5 text-black">
                                        Обязательно
                                    </div>
                                </div>
                                <div className="ml-2.5 mt-2 text-base">
                                    Правила проекта
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
