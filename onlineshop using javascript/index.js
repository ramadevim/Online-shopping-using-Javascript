const express = require('express')
const canvas = require('canvas')
const PORT = process.env.PORT || 5000

express()
	.get('/', (req, res) => res.send({version: canvas.version, cairoVersion: canvas.cairoVersion}))
	.listen(PORT, () => console.log(`Listening on ${PORT}`))