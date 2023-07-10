/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { AreaGWFXAdultOnewayTicketRequest } from "@/db/model";

export const getAreaGWFXTicketRequestOWA = async (): Promise<AreaGWFXAdultOnewayTicketRequest[]> => {
  const argwFXTicketReqOWA = await riseDb
    .selectFrom('areagw_fx_adult_oneway_ticket_req')
    .selectAll()
    .execute()
  return argwFXTicketReqOWA;
}

export const getAreaGWFXTicketRequestOWAByRequestNumber = async (requestNum: string): Promise<Either<string, AreaGWFXAdultOnewayTicketRequest>> => {
  const argwFXTicketReqOWAByRequestNum = await riseDb
    .selectFrom('areagw_fx_adult_oneway_ticket_req')
    .selectAll()
    .where('areagw_fx_adult_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (argwFXTicketReqOWAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(argwFXTicketReqOWAByRequestNum);
}
