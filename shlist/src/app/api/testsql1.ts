"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2 = require("mysql2");
let cn = mysql2.createConnection({
    host: 'localhost',
    port:"3306",
    user: 'root',
    password: '12345',
    database: 'pogger',
    rowsAsArray: true,
});
cn.query('select * from users;', function (_err:any, rows:any) {
    console.log(rows);
});
cn.query('show tables from pogger;', function (_err:any, rows:any) {
    console.log(rows);
});
