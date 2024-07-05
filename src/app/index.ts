export interface Location {
  robot_id: string;
  latitude: number;
  longitude: number;
  timestamp: string;
}

export interface RobotStatus {
  robot_id: string;
  timestamp: string;
  motor_values: number[];
  ctr_bat_soc: number;
}
