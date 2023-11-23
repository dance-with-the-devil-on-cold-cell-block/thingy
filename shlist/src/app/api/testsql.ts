import mysql, {RowDataPacket}  from 'mysql2';

const cn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'pogger',
  rowsAsArray: true,
});

cn.query<RowDataPacket[]>('select * from users;', (_err, rows) =>{
  console.log(rows);
}
);

cn.query<RowDataPacket[]>('show tables from pogger;', (_err, rows) => {
  console.log(rows);
}
);