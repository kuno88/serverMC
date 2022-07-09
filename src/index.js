import app from './app'
import dbConnect from './database';

app.listen(3000);
dbConnect();
console.log("server listen on port: ", 3000);



