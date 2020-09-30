import fs from 'fs'

// Simple functional utils so I don't need to pull in a big library to do this.
// https://tinyurl.com/y34evghg

// TODO: Add JUST and NOTHING.

const Nothing = x => ({})
const Just = x => ({})

// TODO: Delete me and use fp-ts instead
export const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

// TODO: Delete me and use fp-ts instead
export const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

// Still learning, forgive me.
export const tryCatch = (tryFn) => {
  try {
    const tried = tryFn()
    return Right(tried)
  } catch (error) {
    return Left(null)
  }
}

// TODO: This would maybe make more sense as a MAYBE.
// TODO: Make this work correctly please.
// Get the user plugin && include it
const userPlugins = (path) => {
  return (fs.existsSync(path))
    ? Right(path)
    : Left(null)
}

// const either = x => {} // Return a default nothing.
// const or = () => { require(path).plugins } // This would be how we get the plugin safely.
// .fold(either, or)

// TODO: Delete me and use fp-ts instead
const Either = () => {}

export const empty = (arr) => (!Boolean(arr.length))
