import { NextApiRequest, NextApiResponse } from "next"
import { setUser } from "../../utils/cookies"

<<<<<<< HEAD
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (!req.query.auth) return res.status(403).send("")
	setUser(req, res, req.query.auth as string)
	return res.redirect("/")
}
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.auth) return res.status(403).send("");
    setUser(req, res, req.query.auth as string);
    return res.redirect("/");
};
>>>>>>> 54aab7f78927ca2012d48b49f4a4825504971589
