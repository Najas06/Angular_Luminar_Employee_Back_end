// import json server
const server = require('json-server')

// create server
const employeeServer = server.create()

const router = server.router('db.json')

const middlewares = server.defaults()

employeeServer.use(middlewares) // data store before must be convert to json
employeeServer.use(router)
const port = process.env.PORT || 3000

employeeServer.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})