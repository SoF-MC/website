import React from "react";

export default class Form extends React.Component {
    render() {
        function reset() {
            const btn1 = document.getElementById("btn1") as HTMLInputElement;
            const btn2 = document.getElementById("btn2") as HTMLInputElement;
            const btn3 = document.getElementById("btn3") as HTMLInputElement;

            btn1.value = "";
            btn2.value = "";
            btn3.value = "";
        }

        function check() {
            const btn2 = document.getElementById("btn2") as HTMLInputElement;
            const text = document.getElementById("inputValue") as HTMLElement;

            if (btn2.valueAsNumber < 13) {
                text.classList.remove("hidden");
            } else {
                text.classList.add("hidden");
            }
        }
        return (
            <div className="grid h-screen items-center bg-zinc-900 py-8 text-white">
                <div>
                    <h1 className="font-manrope text-center text-[48px]">
                        Заявка
                    </h1>
                </div>
                <p
                    className="font-montserrat hidden text-center text-xl text-red-500"
                    id="inputValue"
                >
                    Ошибка! Минимальный возраст - 13 лет.
                </p>
                <div className="mx-8 mt-6 grid gap-4 lg:mx-72">
                    <input
                        placeholder="Никнэйм"
                        className="rounded-2xl bg-zinc-800 p-4 ring-2 ring-black ring-opacity-60 ring-offset-2 ring-offset-zinc-700"
                        id="btn1"
                    />
                    <input
                        min={13}
                        max={69}
                        type="number"
                        onChange={check}
                        placeholder="Возраст"
                        className="rounded-2xl bg-zinc-800 p-4 ring-2 ring-black ring-opacity-60 ring-offset-2 ring-offset-zinc-700"
                        id="btn2"
                    />
                    <textarea
                        rows={8}
                        placeholder="О себе"
                        className="rounded-2xl bg-zinc-800 p-4 ring-2 ring-black ring-opacity-60 ring-offset-2 ring-offset-zinc-700"
                        id="btn3"
                    />
                </div>
                <div>
                    <div className="mx-8 mt-6 grid lg:mx-72">
                        <button className="mt-4 rounded-2xl bg-zinc-800 py-3 px-5 ring-2 ring-black ring-opacity-60 ring-offset-2 ring-offset-zinc-700 transition-all hover:bg-zinc-700 hover:ring-offset-zinc-600">
                            Отправить
                        </button>
                    </div>
                    <div className="mx-8 grid grid-cols-2 gap-4 lg:mx-72">
                        <button
                            className="mt-4 rounded-2xl bg-zinc-800 py-3 px-5 ring-2 ring-black ring-opacity-60 ring-offset-2 ring-offset-zinc-700 transition-all hover:bg-zinc-700 hover:ring-offset-zinc-600"
                            onClick={reset}
                        >
                            Сброс
                        </button>
                        <button className="mt-4 rounded-2xl bg-zinc-800 py-3 px-5 ring-2 ring-black ring-opacity-60 ring-offset-2 ring-offset-zinc-700 transition-all hover:bg-zinc-700 hover:ring-offset-zinc-600">
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
