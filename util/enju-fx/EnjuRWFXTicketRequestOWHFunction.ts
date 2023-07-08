/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWFXHalfOnewayTicketRequest } from "@/db/model";

export const getEnjuRWFXTicketRequestOWH = async (): Promise<EnjuRWFXHalfOnewayTicketRequest[]> => {
  const enjuFXTicketReqOWH = await riseDb
    .selectFrom('enjurw_fx_half_oneway_ticket_req')
    .selectAll()
    .execute()
  return enjuFXTicketReqOWH;
}

export const getEnjuRWFXTicketRequestOWHByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWFXHalfOnewayTicketRequest>> => {
  const enjuFXTicketReqOWHByRequestNum = await riseDb
    .selectFrom('enjurw_fx_half_oneway_ticket_req')
    .selectAll()
    .where('enjurw_fx_half_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuFXTicketReqOWHByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuFXTicketReqOWHByRequestNum);
}
