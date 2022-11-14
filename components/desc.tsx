import React from "react";
import hammer_and_pick from "../public/hammer-and-pick.png";
import heart from "../public/heart.png";
import event from "../public/event.png";
import Image from "next/image";

export default class Desc extends React.Component {
    render() {
        return (
            <div className="font-montserrat text-center lg:text-left">
                <div className="my-12 grid items-center justify-items-center px-12 lg:my-24 lg:grid-cols-2 lg:gap-12 lg:px-24 lg:text-left">
                    <div className="lg:justify-self-start">
                        <h2 className="font-manrope mb-6 text-3xl font-extrabold tracking-tight text-red-500">
                            Коммьюнити
                        </h2>
                        <p className="mb-8 max-w-lg leading-relaxed">
                            Игроки сервера дружелюбно относятся к новичкам,
                            так-же они помогут вам развится на начале вашей
                            игры!
                        </p>
                    </div>
                    <div className="lg:justify-self-end">
                        <Image alt="" src={heart} width={128} height={128} />
                    </div>
                </div>
                <hr className="mx-16 border-zinc-800 lg:mx-24" />
                <div className="my-24 hidden items-center justify-items-center px-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:text-right">
                    <div className="justify-self-start">
                        <Image
                            alt=""
                            src={hammer_and_pick}
                            width={128}
                            height={128}
                        />
                    </div>
                    <div className="justify-self-end">
                        <h2 className="font-manrope mb-6 text-3xl font-extrabold tracking-tight text-amber-500">
                            Совместные проекты
                        </h2>
                        <p className="mx-auto mb-8 max-w-lg leading-relaxed">
                            Игроки сервера объеденяются в группы и кланы, вместе
                            они строят совместные проекты, или помогают другим!
                        </p>
                    </div>
                </div>
                <div className="my-12 grid items-center justify-items-center px-12 lg:my-24 lg:hidden">
                    <div className="lg:justify-self-start">
                        <h2 className="font-manrope mb-6 text-3xl font-extrabold tracking-tight text-amber-500">
                            Совместные проекты
                        </h2>
                        <p className="mx-auto mb-8 max-w-lg leading-relaxed">
                            Игроки сервера объеденяются в группы и кланы, вместе
                            они строят совместные проекты, или помогают другим!
                        </p>
                    </div>
                    <div className="lg:justify-self-end">
                        <Image
                            alt=""
                            src={hammer_and_pick}
                            width={128}
                            height={128}
                        />
                    </div>
                </div>
                <hr className="mx-16 border-zinc-800 lg:mx-24" />
                <div className="my-12 grid items-center justify-items-center px-12 lg:my-24 lg:grid-cols-2 lg:gap-12 lg:px-24 lg:text-left">
                    <div className="lg:justify-self-start">
                        <h2 className="font-manrope mb-6 text-3xl font-extrabold tracking-tight text-purple-500">
                            Ивенты
                        </h2>
                        <p className="mb-8 max-w-lg leading-relaxed">
                            Игроки сервера могут проводить собственные ивенты!
                            Если вы хотите свои предметы для ивента попросите
                            админов!
                        </p>
                    </div>
                    <div className="lg:justify-self-end">
                        <Image alt="" src={event} width={128} height={128} />
                    </div>
                </div>
            </div>
        );
    }
}
