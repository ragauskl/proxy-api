import { Router, Request, Response } from 'express'
import request = require('request')
const router = Router({ mergeParams: true })

router.get('/', async (req: Request, res: Response) => {
  try {
    const options: any = {
      url: decodeURIComponent(req.query.url as string)
    }

    request(options)
      .pipe(res)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
})

export default router
