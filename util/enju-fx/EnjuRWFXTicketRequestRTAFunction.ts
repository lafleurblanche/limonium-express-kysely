/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWFXAdultRoundTripTicketRequest } from "@/db/model";

export const getEnjuRWFXTicketRequestRTA = async (): Promise<EnjuRWFXAdultRoundTripTicketRequest[]> => {
  const enjuFXTicketReqRTA = await riseDb
    .selectFrom('enjurw_fx_adult_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return enjuFXTicketReqRTA;
}

export const getEnjuRWFXTicketRequestRTAByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWFXAdultRoundTripTicketRequest>> => {
  const enjuFXTicketReqRTAByRequestNum = await riseDb
    .selectFrom('enjurw_fx_adult_roundtrip_ticket_req')
    .selectAll()
    .where('enjurw_fx_adult_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuFXTicketReqRTAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuFXTicketReqRTAByRequestNum);
}
