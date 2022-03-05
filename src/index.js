const dotenv = require('dotenv')
dotenv.config()

const {app} = require('./app')


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server corriendo en http://localhost:${PORT}`))