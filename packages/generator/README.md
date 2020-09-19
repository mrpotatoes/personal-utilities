This is a series of prompts to generate either a monorepo or a package within a mono repo.

Initialization
```
> Welcome, let's create greatness together!
> Looks like this directory isn't a ts-monorepo-starter managed directory
> Would you like to create one? (y/n)

> Namespace (Need to create this in npm directly)
> Description
> Tags
>
> ---- this part I'm not sure about yet. Do I even wanna bother setting this up?
> Your `git` username
> Your `git` password
> 
```

Adding a package
```
> Welcome, let's create greatness together!

Let's add a package. Please select from the following.
> Type (lib, react app, react component, server)
> Name (will apply the namespace to it by default.)
> Description
> License
> Public?
> tests directory or co-located tests?

```

To start it will look for a directory called `./packages/.@ts-monorepo-starter`. In there it will contain a bunch of files that are required for this to work. Do not delete this folder.

* `./packages/.@ts-monorepo-starter/version-${SEMVER}`
* `./packages/.@ts-monorepo-starter/namespace-${SELECTED-NAMESPACE}`
* `./packages/.@ts-monorepo-starter/config.json`