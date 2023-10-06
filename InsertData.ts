import sqlite3 from 'sqlite3';
import path from 'path';

// Specify the path to your SQLite database file within the src folder
const dbPath = path.join(__dirname, '..', 'src', 'your-database-file.db'); // Change 'your-database-file.db' to your database file name

const db = new sqlite3.Database(dbPath); // my main folder is

const data = [
  {
    "_id": "5f0f36345628b2bb08ddcf83",
    "firstName": "Marina",
    "lastName": "Orozco", 
    "email": "marina@kahvanainc.com"
  },
  {
    "_id": "5f0f3634a3357afc09a0333d",
    "firstName": "Kip",
    "lastName": "Winters",
    "email": "kip@kahvanainc.com"
  },
  {
    "_id": "5f0f363455f1ad4632d8e4d3",
    "firstName": "Lorie",
    "lastName": "Avery",
    "email": "lorie@kahvanainc.com"
  },
  {
    "_id": "5f0f36343311956754254404",
    "firstName": "Jasmin",
    "lastName": "Winters",
    "email": "jasmin@kahvanainc.com"
  },
  {
    "_id": "5f0f36344285b38ab4e9187f",
    "firstName": "Emma",
    "lastName": "Hess",
    "email": "emma@kahvanainc.com"
  },
  {
    "_id": "5f0f3634abaa863ab18ac741",
    "firstName": "Elvia",
    "lastName": "Acosta",
    "email": "elvia@kahvanainc.com"
  },
  {
    "_id": "5f0f36342c501774010d92fa",
    "firstName": "Liliana",
    "lastName": "Sweeney",
    "email": "liliana@kahvanainc.com"
  },
  {
    "_id": "5f0f3634987f2ae9d3c7c48a",
    "firstName": "Florencio",
    "lastName": "Acosta",
    "email": "florencio@kahvanainc.com"
  },
  {
    "_id": "5f0f3634e8dfd9bbde33c703",
    "firstName": "Delores",
    "lastName": "Sanchez",
    "email": "delores@kahvanainc.com"
  }
];

db.serialize(() => {
  // Prepare an SQL INSERT statement
  const insertUser = db.prepare("INSERT INTO user (name, email, phoneNumber) VALUES (?, ?, ?)");

  // Loop through the data array and insert each user
  data.forEach(user => {
    insertUser.run(`${user.firstName} ${user.lastName}`, user.email, null);
  });

  // Finalize the prepared statement
  insertUser.finalize();

  console.log('Data inserted into the database.');
});

// Close the database connection when done
db.close();
