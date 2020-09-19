# `ts-monorepo-starter`
The intention here is to make a ts-monorepo starter pack (generator/builder) based on `NiGhTTraX/ts-monorepo`. It builds everything using templates based on an existing working typescript repository (this one). This should maintain all the benefits of the `NiGhTTraX/ts-monorepo` repository.

## Why
To setup a typescript monorepo takes effort and there are special flags that you need to set. Instead of having to remember how to do that I, instead, would rather have a systematic way of putting a monorepo and package together with all the requirements (testing, typescript config, linting et al) already met.

### Why use `NiGhTTraX/ts-monorepo`?
The reason for this is multiple.

1. I don't want to learn to build and configure this myself. That's tedious and error prone.
1. I just want to get into using a monorepo + typescript asap.
1. This works so well, there isn't anything I need/want to add.

So using their examples I will build my generator on top of it (with my changes added such as namespaces).

## How
Once things are setup and working everything can be managed/maintained by Lerna. If they are easy I may try to figure out a way to do the updates through the functionality here as well.

To get your typescript monorepo working there is a lot of extra work. So I can get this to work simply by having generators (templates) for all of it. Pretty straight forward.

## Folder structure

* `@ts-monorepo-starter/bin` -> The CLI executable 
* `@ts-monorepo-starter/generator` -> The actual generator. It's removed from the bin in case someone wants to do something else with it (webservice, UI et al)
* `@ts-monorepo-starter/templates` -> All the templates used to generate stuff.
* `@ts-monorepo-starter/config-cspell` -> Spelling config
* `@ts-monorepo-starter/config-jest` -> Jest config options if I can abstract them into a package
* `@ts-monorepo-starter/config-prettier` -> Prettier config options
* `@ts-monorepo-starter/eslint` -> My eslint rules, just cleaner to have it all in here.
