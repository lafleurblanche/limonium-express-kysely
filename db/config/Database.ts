import {
  AreaGWAdultOnewayTicketRequest,
  AreaGWAdultRoundTripTicketRequest,
  AreaGWHalfOnewayTicketRequest,
  EnjuRWAdultOnewayTicketRequest,
  EnjuRWFXAdultOnewayTicketRequest,
  EnjuRWFXAdultRoundTripTicketRequest,
  EnjuRWFXHalfOnewayTicketRequest,
  EnjuRWFXHalfRoundTripTicketRequest
} from "@/db/model";

export interface Database {
  areagw_adult_oneway_ticket_req: AreaGWAdultOnewayTicketRequest
  areagw_adult_roundtrip_ticket_req: AreaGWAdultRoundTripTicketRequest
  areagw_half_oneway_ticket_req: AreaGWHalfOnewayTicketRequest
  enjurw_adult_oneway_ticket_req: EnjuRWAdultOnewayTicketRequest
  enjurw_fx_adult_oneway_ticket_req: EnjuRWFXAdultOnewayTicketRequest
  enjurw_fx_adult_roundtrip_ticket_req: EnjuRWFXAdultRoundTripTicketRequest
  enjurw_fx_half_oneway_ticket_req: EnjuRWFXHalfOnewayTicketRequest
  enjurw_fx_half_roundtrip_ticket_req: EnjuRWFXHalfRoundTripTicketRequest
}
