import connection from "@/app/conf/db.config";

export async function GET(){
        const [rows] = await connection.query('SELECT * FROM items;');
        return new Response(JSON.stringify({ data: rows }), {
          headers: {
            'Content-Type': 'application/json'
          },
          status: 200
        });
      }


export async function POST(req: Request){
        const data = await req.json();
        const [rows] = await connection.query(`call libstar(${data.id})`);
        return new Response(JSON.stringify({ data: rows }), {
          headers: {
            'Content-Type': 'application/json'
          },
          status: 200
        });
    
}