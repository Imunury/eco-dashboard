
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Ecobot_statusScalarFieldEnum = {
  timestamp: 'timestamp',
  latitude: 'latitude',
  longitude: 'longitude',
  depth_data: 'depth_data',
  velocity: 'velocity',
  current_state: 'current_state',
  plc_status: 'plc_status',
  pump_values: 'pump_values',
  ctr_pv_v: 'ctr_pv_v',
  ctr_pv_c: 'ctr_pv_c',
  ctr_bat_temp: 'ctr_bat_temp',
  ctr_device_temp: 'ctr_device_temp',
  ctr_bat_soc: 'ctr_bat_soc',
  ctr_bat_max_v_today: 'ctr_bat_max_v_today',
  ctr_bat_min_v_today: 'ctr_bat_min_v_today',
  ctr_gen_energy_today: 'ctr_gen_energy_today',
  ctr_gen_energy_month: 'ctr_gen_energy_month',
  ctr_gen_energy_year: 'ctr_gen_energy_year',
  ctr_gen_energy_total: 'ctr_gen_energy_total',
  ctr_bat_v: 'ctr_bat_v',
  ctr_bat_c: 'ctr_bat_c',
  ctr_device_status: 'ctr_device_status',
  ctr_bat_status: 'ctr_bat_status',
  ctr_bat_temp_status: 'ctr_bat_temp_status',
  ctr_solar_status: 'ctr_solar_status',
  ctr_charging_status: 'ctr_charging_status',
  robot_id: 'robot_id',
  region_id: 'region_id',
  pump_status: 'pump_status'
};

exports.Prisma.Ecobot_status_tempScalarFieldEnum = {
  timestamp: 'timestamp',
  latitude: 'latitude',
  longitude: 'longitude',
  yaw: 'yaw',
  current_angular_vel: 'current_angular_vel',
  bearing: 'bearing',
  distance: 'distance',
  course_goal_distance_threshold: 'course_goal_distance_threshold',
  holding_goal_distance_threshold: 'holding_goal_distance_threshold',
  course_min_velocity: 'course_min_velocity',
  holding_min_velocity: 'holding_min_velocity',
  course_min_ang_velocity: 'course_min_ang_velocity',
  holding_min_ang_velocity: 'holding_min_ang_velocity',
  bearing_diff: 'bearing_diff',
  depth_data: 'depth_data',
  velocity: 'velocity',
  velocity_direction: 'velocity_direction',
  current_state: 'current_state',
  current_course_state: 'current_course_state',
  plc_status: 'plc_status',
  motor_values: 'motor_values',
  pump_values: 'pump_values',
  ctr_pv_v: 'ctr_pv_v',
  ctr_pv_c: 'ctr_pv_c',
  ctr_bat_temp: 'ctr_bat_temp',
  ctr_device_temp: 'ctr_device_temp',
  ctr_bat_soc: 'ctr_bat_soc',
  ctr_bat_max_v_today: 'ctr_bat_max_v_today',
  ctr_bat_min_v_today: 'ctr_bat_min_v_today',
  ctr_gen_energy_today: 'ctr_gen_energy_today',
  ctr_gen_energy_month: 'ctr_gen_energy_month',
  ctr_gen_energy_year: 'ctr_gen_energy_year',
  ctr_gen_energy_total: 'ctr_gen_energy_total',
  ctr_bat_v: 'ctr_bat_v',
  ctr_bat_c: 'ctr_bat_c',
  ctr_device_status: 'ctr_device_status',
  ctr_bat_status: 'ctr_bat_status',
  ctr_bat_temp_status: 'ctr_bat_temp_status',
  ctr_solar_status: 'ctr_solar_status',
  ctr_charging_status: 'ctr_charging_status',
  other_values: 'other_values',
  current_speeds: 'current_speeds',
  robot_id: 'robot_id',
  region_id: 'region_id',
  schedule_status: 'schedule_status',
  pump_status: 'pump_status',
  mtr_schedule_status: 'mtr_schedule_status',
  register_values: 'register_values',
  sample_depth: 'sample_depth',
  sub_register_values: 'sub_register_values',
  ngrok_url: 'ngrok_url'
};

