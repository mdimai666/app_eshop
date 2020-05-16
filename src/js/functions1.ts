const jsonStringifySafe = require("json-stringify-safe")

export function clone(obj: Object) {
  return JSON.parse(jsonStringifySafe(obj))
}

export function array_move(arr: any[], old_index: number, new_index: number) {

  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr // for testing
};

export function dynamicSort(property: string) {
  var sortOrder = 1
  if (property[0] === "-") {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a: any, b: any) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result * sortOrder
  }
}

export function downloadObjectAsJson(exportObj: object, exportName: string) {
  var json = JSON.stringify(exportObj)
  if (exportName.indexOf('json') === -1)
    exportName += '.json'
  download(json, exportName, 'text/json')
}

export function downloadStringAsXML(string: string, exportName: string) {
  var json = (string)
  if (exportName.indexOf('xml') === -1)
    exportName += '.xml'
  download(json, exportName, 'text/xml')
}

export function download(text: string, name: string, type: string) {
  var file = new Blob([text], {
    type: type
  })
  var isIE = /*@cc_on!@*/ false || !!(document as any).documentMode
  if (isIE) {
    window.navigator.msSaveOrOpenBlob(file, name)
  } else {
    var a = document.createElement('a')
    a.href = URL.createObjectURL(file)
    a.download = name
    a.click()
  }
}

export function findGetParameter(parameterName: string) {
  var result = null,
    tmp = []
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=")
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1])
    })
  return result
}

export function onlyUnique(value: any, index: number, self: any) {
  return self.indexOf(value) === index
}

export function randomdColor() {
  var hex = '0123456789ABCDEF'.split(''),
    color = '#',
    i
  for (i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)]
  }
  return color
}

export function removeNonWords(st: string) {
  var s = st.replace(/[^\wа-я]+/ig, '')
  return s
}

export function removeNonWords2(st: string) {
  var s = st.replace(/[^\wа-я\-\_\.]+/ig, '')
  return s
}

export function forwardSlash(str: string) {
  return (str || '').replace(/\\/g, '/')
}

/**
 * return numeric object array
 * @example
 * {0: value1, 1: value 2}
 */
export function toObjectArray(arr: any[]) {
  var rv: any = {}
  for (var i = 0; i < arr.length; ++i)
    rv[i] = arr[i]
  return rv
}

export function trimSlash(str: string) {
  return (str || '').replace(/^\/|\/$/g, "")
};

export function urlJoin() {
  var p = []
  for (var i = 0; i < arguments.length; i++) {
    var path = arguments[i]
    path = trimSlash(forwardSlash(path))
    p.push(path)
  }

  return trimSlash(p.join('/'));;
}

export function fullUrl(...params: string[]) {
  let h = urlJoin.apply(null, params as any)
  if (h.indexOf('http') < 0) (h as any) = "//" + h
  return h
}

export interface IKeyVal {
  key: string,
  val: string | number | boolean
}

export function ObjectMapAsKeyVal(obj: any): IKeyVal[] | undefined {
  if (obj) {
    let list: IKeyVal[] = []
    for (let key of Object.keys(obj)) {
      list.push({
        key: key,
        val: obj[key]
      })
    }
    return list
  } else {
    return
  }
}

export function ObjectToQueryString(param: any): string {
  let ee = ObjectMapAsKeyVal(param)
  if (param && ee) {

    let st = ''

    for (let e of ee) {
      if (typeof e.val !== 'undefined') {
        st += `&${e.key}=${e.val}`
      }
    }

    return st
  } else {
    return ''
  }
}

