//const {get} = require ('lodash')
//const a = {
//name:'Joe'
//};
//const b = get(a,'lastname','---');
//console.log('Hello',b)
import express from 'express';
import errorHandler from "./modules/core/errorHandler";
import logger from "./modules/core/logger";
import  parseResponse from "./modules/core/parseResponse";
import cors from "./modules/core/cors";
import routes from "./modules/core/routes";
import dbConnect from "./modules/core/db";

const app = express();
const PORT = 3000;

dbConnect(app)
logger(app);
parseResponse(app);
cors(app);
routes(app)

//app.get('/', home);
//app.post('/userRegister', userRegister);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