exports.Prisma.Ecobot_ts_infoScalarFieldEnum = {
  timestamp: 'timestamp',
  latitude: 'latitude',
  longitude: 'longitude',
  plc_status: 'plc_status',
  ctr_pv_v: 'ctr_pv_v',
  ctr_pv_c: 'ctr_pv_c',
  ctr_bat_soc: 'ctr_bat_soc',
  ctr_bat_max_v_today: 'ctr_bat_max_v_today',
  ctr_bat_min_v_today: 'ctr_bat_min_v_today',
  ctr_gen_energy_today: 'ctr_gen_energy_today',
  ctr_gen_energy_month: 'ctr_gen_energy_month',
  ctr_gen_energy_year: 'ctr_gen_energy_year',
  ctr_gen_energy_total: 'ctr_gen_energy_total',
  ctr_bat_v: 'ctr_bat_v',
  ctr_bat_c: 'ctr_bat_c',
  ctr_device_status: 'ctr_device_status',
  ctr_bat_status: 'ctr_bat_status',
  ctr_bat_temp_status: 'ctr_bat_temp_status',
  ctr_solar_status: 'ctr_solar_status',
  ctr_charging_status: 'ctr_charging_status',
  robot_id: 'robot_id',
  region_id: 'region_id'
};

exports.Prisma.Ecobot_ts_info_tempScalarFieldEnum = {
  timestamp: 'timestamp',
  latitude: 'latitude',
  longitude: 'longitude',
  plc_status: 'plc_status',
  ctr_pv_v: 'ctr_pv_v',
  ctr_pv_c: 'ctr_pv_c',
  ctr_bat_soc: 'ctr_bat_soc',
  ctr_bat_max_v_today: 'ctr_bat_max_v_today',
  ctr_bat_min_v_today: 'ctr_bat_min_v_today',
  ctr_gen_energy_today: 'ctr_gen_energy_today',
  ctr_gen_energy_month: 'ctr_gen_energy_month',
  ctr_gen_energy_year: 'ctr_gen_energy_year',
  ctr_gen_energy_total: 'ctr_gen_energy_total',
  ctr_bat_v: 'ctr_bat_v',
  ctr_bat_c: 'ctr_bat_c',
  ctr_device_status: 'ctr_device_status',
  ctr_bat_status: 'ctr_bat_status',
  ctr_bat_temp_status: 'ctr_bat_temp_status',
  ctr_solar_status: 'ctr_solar_status',
  ctr_charging_status: 'ctr_charging_status',
  robot_id: 'robot_id',
  region_id: 'region_id'
};

exports.Prisma.Odn_water_qualityScalarFieldEnum = {
  timestamp: 'timestamp',
  temp_deg_c: 'temp_deg_c',
  ph_units: 'ph_units',
  cod: 'cod',
  hdo_mg_l: 'hdo_mg_l',
  chl_ug_l: 'chl_ug_l',
  bg_ppb: 'bg_ppb',
  salinity_psu: 'salinity_psu',
  latitude: 'latitude',
  longitude: 'longitude',
  robot_id: 'robot_id',
  region_id: 'region_id'
};

exports.Prisma.RegionsScalarFieldEnum = {
  region_id: 'region_id',
  region_name: 'region_name',
  robot_id: 'robot_id',
  latitude: 'latitude',
  longitude: 'longitude',
  description: 'description',
  region_year: 'region_year',
  region_name_kwater: 'region_name_kwater'
};

exports.Prisma.Spatial_ref_sysScalarFieldEnum = {
  srid: 'srid',
  auth_name: 'auth_name',
  auth_srid: 'auth_srid',
  srtext: 'srtext',
  proj4text: 'proj4text'
};

exports.Prisma.Water_qualityScalarFieldEnum = {
  timestamp: 'timestamp',
  temp_deg_c: 'temp_deg_c',
  ph_units: 'ph_units',
  depth_m: 'depth_m',
  spcond_us_cm: 'spcond_us_cm',
  turb_ntu: 'turb_ntu',
  hdo_sat: 'hdo_sat',
  hdo_mg_l: 'hdo_mg_l',
  chl_ug_l: 'chl_ug_l',
  bg_ppb: 'bg_ppb',
  ph_mv: 'ph_mv',
  salinity_psu: 'salinity_psu',
  cablepower_v: 'cablepower_v',
  latitude: 'latitude',
  longitude: 'longitude',
  robot_id: 'robot_id',
  region_id: 'region_id',
  sample_depth: 'sample_depth'
};

exports.Prisma.Water_quality_tempScalarFieldEnum = {
  timestamp: 'timestamp',
  temp_deg_c: 'temp_deg_c',
  ph_units: 'ph_units',
  depth_m: 'depth_m',
  spcond_us_cm: 'spcond_us_cm',
  turb_ntu: 'turb_ntu',
  hdo_sat: 'hdo_sat',
  hdo_mg_l: 'hdo_mg_l',
  chl_ug_l: 'chl_ug_l',
  bg_ppb: 'bg_ppb',
  ph_mv: 'ph_mv',
  salinity_psu: 'salinity_psu',
  cablepower_v: 'cablepower_v',
  latitude: 'latitude',
  longitude: 'longitude',
  robot_id: 'robot_id',
  region_id: 'region_id',
  sample_depth: 'sample_depth'
};

