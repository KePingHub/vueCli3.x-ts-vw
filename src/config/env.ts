let baseURL = ''
let routerMode = 'history'
let localBaseImgPath = ''

if (process.env.NODE_ENV == 'development') {
  baseURL = ''
  localBaseImgPath = ''
} else {
  baseURL = ''
  localBaseImgPath = ''
}

export {
  baseURL,
  routerMode,
  localBaseImgPath
}
