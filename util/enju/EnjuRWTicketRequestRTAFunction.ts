/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWAdultRoundTripTicketRequest } from "@/db/model";

export const getEnjuRWTicketRequesRTA = async (): Promise<EnjuRWAdultRoundTripTicketRequest[]> => {
  const enjuTicketReqRTA = await riseDb
    .selectFrom('enjurw_adult_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return enjuTicketReqRTA;
}

export const getEnjuRWTicketRequestRTAByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWAdultRoundTripTicketRequest>> => {
  const enjuTicketReqRTAByRequestNum = await riseDb
    .selectFrom('enjurw_adult_roundtrip_ticket_req')
    .selectAll()
    .where('enjurw_adult_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuTicketReqRTAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuTicketReqRTAByRequestNum);
}
