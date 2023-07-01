/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { AreaGWAdultRoundTripTicketRequest } from "@/db/model";

export const getAreaGWTicketRequestRTA = async (): Promise<AreaGWAdultRoundTripTicketRequest[]> => {
  const argwTicketReqRTA = await riseDb
    .selectFrom('areagw_adult_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return argwTicketReqRTA;
}

export const getAreaGWTicketRequestRTAByRequestNumber = async (requestNum: string): Promise<Either<string, AreaGWAdultRoundTripTicketRequest>> => {
  const argwTicketReqRTAByRequestNum = await riseDb
    .selectFrom('areagw_adult_roundtrip_ticket_req')
    .selectAll()
    .where('areagw_adult_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (argwTicketReqRTAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(argwTicketReqRTAByRequestNum);
}
