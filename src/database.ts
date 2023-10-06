import sqlite3 from 'sqlite3';
import path from 'path';


const dbPath = path.join(__dirname, 'database-file.db'); 

const db = new sqlite3.Database(dbPath);


db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phoneNumber TEXT
    )
  `);
});

export default db;
