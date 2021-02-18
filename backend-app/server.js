const cors = require('cors')
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(bodyParser.json());

const userRouter = require('./src/routes/routes');

/**
 * Enable cors
 */
app.use(cors());
app.use(userRouter);

app.options('*', cors())

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

// export default app;