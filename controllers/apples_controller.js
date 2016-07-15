var get = function (req, res) {
  res.status(201).json({message: 'apple is wonderful for life!'})
}

var destroy = function (req, res) {
  res.status(201).json({message: 'Dont delete apples!'})
}
module.exports = {
  get: get,
  destroy: destroy
}
