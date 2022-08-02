var config = require("./dbconfig");
const sql = require("mssql");

async function getdata() {
  try {
    console.log("into connection");
    let pool = await sql.connect(config);
    console.log("sql server connnected");
  } catch (error) {
    console.log(error);
  }
}

async function getdata_withQuery() {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().query(
      //" SELECT *  FROM  dbo.[employee] FOR JSON AUTO, ROOT('p_employee')"
      " SELECT *  FROM  dbo.[employee] "
    );
    return res.recordsets;
  } catch (error) {
    console.log(" mathus-error :" + error);
  }
}

module.exports = {
  getdata: getdata,
  getdata_withQuery: getdata_withQuery,
};
