My thoughts on how it'll [maybe] work in the future.

## Generator
```
- Name monorepo
- Add package(s)
  - N
  - Y
    -> Add new package?
      o Library
      o React
      o Node Server
      o Command line binary
        -> Enter package name (press <Enter> to finish list)
        -> Select package options
        -> npm or yarn?
        -> git repo url (will auto-commit)
    -> Publish (any new packages)
    -> Compile/Build
      o Documentation (runs on all packages)
      o Types
        - Which package?
      o Code
        - Which package?

  After package is added make sure to update any tsconfig stuff needed as well.
```

* https://github.com/NiGhTTraX/ts-monorepo/tree/npm
* https://github.com/stereobooster/typescript-monorepo
* https://github.com/NiGhTTraX/ts-monorepo/tree/examples
* https://medium.com/@NiGhTTraX/making-typescript-monorepos-play-nice-with-other-tools-a8d197fdc680
* https://github.com/Bnaya/typescript-monorepo-toolkit
