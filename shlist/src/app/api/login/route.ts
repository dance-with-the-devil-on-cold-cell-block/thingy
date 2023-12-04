import connection from "@/app/conf/db.config";
import { error } from "console";

export async function POST(req: Request){
    try {
        const data = await req.json();
        const [rows] = await connection.query(`call logen('${data.email}','${data.passwd})'`);
        return new Response(JSON.stringify({ data: rows }), {
          headers: {
            'Content-Type': 'application/json'
          },
          status: 200
        });
      }
    catch{error}{
        console.error('Database query failed:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
          status: 500
        });
    }
}