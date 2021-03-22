
import app from './common/core/app'

app.server.listen(process.env.PORT, function () {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Server sendo iniciado com a porta: ${process.env.PORT}`)
})
