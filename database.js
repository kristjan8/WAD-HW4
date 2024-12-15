const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "sql",
    database: "wad-db",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
	    "id" SERIAL PRIMARY KEY,         
	    "body" VARCHAR(1024) NOT NULL,
        "username" VARCHAR(32),
        "datetime" TIMESTAMP
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posts" table');
    }
});

module.exports = pool;