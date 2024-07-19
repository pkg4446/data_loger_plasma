const express     = require('express');
const indexRouter = require('./routes');

const app   = express();
const port  = 3002;

app.use(express.json());
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});