/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { AreaGWFXHalfRoundTripTicketRequest } from "@/db/model";

export const getAreaGWFXTicketRequestRTH = async (): Promise<AreaGWFXHalfRoundTripTicketRequest[]> => {
  const argwFXTicketReqRTH = await riseDb
    .selectFrom('areagw_fx_half_roundtrip_ticket_req')
    .selectAll()
    .execute()
  return argwFXTicketReqRTH;
}

export const getAreaGWFXTicketRequestRTHByRequestNumber = async (requestNum: string): Promise<Either<string, AreaGWFXHalfRoundTripTicketRequest>> => {
  const argwFXTicketReqRTHByRequestNum = await riseDb
    .selectFrom('areagw_fx_half_roundtrip_ticket_req')
    .selectAll()
    .where('areagw_fx_half_roundtrip_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (argwFXTicketReqRTHByRequestNum === undefined) return left("request data dosen't exist.")
  return right(argwFXTicketReqRTHByRequestNum);
}
