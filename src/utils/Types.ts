export namespace Types {

    export interface GetRacesData {
        status: number
        data: Data
        message: string
      }
      
      export interface Data {
        next_to_go_ids: string[]
        // I feel like this could be safer but I'm note sure
        race_summaries: {[k: Data["next_to_go_ids"][0]]: Summary};
      }

      export interface Summary {
        race_id: string
        race_name: string
        race_number: number
        meeting_id: string
        meeting_name: string
        category_id: string
        advertised_start: AdvertisedStart
        race_form: RaceForm
        venue_id: string
        venue_name: string
        venue_state: string
        venue_country: string
      }
      
      export interface AdvertisedStart {
        seconds: number
      }
      
      export interface RaceForm {
        distance: number
        distance_type: DistanceType
        distance_type_id: string
        track_condition: TrackCondition
        track_condition_id: string
        weather: Weather
        weather_id: string
        additional_data: string
        generated: number
        silk_base_url: string
      }
      
      export interface DistanceType {
        id: string
        name: string
        short_name: string
      }
      
      export interface TrackCondition {
        id: string
        name: string
        short_name: string
      }
      
      export interface Weather {
        id: string
        name: string
        short_name: string
        icon_uri: string
      }
      
}