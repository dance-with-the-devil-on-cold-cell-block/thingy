import {NextApiRequest, NextApiResponse} from 'next';
import mysql from 'mysql2/promise';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'pogger'
      });
  
      const [rows, fields] = await connection.execute('SELECT * FROM items');
  
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ message: 'Error connecting to database', error });
    }
}