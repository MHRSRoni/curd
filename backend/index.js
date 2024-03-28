const app = require('./src/app.js')
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('server running on port', PORT)
})