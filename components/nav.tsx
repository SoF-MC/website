import Link from "next/link";
import React from "react";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="w-full h-16 font-montserrat border-b-2 transition items-center select-none bg-zinc-900/80 backdrop-blur-sm border-zinc-900/50 flex sticky top-0 z-50">
                <p className="ml-32 pixel:ml-8 text-white flex-none">
                    #SoF Mods
                </p>
                <div className="mx-8 justify-self-end lg:mx-24">
                    <Link href="/">
                        <span className="rounded-2xl py-2 px-3 text-white transition-colors hover:bg-zinc-500/10 lg:mr-4">
                            Главная
                        </span>
                    </Link>
                    <Link href="/wiki">
                        <span className="rounded-2xl py-2 px-3 text-white transition-colors hover:bg-zinc-500/10 lg:mx-4">
                            Вики
                        </span>
                    </Link>
                    <Link href="/bank">
                        <span className="rounded-2xl py-2 px-3 text-white transition-colors hover:bg-zinc-500/10 lg:ml-4">
                            Банк
                        </span>
                    </Link>
                </div>
            </nav>
        );
    }
}
