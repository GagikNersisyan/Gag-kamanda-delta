import { validationResult, matchedData } from 'express-validator';

export const validationResultMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ errors: errors.array() });
  }

  const matched = matchedData(req, {
    includeOptionals: true,
  });

  req.body = matched;

  next();
};