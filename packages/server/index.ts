//@ts-ignore
import app from './dist/server.bundle'

const port = Number(process.env.SERVER_PORT) || 3001


app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})


