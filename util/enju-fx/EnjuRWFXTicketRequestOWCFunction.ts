/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWFXChildOnewayTicketRequest } from "@/db/model";

export const getEnjuRWFXTicketRequestOWC = async (): Promise<EnjuRWFXChildOnewayTicketRequest[]> => {
  const enjuFXTicketReqOWC = await riseDb
    .selectFrom('enjurw_fx_child_oneway_ticket_req')
    .selectAll()
    .execute()
  return enjuFXTicketReqOWC;
}

export const getEnjuRWFXTicketRequestOWCByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWFXChildOnewayTicketRequest>> => {
  const enjuFXTicketReqOWCByRequestNum = await riseDb
    .selectFrom('enjurw_fx_child_oneway_ticket_req')
    .selectAll()
    .where('enjurw_fx_child_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuFXTicketReqOWCByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuFXTicketReqOWCByRequestNum);
}
