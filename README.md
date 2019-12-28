<h3 align="center">💃🆔</h3>

## Human-Readable Identifiers

> Using words to identify datasets (instead of numbers) provides various advantages when humans are involved, ie increased distinction and rememberability.

Human-ID generates readable strings by chaining common short words of the english language in a semi-meaningful way.
The result is concatenated of `adjective + noun + verb` resulting in a total of **13 024 368** possible combinations.

- **SFW**: no bad words; family friendly results
- No dependencies

## Examples

- FortyGhostsTalk
- CalmPanthersDream
- TastyRocksSparkle
- HealthyCowsSmile
- AfraidWallsExist
- StrangeCarsRush
- TwoKangaroosSing
- HappyDolphinsJump

## Install

Yarn
```
yarn add human-id
```

NPM
```
npm install human-id
```

## Usage

```js
import humanId from 'human-id'

// RareGeckosJam
humanId();

// Rare~Geckos~Jam
humanId('~');

// rare-geckos-jam
humanId({
  separator: '-',
  capitalize: false
});
```

## API

### `humanId(options?: string | Option): string`
Generates a human ID. **Options** can be a string *for defining a separator,* or an options object of:
- **separator** `string = ''` - Separates the words from each other
- **capitalize** `boolean = true` - Whether to transform the first character of each word to upper case

*This is also the default export*

### `adjectives: string[]`
List of possible values for the first part of the human id.

### `nouns: string[]`
List of possible values for the second part of the human id.

### `verbs: string[]`
List of possible values for the third part of the human id.

### `poolSize: number`
Returns 13024368 - the number of possible combinations.

### `minLength: number` 
The length of the shortest possible id (8).

### `maxLength: number` 
The length of the longest possible id (24).

<h6 align="center">💃🆔</h6>
