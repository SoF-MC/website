import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from "next"

export const setUser = (req: NextApiRequest, res: NextApiResponse, token: string) => {
    setCookie("user", token, { req, res, maxAge: 1000 * 60 * 60 * 24 })
}