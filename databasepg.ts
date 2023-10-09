import { Pool, PoolClient } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432, 
});

pool.connect((err: Error, client: PoolClient, done: () => void) => {
  if (err) {
    console.error('Failed to connect to PostgreSQL database:', err);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});
