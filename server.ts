/* cors */
import cors from 'cors';

/* express */
import express,{
  Application,
  Request,
  Response
} from 'express'

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

app.listen(PORT, () => {
  console.log(`Started server on ${PORT}`);
});
