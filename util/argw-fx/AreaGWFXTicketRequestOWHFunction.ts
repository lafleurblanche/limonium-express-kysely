/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { AreaGWFXHalfOnewayTicketRequest } from "@/db/model";

export const getAreaGWFXTicketRequestOWH = async (): Promise<AreaGWFXHalfOnewayTicketRequest[]> => {
  const argwFXTicketReqOWH = await riseDb
    .selectFrom('areagw_fx_half_oneway_ticket_req')
    .selectAll()
    .execute()
  return argwFXTicketReqOWH;
}

export const getAreaGWFXTicketRequestOWHByRequestNumber = async (requestNum: string): Promise<Either<string, AreaGWFXHalfOnewayTicketRequest>> => {
  const argwFXTicketReqOWHByRequestNum = await riseDb
    .selectFrom('areagw_fx_half_oneway_ticket_req')
    .selectAll()
    .where('areagw_fx_half_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (argwFXTicketReqOWHByRequestNum === undefined) return left("request data dosen't exist.")
  return right(argwFXTicketReqOWHByRequestNum);
}
