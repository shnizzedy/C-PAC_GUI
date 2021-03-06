export const PIPELINE_NAME_UPDATE = 'PIPELINE_NAME_UPDATE'
export const PIPELINE_NAME_UPDATE_DONE = 'PIPELINE_NAME_UPDATE_DONE'

export function pipelineNameUpdate(pipeline, name) {
  return {
    type: PIPELINE_NAME_UPDATE,
    pipeline, name
  }
}

export const PIPELINE_VERSION_DIRTY_UPDATE = 'PIPELINE_VERSION_DIRTY_UPDATE'
export const PIPELINE_VERSION_DIRTY_UPDATE_DONE = 'PIPELINE_VERSION_DIRTY_UPDATE_DONE'

export function pipelineVersionDirtyUpdate(pipeline, configuration) {
  return {
    type: PIPELINE_VERSION_DIRTY_UPDATE,
    pipeline, configuration
  }
}

export const PIPELINE_VERSION_DIRTY_SAVE = 'PIPELINE_VERSION_DIRTY_SAVE'
export const PIPELINE_VERSION_DIRTY_SAVE_DONE = 'PIPELINE_VERSION_DIRTY_SAVE_DONE'

export function pipelineVersionDirtySave(pipeline) {
  return {
    type: PIPELINE_VERSION_DIRTY_SAVE,
    pipeline
  }
}

export const PIPELINE_VERSION_DIRTY_REVERT = 'PIPELINE_VERSION_DIRTY_REVERT'
export const PIPELINE_VERSION_DIRTY_REVERT_DONE = 'PIPELINE_VERSION_DIRTY_REVERT_DONE'

export function pipelineVersionDirtyRevert(pipeline) {
  return {
    type: PIPELINE_VERSION_DIRTY_REVERT,
    pipeline
  }
}


export const PIPELINE_DUPLICATE = 'PIPELINE_DUPLICATE'
export const PIPELINE_DUPLICATE_DONE = 'PIPELINE_DUPLICATE_DONE'

export function pipelineDuplicate(pipeline) {
  if (!pipeline) {
    pipeline = 'default'
  }
  return {
    type: PIPELINE_DUPLICATE,
    pipeline
  }
}

export const PIPELINE_IMPORT = 'PIPELINE_IMPORT'
export const PIPELINE_IMPORT_DONE = 'PIPELINE_IMPORT_DONE'

export function pipelineImport(content) {
  return {
    type: PIPELINE_IMPORT,
    content
  }
}

export const PIPELINE_DOWNLOAD = 'PIPELINE_DOWNLOAD'

export function pipelineDownload(pipeline) {
  if (!pipeline) {
    pipeline = 'default'
  }
  return {
    type: PIPELINE_DOWNLOAD,
    pipeline
  }
}


export const PIPELINE_DELETE = 'PIPELINE_DELETE'
export const PIPELINE_DELETE_DONE = 'PIPELINE_DELETE_DONE'

export function pipelineDelete(pipeline) {
  return {
    type: PIPELINE_DELETE,
    pipeline
  }
}
