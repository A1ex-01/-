export function stringMapFn(fnName: string, data?: any) {
  if (data) {
    eval(fnName + "(data)")
  } else {
    eval(fnName + "()")
  }
}
