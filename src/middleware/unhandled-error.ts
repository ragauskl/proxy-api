import { NextFunction, Response, Request } from 'express'

export function unhandledError (err: any, req: Request, res: Response, next: NextFunction) {
  console.error('Unhandled Error', err)

  if (res.headersSent) {
    return next(err)
  }

  return res.status(500).json({ error: 'Internal Server Error' })
}
