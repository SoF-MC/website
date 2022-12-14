import { RequestOptions, RequestTicketData, TicketData, UserData } from "../types";
import axios from "axios";
import config from "../config";

export class RequestManager {
    private accessToken: string;

    public constructor(token: string) {
        this.accessToken = token;
    }

    public async getUser() {
        const request = await this.sendRequest<UserData>("/user", { method: "GET" })
        if (request.status === 200) return request.data;
        return request;
    }

    public async getTicket() {
        const request = await this.sendRequest<TicketData>("/tickets/get", { method: "GET" })
        if (request.status === 200) return request.data;
        return request;
    }

    public async createTicket(data: RequestTicketData) {
        const request = await this.sendRequest<any>("/tickets/create", { method: "POST", body: data })
        if (request.status === 200) return request.data;
        return request;
    }

    private async sendRequest<ResponseData>(route: string, options: RequestOptions) {
        return await axios.request<ResponseData>({ url: config.apiUrl + route, method: options.method, headers: Object.assign(options.headers ?? {}, { authorisation: this.accessToken }), data: options.body }).catch(r => r)
    }
}