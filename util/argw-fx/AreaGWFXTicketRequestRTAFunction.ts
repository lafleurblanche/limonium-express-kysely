/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { AreaGWFXAdultRoundTripTicketRequest } from "@/db/model";

export const getAreaGWFXTicketRequestRTA = async (): Promise<AreaGWFXAdultRoundTripTicketRequest[]> => {
  const argwFXTicketReqRTA = await riseDb
    .selectFrom('areagw_fx_adult_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return argwFXTicketReqRTA;
}

export const getAreaGWFXTicketRequestRTAByRequestNumber = async (requestNum: string): Promise<Either<string, AreaGWFXAdultRoundTripTicketRequest>> => {
  const argwFXTicketReqRTAByRequestNum = await riseDb
    .selectFrom('areagw_fx_adult_roundtrip_ticket_req')
    .selectAll()
    .where('areagw_fx_adult_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (argwFXTicketReqRTAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(argwFXTicketReqRTAByRequestNum);
}
