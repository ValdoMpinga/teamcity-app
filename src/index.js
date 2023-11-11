// index.js
const app = require('./calculator');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
{
    console.log(`Server is running on port ${PORT}`);
});

//docker build -t teamcity-app .

//docker run -p 3000:3000 -d teamcity-app

