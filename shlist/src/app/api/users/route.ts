
import connection from "@/app/conf/db.config";


export async function GET(){
        const [rows] = await connection.query('SELECT * FROM users;');
        return new Response(JSON.stringify({ data: rows }), {
          headers: {
            'Content-Type': 'application/json'
          },
          status: 200
        });
 }
    
