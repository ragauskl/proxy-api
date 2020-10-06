import { Router, Request, Response } from 'express'
import proxyRouter from './proxy/router'

const router = Router({ mergeParams: true })

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome to server.')
})

router.use(`/proxy`, proxyRouter)

export default router
