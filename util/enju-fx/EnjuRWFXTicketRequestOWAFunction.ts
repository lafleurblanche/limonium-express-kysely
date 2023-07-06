/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWFXAdultOnewayTicketRequest } from "@/db/model";

export const getEnjuRWFXTicketRequestOWA = async (): Promise<EnjuRWFXAdultOnewayTicketRequest[]> => {
  const enjuFXTicketReqOWA = await riseDb
    .selectFrom('enjurw_fx_adult_oneway_ticket_req')
    .selectAll()
    .execute()
  return enjuFXTicketReqOWA;
}

export const getEnjuRWFXTicketRequestOWAByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWFXAdultOnewayTicketRequest>> => {
  const enjuFXTicketReqOWAByRequestNum = await riseDb
    .selectFrom('enjurw_fx_adult_oneway_ticket_req')
    .selectAll()
    .where('enjurw_fx_adult_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuFXTicketReqOWAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuFXTicketReqOWAByRequestNum);
}
