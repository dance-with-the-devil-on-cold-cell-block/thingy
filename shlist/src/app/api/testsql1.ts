"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2 = require("mysql2");
let cn = mysql2.createConnection({
    host: 'localhost',
    port:"3306",
    user: 'root',
    password: '12345',
    database: 'pogger'
});
// C R U D
// Create = Set
// Read = Get
// Update = upd
// delete = Del

/*
    firstnam VARCHAR(15),
    lastname varchar(15),
    email VARCHAR(100),
    passwd VARCHAR(255),
*/
function setUser(fn:string, ln:string, em:string, pw:string) {
    cn.query('insert into users(firstnam,lastname,email,passwd) values (?,?,?,?)',[fn,ln,em,pw])
}

function getUsers() {
    cn.query('select * from users;', function (_err:any, rows:any) {
    console.log(rows);
});}



cn.query('show tables from pogger;', function (_err:any, rows:any) {
    console.log(rows);
});

setUser('pogger','dogger','ploggsmoller@ittail.dog', 'ég232323kannekki');

getUsers();