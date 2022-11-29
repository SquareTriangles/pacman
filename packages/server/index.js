//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const app = require('./dist/server.bundle')

const port = Number(process.env.SERVER_PORT) || 3001


app.default.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})


