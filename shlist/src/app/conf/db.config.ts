import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'mail.23spisemaendeneogemil.is',
    port: 3306,
    user: 'root',
    password: '5WagShit!', //virkar bara á tskola netinu LOLOLOLOLOLOLOLOLOLOL
    database: 'pogger'
});

export default connection;