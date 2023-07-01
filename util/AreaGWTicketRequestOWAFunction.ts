/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { AreaGWAdultOnewayTicketRequest } from "@/db/model";

export const getAreaGWTicketRequestOWA = async (): Promise<AreaGWAdultOnewayTicketRequest[]> => {
  const argwTicketReqOWA = await riseDb
    .selectFrom('areagw_adult_oneway_ticket_req')
    .selectAll()
    .execute()
  return argwTicketReqOWA;
}

export const getAreaGWTicketRequestOWAByRequestNumber = async (requestNum: string): Promise<Either<string, AreaGWAdultOnewayTicketRequest>> => {
  const argwTicketReqOWAByRequestNum = await riseDb
    .selectFrom('areagw_adult_oneway_ticket_req')
    .selectAll()
    .where('areagw_adult_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (argwTicketReqOWAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(argwTicketReqOWAByRequestNum);
}
