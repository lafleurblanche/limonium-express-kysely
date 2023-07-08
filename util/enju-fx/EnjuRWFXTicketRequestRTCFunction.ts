/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWFXChildRoundTripTicketRequest } from "@/db/model";

export const getEnjuRWFXTicketRequestRTC = async (): Promise<EnjuRWFXChildRoundTripTicketRequest[]> => {
  const enjuFXTicketReqRTC = await riseDb
    .selectFrom('enjurw_fx_child_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return enjuFXTicketReqRTC;
}

export const getEnjuRWFXTicketRequestRTCByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWFXChildRoundTripTicketRequest>> => {
  const enjuFXTicketReqRTCByRequestNum = await riseDb
    .selectFrom('enjurw_fx_child_roundtrip_ticket_req')
    .selectAll()
    .where('enjurw_fx_child_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuFXTicketReqRTCByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuFXTicketReqRTCByRequestNum);
}
