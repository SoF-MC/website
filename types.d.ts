export interface UserData {
    id: string,
    username: string,
    discriminator: string,
    avatar: string,
    tag: string
}

export interface CardData {
    ownerId: string,
    name: string,
    balance: number
}

export interface ActionData {
    createdAt?: string,
    userId: string,
    recieverId?: string,
    amount: number
}

export interface TicketData {
    channelId: string,
    userId: string,
    data: RequestTicketData,
    reason?: string,
    closed: boolean
}

export interface RequestTicketData {
    nick: string,
    age: number,
    desc: string
}

export interface TransferOptions {
    recieverId: string,
    amount: number
}

export interface RequestOptions {
    body?: object,
    headers?: object,
    method: 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS' |
    'PROPFIND' | 'PROPPATCH' | 'MKCOL' | 'COPY' | 'MOVE' | 'LOCK' | 'UNLOCK' | 'TRACE' | 'SEARCH'
}

export interface DefaultHeaders {
    authorisation: string
}