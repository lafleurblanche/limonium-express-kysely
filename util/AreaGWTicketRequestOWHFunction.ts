/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { AreaGWHalfOnewayTicketRequest } from "@/db/model";

export const getAreaGWTicketRequestOWH = async (): Promise<AreaGWHalfOnewayTicketRequest[]> => {
  const argwTicketReqOWH = await riseDb
    .selectFrom('areagw_half_oneway_ticket_req')
    .selectAll()
    .execute()
  return argwTicketReqOWH;
}

export const getAreaGWTicketRequestOWHByRequestNumber = async (requestNum: string): Promise<Either<string, AreaGWHalfOnewayTicketRequest>> => {
  const argwTicketReqOWHByRequestNum = await riseDb
    .selectFrom('areagw_half_oneway_ticket_req')
    .selectAll()
    .where('areagw_half_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (argwTicketReqOWHByRequestNum === undefined) return left("request data dosen't exist.")
  return right(argwTicketReqOWHByRequestNum);
}
