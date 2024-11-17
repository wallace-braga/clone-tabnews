function status(req, res) {
  res.status(200).json({
    status: 'ok',
    version: '1.0.0',
  })
}

export default status
