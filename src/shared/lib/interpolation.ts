export const interpolation = (template: string, params: Record<string, string>) => {
  return template.replace(/\{\{\s*(\w+)\s*}}/g, (_, key) => {
    return params[key] ?? ''
  })
}
