import connection from "@/app/conf/db.config";


export async function POST(req: Request){
        const data = await req.json();
        const [rows] = await connection.query(`call resetpass('${data.email}','${data.passwd}')`);
        return new Response(JSON.stringify({ data: rows }), {
          headers: {
            'Content-Type': 'application/json'
          },
          status: 200
        });
}