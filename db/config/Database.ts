import {
  AreaGWAdultOnewayTicketRequest,
  AreaGWAdultRoundTripTicketRequest,
  AreaGWHalfOnewayTicketRequest,
  EnjuRWAdultOnewayTicketRequest
} from "@/db/model";

export interface Database {
  areagw_adult_oneway_ticket_req: AreaGWAdultOnewayTicketRequest
  areagw_adult_roundtrip_ticket_req: AreaGWAdultRoundTripTicketRequest
  areagw_half_oneway_ticket_req: AreaGWHalfOnewayTicketRequest
  enjurw_adult_oneway_ticket_req: EnjuRWAdultOnewayTicketRequest
}
