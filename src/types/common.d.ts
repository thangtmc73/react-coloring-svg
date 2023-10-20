declare module "*.svg" {
  const content: string
  export default content
}

type MapColor = Partial<Record<string, string>>
