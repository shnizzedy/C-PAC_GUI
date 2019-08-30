export const DATASET_CONFIG_LOAD = 'DATASET_CONFIG_LOAD'
export const DATASET_CONFIG_LOAD_SUCCESS = 'DATASET_CONFIG_LOAD_SUCCESS'
export const DATASET_CONFIG_LOAD_ERROR = 'DATASET_CONFIG_LOAD_ERROR'

export const DATASET_GENERATE_DATA_CONFIG = 'DATASET_GENERATE_DATA_CONFIG'
export const DATASET_GENERATE_DATA_CONFIG_SUCCESS = 'DATASET_GENERATE_DATA_CONFIG_SUCCESS'
export const DATASET_GENERATE_DATA_CONFIG_ERROR = 'DATASET_GENERATE_DATA_CONFIG_ERROR'

export const DATASET_GENERATE_DATA_CONFIG_SCHEDULED = 'DATASET_GENERATE_DATA_CONFIG_SCHEDULED'
export const DATASET_GENERATE_DATA_CONFIG_GENERATED = 'DATASET_GENERATE_DATA_CONFIG_GENERATED'
export const DATASET_GENERATE_DATA_CONFIG_FETCHED = 'DATASET_GENERATE_DATA_CONFIG_FETCHED'
export const DATASET_GENERATE_DATA_CONFIG_FINISHED = 'DATASET_GENERATE_DATA_CONFIG_FINISHED'

export function generateDataConfig({ dataset, dataSettings, version }) {
  return {
    type: DATASET_GENERATE_DATA_CONFIG,
    dataset, dataSettings, version
  }
}