export function stripHtml(html: string): string {
  const modeBrowser = true

  if (modeBrowser) {
    var tmp = document.createElement("DIV")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  } else {
    return html.replace(/<[^>]*>?/gm, '')

  }
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// export function all_childs(arr: any[], id: number | number[], prop_parent_id: string, __maxDepth = 15) {
//   if (__maxDepth < 1) return []
//   prop_parent_id = prop_parent_id || 'parent_id'
//   if (id.length !== 0 && !id.length) id = [id]

//   let childs = arr.filter(s => id.includes(s.parent_id))
//   let ids = childs.map(s => s.id)

//   if (childs.length > 0)
//     return childs.concat(all_childs(arr, ids, prop_parent_id, --__maxDepth))
//   else
//     return []
// }

let date_map_0 = {
  'Jan': 'Янв',
  'Feb': 'Фев',
  'Mar': 'Мар',
  'Apr': 'Апр',
  'May': 'Май',
  'Jun': 'Июн',
  'Jul': 'Июл',
  'Aug': 'Авг',
  'Sep': 'Сен',
  'Oct': 'Окт',
  'Nov': 'Ноя',
  'Dec': 'Дек',
  'January': 'Январь',
  'February': 'Февраль',
  'March': 'Март',
  'April': 'Апрель',
  // 'May':'Май',
  'June': 'Июнь',
  'July': 'Июль',
  'August': 'Август',
  'September': 'Сентябрь',
  'October': 'Октябрь',
  'November': 'Ноябрь',
  'December': 'Декабрь',
}

let date_map = {
  'Jan': 'Янв',
  'Feb': 'Фев',
  'Mar': 'Мар',
  'Apr': 'Апр',
  'May': 'Май',
  'Jun': 'Июн',
  'Jul': 'Июл',
  'Aug': 'Авг',
  'Sep': 'Сен',
  'Oct': 'Окт',
  'Nov': 'Ноя',
  'Dec': 'Дек',
  'January': 'Января',
  'February': 'Февраля',
  'March': 'Марта',
  'April': 'Апреля',
  // 'May':'Мая',
  'June': 'Июня',
  'July': 'Июля',
  'August': 'Августа',
  'September': 'Сентября',
  'October': 'Октября',
  'November': 'Ноября',
  'December': 'Декабря',
}

/**
 * Replace month name string
 * @param {String} val String contain month name in english
 * @returns {String}
 */
export function translate_monthName(val: string) {
  return (date_map as any)[val] || val
}

export function translate_monthNamePrimary(val: string) {
  return (date_map_0 as any)[val] || val
}

export function isString(val: any) {
  return typeof val === 'string' || val instanceof String
}

export interface ILimitWordsParams {
  ending: string // что дописать после обрыва
  trim: boolean   // обрезать пробелы в начале/конце?
  words: boolean   // уважать ли целостность слов? 
}

export function LimitWords(_text: string, limit: number, userParams?: ILimitWordsParams): string {

  if (typeof _text === 'undefined') return ''

  var text = _text
      , options = {
          ending: '...'  // что дописать после обрыва
          , trim: true     // обрезать пробелы в начале/конце?
          , words: true    // уважать ли целостность слов? 
      }
      , prop
      , lastSpace
      , processed = false


  //  проверить limit, без него целого положительного никак
  if (limit !== parseInt(limit as any) || limit <= 0) return _text

  // применить userParams
  if (typeof userParams == 'object') {
      for (prop in userParams) {
          if (userParams.hasOwnProperty.call(userParams, prop)) {
              (options as any)[prop] = (userParams as any)[prop]
          }
      }
  }

  // убрать пробелы в начале /конце
  if (options.trim) text = text.trim()

  if (text.length <= limit) return text    // по длине вписываемся и так

  text = text.slice(0, limit) // тупо отрезать по лимиту
  lastSpace = text.lastIndexOf(" ")
  if (options.words && lastSpace > 0) {  // урезать ещё до границы целого слова
      text = text.substr(0, lastSpace)
  }
  return text + options.ending
}

export default {
  array_move,
  dynamicSort,
  downloadObjectAsJson,
  downloadStringAsXML,
  download,
  findGetParameter,
  onlyUnique,
  randomdColor,
  removeNonWords,
  removeNonWords2,
  forwardSlash,
  toObjectArray,
  trimSlash,
  urlJoin,
  fullUrl,
  // all_childs,
  translate_monthName,
  isString,
  ObjectMapAsKeyVal,
  ObjectToQueryString,
  stripHtml,
  escapeHtml,
  limit: LimitWords
}
