/* cors */
import cors from 'cors';

/* express */
import express,{
  Application,
  Request,
  Response
} from 'express'

/* fp-ts */
import { isLeft } from 'fp-ts/lib/Either';

/* util */
import {
  getAreaGWTicketRequestOWA,
  getAreaGWTicketRequestOWAByRequestNumber,
  getAreaGWTicketRequestOWH,
  getAreaGWTicketRequestOWHByRequestNumber,
  getAreaGWTicketRequestRTA,
  getAreaGWTicketRequestRTAByRequestNumber
} from '@/util';

const app: Application = express();
const PORT = 34501;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!',
  })
})

app.get('/argw-req-owa', async (_req: Request, res: Response) => {
  const argwTicketReqOWAResult = await getAreaGWTicketRequestOWA()
  return res.status(200).send(argwTicketReqOWAResult)
});

app.get('/argw-req-owa/:requestNum', async (_req: Request, res: Response) => {
  const argwTicketReqOWAByReqNoResult = await getAreaGWTicketRequestOWAByRequestNumber(_req.params.requestNum)
  if(isLeft(argwTicketReqOWAByReqNoResult)) {
    return res.status(400).send(argwTicketReqOWAByReqNoResult.left)
  }
  return res.status(200).send(argwTicketReqOWAByReqNoResult.right)
});

app.get('/argw-req-owh', async (_req: Request, res: Response) => {
  const argwTicketReqOWHResult = await getAreaGWTicketRequestOWH()
  return res.status(200).send(argwTicketReqOWHResult)
});

app.get('/argw-req-owh/:requestNum', async (_req: Request, res: Response) => {
  const argwTicketReqOWHByReqNoResult = await getAreaGWTicketRequestOWHByRequestNumber(_req.params.requestNum)
  if(isLeft(argwTicketReqOWHByReqNoResult)) {
    return res.status(400).send(argwTicketReqOWHByReqNoResult.left)
  }
  return res.status(200).send(argwTicketReqOWHByReqNoResult.right)
});

app.get('/argw-req-rta', async (_req: Request, res: Response) => {
  const argwTicketReqRTAResult = await getAreaGWTicketRequestRTA()
  return res.status(200).send(argwTicketReqRTAResult)
});

app.get('/argw-req-rta/:requestNum', async (_req: Request, res: Response) => {
  const argwTicketReqRTAByReqNoResult = await getAreaGWTicketRequestRTAByRequestNumber(_req.params.requestNum)
  if(isLeft(argwTicketReqRTAByReqNoResult)) {
    return res.status(400).send(argwTicketReqRTAByReqNoResult.left)
  }
  return res.status(200).send(argwTicketReqRTAByReqNoResult.right)
});

app.listen(PORT, () => {
  console.log(`Started server on ${PORT}`);
});
