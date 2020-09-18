# TODO
* Use `lerna` for all packages
  - https://github.com/NiGhTTraX/ts-monorepo
  - https://betterstack.dev/blog/lerna-typescript-monorepo/
* Library/bin generators
* Move generator code to it's own spot
* Remove the fork as this will be it's own thing
* Use Jest
  * Configure so that snapshots save to an external depednancy
* Use `eslint` with custom functional needs
* React?
* Allow for co-located or `./tests` directory
* remove `.circleci` directory
* remove `.vscode` directory
* Remove `appveyor.yml`

## Notes
This will only support github "stuff" so I won't keep the circleci or appveyor stuff. I don't want to learn it and I don't
care. If anyone wants they can use the original or add this themselves.

Also, this ONLY creates monorepos. But any package may contains a full app. So I'll figure that out later (webpack yuck, rollup yay!)
