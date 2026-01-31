const basePath = process.env.NODE_ENV === 'production' ? '/AI4PM' : ''

export function getAssetPath(path: string): string {
  if (path.startsWith('http')) return path
  return `${basePath}${path}`
}
