import { NextFunction, Response, Request } from 'express'

export function cors (req: Request, res: Response, next: NextFunction) {
  // Origins you wish to allow - * for All/Any
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, REPORT')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', `X-Requested-With, Content-Type, Authorization, Accept`)

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, REPORT, OPTIONS, AUTHORIZATION')
    return res.status(200).json({})
  }
  next()
}
