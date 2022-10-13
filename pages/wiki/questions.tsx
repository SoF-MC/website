import Head from "next/head";

export class Questions {
	render() {
		return (
			<div>
				<Head>
					<title>#SoF - ЧЗВ</title>
				</Head>
				<div>
					<div className="py-24 text-white bg-zinc-900">
						<h1 className="text-center font-manrope text-3xl">
							ЧЗВ - Часто задаваемые вопросы
						</h1>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								Какой IP?
							</h2>
							<p className="font-montserrat mt-4">
								soff.ml, Альтернативный - 85.10.207.149
							</p>
						</div>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								С какой версии можно зайти?
							</h2>
							<p className="font-montserrat mt-4">
								Для сервера #SoF Mods - Строго 1.18.2 (Запуск с лаунчера)
							</p>
						</div>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								Как попасть на сервер?
							</h2>
							<p className="font-montserrat mt-4">
								Подать заявку в нашем Discord сервере или купить проходку (Vladirus в донатах)
							</p>
						</div>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								Можно ли попасть на сервер бесплатно?
							</h2>
							<p className="font-montserrat mt-4">
								Да, можно. Подайте заявку в нашем Discord сервере
							</p>
						</div>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								Проходка покупается навсегда(В случае покупки и не заявки)?
							</h2>
							<p className="font-montserrat mt-4">
								Нет, но по усмотрению администрации, она может быть продлена. Действие проходки заканчивается в конце сезона.
							</p>
						</div>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								Сколько идёт сезон?
							</h2>
							<p className="font-montserrat mt-4">
								От месяца до года.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
};

export default new Questions().render;