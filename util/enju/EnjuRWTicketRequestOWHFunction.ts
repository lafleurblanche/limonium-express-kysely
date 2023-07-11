/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWHalfOnewayTicketRequest } from "@/db/model";

export const getEnjuRWTicketRequestOWH = async (): Promise<EnjuRWHalfOnewayTicketRequest[]> => {
  const enjuTicketReqOWH = await riseDb
    .selectFrom('enjurw_half_oneway_ticket_req')
    .selectAll()
    .execute()
  return enjuTicketReqOWH;
}

export const getEnjuRWTicketRequestOWHByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWHalfOnewayTicketRequest>> => {
  const enjuTicketReqOWHByRequestNum = await riseDb
    .selectFrom('enjurw_half_oneway_ticket_req')
    .selectAll()
    .where('enjurw_half_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuTicketReqOWHByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuTicketReqOWHByRequestNum);
}
