/* fp-ts */
import {
  Either,
  left,
  right
} from "fp-ts/lib/Either";

/* db/config */
import { riseDb } from "@/db/config";

/* db/model */
import { EnjuRWAdultOnewayTicketRequest } from "@/db/model";

export const getEnjuRWTicketRequestOWA = async (): Promise<EnjuRWAdultOnewayTicketRequest[]> => {
  const enjuTicketReqOWA = await riseDb
    .selectFrom('enjurw_adult_oneway_ticket_req')
    .selectAll()
    .execute()
  return enjuTicketReqOWA;
}

export const getEnjuRWTicketRequestOWAByRequestNumber = async (requestNum: string): Promise<Either<string, EnjuRWAdultOnewayTicketRequest>> => {
  const enjuTicketReqOWAByRequestNum = await riseDb
    .selectFrom('enjurw_adult_oneway_ticket_req')
    .selectAll()
    .where('enjurw_adult_oneway_ticket_req.req_no', '=', requestNum)
    .executeTakeFirst()
  if (enjuTicketReqOWAByRequestNum === undefined) return left("request data dosen't exist.")
  return right(enjuTicketReqOWAByRequestNum);
}
