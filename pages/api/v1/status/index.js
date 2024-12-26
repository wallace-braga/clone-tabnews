import database from 'infra/database.js'

async function status(req, res) {
  const result = await database.query('SELECT NOW() AS NOW')
  console.log(result.rows)

  res.status(200).json({
    status: 'ok',
    version: '1.0.0',
  })
}

export default status
