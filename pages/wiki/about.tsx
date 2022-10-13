import Head from "next/head";

export class About {
	render() {
		return (
			<div>
				<Head>
					<title>#SoF - О сервере</title>
				</Head>
				<div>
					<div className="py-24 text-white bg-zinc-900">
						<h1 className="text-center font-manrope text-3xl">
							О сервере
						</h1>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								О нас
							</h2>
							<p className="font-montserrat mt-4">
								Проект #SoF Mods представляет собой сервер с модами с уклоном в RolePlay. Здесь вы можете найти новых друзей, построить невероятное сооружение, поучаствовать в соревнованиях между игроками или просто расслабиться и получить удовольствие, играя в спокойной обстановке.
							</p>
						</div>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								RolePlay
							</h2>
							<p className="font-montserrat mt-4">
								На нашем сервере имеется возможность отыгрывать свои роли. Это не имеет ограничений, кроме правил. Каждый игрок в меру своих возможностей волен выбирать по какому пути ему идти.
								<br /><br />
								Из более глобального, у нас есть совет сервера, в котором принимаются решения.
							</p>
						</div>
						<div className="mx-4 lg:mx-64 my-4">
							<h2 className="mt-12 font-manrope text-xl">
								Дополнения
							</h2>
							<p className="font-montserrat mt-4">
								В дополнения нашего проекта входит множество датапаков, которые могут разнообразить вашу игру. Например, пак ачивок. Их очень много и большинство из них довольно сложные. Они могут послужить хорошим челлеенджем.
								<br /><br />
								Также можно выделить мод Simple Voice Chat, который позволяет говорить прямо внутри игры.
								<br /><br />
								На сервере также стоит мод Origins, позволяющий в начале игры выбрать свою &quot;рассу&quot; среди доступных мобов
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
};

export default new About().render;