/**
 * ## 発信番号登録情報
 * * 支線連絡系統
 * * 往復乗車券(半額運賃)
 * @author lafleurblanche
 */
export interface AreaGWHalfRoundTripTicketRequest {
  id: number
  req_no: string
  from_sta: string
  to_sta: string
  via_route: string
  adult_member: string
  half_member: string
  child_member: string
  date_of_use: string
  total_fare: string
  base_fare_adult: string
  base_fare_half: string
  base_fare_child: string
}
