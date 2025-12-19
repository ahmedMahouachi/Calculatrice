function validateAndParseNumbers(req, res) {
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Both numbers a and b are required' });
    return null;
  }

  if (a === '' || b === '') {
    res.status(400).json({ error: 'Both a and b must not be empty' });
    return null;
  }

  a = Number(a);
  b = Number(b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Both a and b must be valid numbers' });
    return null;
  }

  return { a, b };
}

exports.add = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;

  const { a, b } = parsed;
  res.send({ result: a + b });
};

exports.sub = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;

  const { a, b } = parsed;
  res.send({ result: a - b });
};


exports.mul = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;

  const { a, b } = parsed;
  res.send({ result: a * b });
};

exports.div = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;

  const { a, b } = parsed;

  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }

  res.send({ result: a / b });
};


exports.puissance = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;

  const { a, b } = parsed;
  res.send({ result: a ** b });
};

