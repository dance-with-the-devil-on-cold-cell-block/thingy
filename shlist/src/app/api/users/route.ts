import  { NextApiRequest, NextApiResponse } from "next";
import connection from "@/app/conf/db.config";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { fn, ln, em, pw } = req.body;
        try {
            const result = await connection.query(
                'INSERT INTO users (firstnam, lastname, email, passwd) VALUES (?, ?, ?, ?)',
                [fn, ln, em, pw]
            );
            res.status(201).json({ message: 'User created', result });
        } catch (error) {
            res.status(500).json({ error:"pogger error"}); 
        }
    }
    if (req.method === 'GET') {
        try {
            const [rows] = await connection.query('SELECT * FROM users');
            res.status(200).json(rows);
        }
        catch (error) {
            res.status(500).json({ error:"pogger error"}); 
        }
    }
    else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}