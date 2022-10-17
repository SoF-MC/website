import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";

export const setUser = (req: NextApiRequest, res: NextApiResponse, token: string) => {
    return setCookie("user", token, { req, res, maxAge: 1000 * 60 * 60 * 24 });
};