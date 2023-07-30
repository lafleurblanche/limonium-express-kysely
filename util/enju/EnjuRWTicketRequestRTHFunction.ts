/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWHalfRoundTripTicketRequest } from "@/db/model";

export const getEnjuRWTicketRequesRTH = async (): Promise<EnjuRWHalfRoundTripTicketRequest[]> => {
  const enjuTicketReqRTH = await riseDb
    .selectFrom('enjurw_half_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return enjuTicketReqRTH;
}

export const getEnjuRWTicketRequestRTHByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWHalfRoundTripTicketRequest>> => {
  const enjuTicketReqRTHByRequestNum = await riseDb
    .selectFrom('enjurw_half_roundtrip_ticket_req')
    .selectAll()
    .where('enjurw_half_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuTicketReqRTHByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuTicketReqRTHByRequestNum);
}
