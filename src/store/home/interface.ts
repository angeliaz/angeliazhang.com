export interface HomeContent {
  id: string,
  name: string,
  m1?: boolean
}

export interface State {
  count: number,
  message: string,
  test?: HomeContent[]
}
