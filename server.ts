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
  getAreaGWTicketRequestOWAByRequestNumber
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

app.listen(PORT, () => {
  console.log(`Started server on ${PORT}`);
});
