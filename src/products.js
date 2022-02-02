// get the client
const res = require("express/lib/response");
const mysql = require("mysql2");
// create the connection to database
//-- see credentials file

// const query = `SELECT * FROM Products`;

// connection.query(query, (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

const getAllProducts = async () => {
  const query = `SELECT * FROM Products`;
  //const [results, fields] = await connection.promise().query(query);
  const res = await connection.promise().query(query);

  const results = res[0];
  const fields = res[1];

  console.log(results);

  return results;
};
//creating a new product in the method
const createProduct = async (product) => {
  const insertQuery = `INSERT INTO Products (Description,SKU,UserId)
    VALUES('${product.Description}','${product.SKU}',${product.UserId})`;
  const [results, fields] = await connection.promise().query(insertQuery);
  console.log(results);
};

//getAllProducts();
createProduct({
  Description: "Diana new product",
  SKU: "Diana8776",
  UserId: 1,
});
getAllProducts();
connection.end();
