/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWFXHalfRoundTripTicketRequest } from "@/db/model";

export const getEnjuRWFXTicketRequestRTH = async (): Promise<EnjuRWFXHalfRoundTripTicketRequest[]> => {
  const enjuFXTicketReqRTH = await riseDb
    .selectFrom('enjurw_fx_half_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return enjuFXTicketReqRTH;
}

export const getEnjuRWFXTicketRequestRTHByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWFXHalfRoundTripTicketRequest>> => {
  const enjuFXTicketReqRTHByRequestNum = await riseDb
    .selectFrom('enjurw_fx_half_roundtrip_ticket_req')
    .selectAll()
    .where('enjurw_fx_half_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuFXTicketReqRTHByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuFXTicketReqRTHByRequestNum);
}
