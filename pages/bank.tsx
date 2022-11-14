import { GetServerSideProps } from "next";
import Head from "next/head";
import { RequestManager } from '../utils/apiRequestManager';
import config from '../config';

import { TicketData, UserData } from "../types";
import { AxiosResponse } from "axios";
import Nav from "../components/nav";
import Footer from "../components/footer";


const render = (user: UserData, ticket: TicketData) => {
	return (
		<div>
			<Head>
				<title>#SoF - Банк</title>
			</Head>
			<div className="flex flex-col min-h-screen">
				<Nav />
				<div className="container">

				</div>
				<Footer />
			</div>
		</div>
	);
};

//@ts-ignore
export const getServerSideProps: GetServerSideProps<{ user: UserData | AxiosResponse<UserData, any>, ticket: TicketData | AxiosResponse<TicketData, any> }> = async (ctx) => {
	if (!ctx.req.cookies["user"]) return {
		redirect: {
			destination: config.apiUrl + "/auth", permanent: false
		}
	}
	const requestManager = new RequestManager(ctx.req.cookies["user"])

	const ticket = await requestManager.getTicket();
	const user = await requestManager.getUser();

	console.log((user as AxiosResponse).status)

	if ((user as AxiosResponse).status === 403 || (ticket as AxiosResponse).status === 403) return {
		redirect: {
			destination: config.apiUrl + "/auth", permanent: false
		}
	}

	return {
		props: {
			user: JSON.stringify(user),
			ticket: JSON.stringify(ticket)
		}
	}
}

export default render;