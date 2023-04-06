# MA3 TS PLUGIN TEMPLATE

This package is an example template for building a TypeScript grandMA3 plugin.

## Dependencies

- Uses node `>=16.17.1`

- [ma3-pro-plugins/ma3-ts-plugin-builder](https://github.com/ma3-pro-plugins/ma3-ts-plugin-builder): A opinionated build script, written in TypeScript.
- [ma3-pro-plugins/grandma3-ts-type](https://github.com/ma3-pro-plugins/grandma3-ts-types): TypeScript types for grandMA3 Object-API and Object-Free-API

## Configuration

### maconfig.json

This file contains configuration which are relevant to the MA3 installation of the plugin, and some run-time.

### buildconfig.json

This file contains configuration which is for the build itself, and are unrelated shipped plugin.

## Scripts

- `npm run dev`: For development
  - Generates a `tsconfig_dev.json` 
  - Builds the plugin in watch mode.
  - Installs the transpile LUA code to your local `MALightingTechnology` plugins folder.
- `npm run build`: For production
  - Generates a `tsconfig.json` 
  - Builds the plugin into a `dist` folder.
  - Create a Zip file ready for shipping.

## tsconfig.json

A `tsconfig.json` and `tsconfig_dev.json` are generated every time your run `npm run build` or `npm run dev` respectively.

They both extend the `tsconfig_base.json`

## Built-In images

The plugin builder looks for a folder called `images` under the `src` folder. 
If it find one, it generates a `__imagesB64` folder which includes:
- A `__[image_name].ts` file for each image, which exports the `fileName` and `imageBase64` string
- An `index.ts` file which exports:
  - `ImageKey` type: a string literal type with all possible image names
  - `images` object: a map of image-key to image-data

> You need to initially run `npm run build` at least once, so the example code would compile in VS code.