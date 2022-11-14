import hammer_and_pick from "../public/hammer-and-pick.png";
import Image from "next/image";
import React from "react";

export default class Bank extends React.Component {
    render() {
        return (
            <div className="grid h-screen place-items-center">
                <div className="flex items-center">
                    <Image
                        alt=""
                        src={hammer_and_pick}
                        width={64}
                        height={64}
                    />
                    <p className="font-montserrat mx-6 text-center text-2xl text-white">
                        Банк в разработке
                    </p>
                </div>
            </div>
        );
    }
}
