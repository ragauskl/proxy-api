import { NextFunction, Response, Request } from 'express'

export function endpointNotFound (req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ error: 'Not Found' })
}
