import { NextApiRequest, NextApiResponse } from "next";
import { setUser } from "../../utils/cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.auth) return res.status(403).send();
    setUser(req, res, req.query.auth as string);
    return res.redirect("/");
};