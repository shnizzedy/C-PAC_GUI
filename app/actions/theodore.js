export const THEODORE_INIT = 'THEODORE_INIT'
export const THEODORE_INIT_DONE = 'THEODORE_INIT_DONE'

export const THEODORE_SCHEDULER_CALL = 'THEODORE_SCHEDULER_CALL'

export const THEODORE_SCHEDULER_POLLING = 'THEODORE_SCHEDULER_POLLING'
export const THEODORE_SCHEDULER_POLLING_CANCEL = 'THEODORE_SCHEDULER_POLLING_CANCEL'

export const THEODORE_SCHEDULER_CONNECT = 'THEODORE_SCHEDULER_CONNECT'
export const THEODORE_SCHEDULER_CONNECT_CANCEL = 'THEODORE_SCHEDULER_CONNECT_CANCEL'
export const THEODORE_SCHEDULER_CONNECT_MESSAGE = 'THEODORE_SCHEDULER_CONNECT_MESSAGE'
export const THEODORE_SCHEDULER_CONNECT_SEND = 'THEODORE_SCHEDULER_CONNECT_SEND'
export const THEODORE_SCHEDULER_CONNECT_SEND_CALLBACK = 'THEODORE_SCHEDULER_CONNECT_SEND_CALLBACK'

export const THEODORE_SCHEDULER_DETECT = 'THEODORE_SCHEDULER_DETECT'
export const THEODORE_SCHEDULER_DETECT_WAIT = 'THEODORE_SCHEDULER_DETECT_WAIT'
export const THEODORE_SCHEDULER_DETECT_SUCCESS = 'THEODORE_SCHEDULER_DETECT_SUCCESS'
export const THEODORE_SCHEDULER_DETECT_FAIL = 'THEODORE_SCHEDULER_DETECT_FAIL'

export const THEODORE_SCHEDULER_ONLINE = 'THEODORE_SCHEDULER_ONLINE'
export const THEODORE_SCHEDULER_OFFLINE = 'THEODORE_SCHEDULER_OFFLINE'

export function init() {
  return {
    type: THEODORE_INIT,
  }
}

export function detect(scheduler) {
  return {
    type: THEODORE_SCHEDULER_DETECT,
    scheduler,
  }
}

export function polling(scheduler) {
  return {
    type: THEODORE_SCHEDULER_POLLING,
    scheduler,
  }
}

export function watch(scheduler) {
  return {
    type: THEODORE_SCHEDULER_CONNECT,
    scheduler,
  }
}

export function watchCancel(scheduler) {
  return {
    type: THEODORE_SCHEDULER_CONNECT_CANCEL,
    scheduler,
  }
}

export function online(scheduler) {
  return {
    type: THEODORE_SCHEDULER_ONLINE,
    scheduler
  }
}

export function offline(scheduler) {
  return {
    type: THEODORE_SCHEDULER_OFFLINE,
    scheduler
  }
}