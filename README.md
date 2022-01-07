# Cli Template
TypeScript Cli Template.

Configured:
- TypeScript
- Husky
- Prettier
- ESLint
- Pkg Build
- Some useful libs (
    chalk,
    clear,
    dotenv,
    envinfo,
    fs-extra,
    progress,
    prompts,
    signale,
    yargs
)

## Setup

I used pnpm as a package manager. [Install PNPM](https://pnpm.io/installation)

> If you don't want to use pnpm, edit the package.json file change pnpm to yarn/npm.

```
git clone https://github.com/krishna8421/cli-template.git

cd cli-template

pnpm dev
```

## Usage

Start for development.
```
pnpm dev
```

Build JS file.
> Build JavaScript files are stored in the build directory.
```
pnpm build
```

Run JS build File.
```
pnpm start
```

Build Binary file.
> Binary files are stored in the bin directory.
```
pnpm releases:linux   // for Linux
pnpm releases:mac     // for Mac
pnpm releases:win     // for Windows
pnpm releases:all     // for All three
```

Format.
```
pnpm check:format
pnpm fix:format
```

Lint.
```
pnpm check:lint
pnpm fix:lint
```

## Author

[Krishna Kumar](https://github.com/krishna8421)

## License

[MIT](https://github.com/krishna8421/cli-template/blob/main/LICENSE)
