// I find this an easier way to type curried functions.
type ProviderFn = (provider: string)
  => (url: string, flags: string[])
    => string[]

export type Provider = {
  [key: string]: ProviderFn
}