exports.Prisma.Cfs_statusScalarFieldEnum = {
  timestamp: 'timestamp',
  remote_sts: 'remote_sts',
  high_pump_sts: 'high_pump_sts',
  sub_pump_sts: 'sub_pump_sts',
  red_motor_sts: 'red_motor_sts',
  sol_relay_sts: 'sol_relay_sts',
  high_pump_alm: 'high_pump_alm',
  sub_pump_alm: 'sub_pump_alm',
  red_motor_alm: 'red_motor_alm',
  eocr_alm_1: 'eocr_alm_1',
  eocr_alm_2: 'eocr_alm_2',
  eocr_alm_3: 'eocr_alm_3',
  emg_alm: 'emg_alm',
  sec_clk: 'sec_clk',
  high_pump_freq: 'high_pump_freq',
  sub_pump_freq: 'sub_pump_freq',
  red_motor_freq: 'red_motor_freq',
  current_pressure: 'current_pressure',
  current_flow: 'current_flow',
  robot_id: 'robot_id',
  region_id: 'region_id'
};

exports.Prisma.Cfs_status_tempScalarFieldEnum = {
  timestamp: 'timestamp',
  remote_sts: 'remote_sts',
  high_pump_sts: 'high_pump_sts',
  sub_pump_sts: 'sub_pump_sts',
  red_motor_sts: 'red_motor_sts',
  sol_relay_sts: 'sol_relay_sts',
  high_pump_alm: 'high_pump_alm',
  sub_pump_alm: 'sub_pump_alm',
  red_motor_alm: 'red_motor_alm',
  eocr_alm_1: 'eocr_alm_1',
  eocr_alm_2: 'eocr_alm_2',
  eocr_alm_3: 'eocr_alm_3',
  emg_alm: 'emg_alm',
  sec_clk: 'sec_clk',
  high_pump_freq: 'high_pump_freq',
  sub_pump_freq: 'sub_pump_freq',
  red_motor_freq: 'red_motor_freq',
  current_pressure: 'current_pressure',
  current_flow: 'current_flow',
  robot_id: 'robot_id',
  region_id: 'region_id'
};

exports.Prisma.Weather_dataScalarFieldEnum = {
  TM: 'TM',
  STN: 'STN',
  WD: 'WD',
  WS: 'WS',
  GST_WD: 'GST_WD',
  GST_WS: 'GST_WS',
  GST_TM: 'GST_TM',
  PA: 'PA',
  PS: 'PS',
  PT: 'PT',
  PR: 'PR',
  TA: 'TA',
  TD: 'TD',
  HM: 'HM',
  PV: 'PV',
  RN: 'RN',
  RN_DAY: 'RN_DAY',
  RN_JUN: 'RN_JUN',
  RN_INT: 'RN_INT',
  SD_HR3: 'SD_HR3',
  SD_DAY: 'SD_DAY',
  SD_TOT: 'SD_TOT',
  WC: 'WC',
  WP: 'WP',
  WW: 'WW',
  CA_TOT: 'CA_TOT',
  CA_MID: 'CA_MID',
  CH_MIN: 'CH_MIN',
  CT: 'CT',
  CT_TOP: 'CT_TOP',
  CT_MID: 'CT_MID',
  CT_LOW: 'CT_LOW',
  VS: 'VS',
  SS: 'SS',
  SI: 'SI',
  ST_GD: 'ST_GD',
  TS: 'TS',
  TE_005: 'TE_005',
  TE_01: 'TE_01',
  TE_02: 'TE_02',
  TE_03: 'TE_03',
  ST_SEA: 'ST_SEA',
  WH: 'WH',
  BF: 'BF',
  IR: 'IR',
  IX: 'IX'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  ecobot_status: 'ecobot_status',
  ecobot_status_temp: 'ecobot_status_temp',
  ecobot_ts_info: 'ecobot_ts_info',
  ecobot_ts_info_temp: 'ecobot_ts_info_temp',
  odn_water_quality: 'odn_water_quality',
  regions: 'regions',
  spatial_ref_sys: 'spatial_ref_sys',
  water_quality: 'water_quality',
  water_quality_temp: 'water_quality_temp',
  cfs_status: 'cfs_status',
  cfs_status_temp: 'cfs_status_temp',
  weather_data: 'weather_data'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
