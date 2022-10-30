<h3 align="center">💃🆔</h3>

## Human-Readable Identifiers

![Downloads](https://img.shields.io/npm/dm/human-id)
![License](https://img.shields.io/npm/l/human-id)

> Using words to identify datasets (instead of numbers) provides various advantages when humans are involved, ie increased distinction and rememberability.

Human-ID generates readable strings by chaining common short words of the english language in a semi-meaningful way.
The result is concatenated of `adjective + noun + verb` resulting in a [minimum](#extended-pool-size) pool size of **15 000 000** possible combinations.

- **SFW**: no bad words; family friendly results
- No dependencies

## Examples

- FortyGhostsTalk
- CalmSnailsDream
- TastyRocksSparkle
- HealthyCowsSmile
- AfraidWallsExist
- StrangeCarsRush
- TwoLizardsSing
- HappyLionsJump

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
humanId()

// Rare~Geckos~Jam
// alias for { separator: '~' }
humanId('~')

// rare-geckos-jam
humanId({
  separator: '-',
  capitalize: false,
})

poolSize()  // 15,000,000
minLength() //          8
maxLength() //         19
```

## Extended Pool Size

For most cases, the default pool size should be large enough. However, the options `adjectiveCount` and `addAdverb` can be utilized to increase the pool size for the price of the string length.

```js
const options = {
  adjectiveCount: 2,
  addAdverb: true,
  separator: '.'
}

humanId(options)   // Ten.Wet.Files.Cheer.Lazily
poolSize(options)  // 630,000,000
minLength(options) //          20
maxLength(options) //          41
```

## Extend existing pool data

Updating/Extending existing nouns/adjectives/verbs/adverbs is fairly simple like this: 

`(each update key supports either an array of new strings or an update function)`

```js
const options = {
    adjectives: ['completely', 'newy'],
    nouns: (curr) => [...curr, 'two', 'new', 'nouns'],
    verbs: ['replace', 'verbs', 'with', 'these'],
}

extend(options)
```

## API

### `humanId(options?: string | Option): string`
Generates a human ID. **Options** can be a `string` (separator), a `boolean` (capitalize) or an `Options` object of:
- **separator** `string = ''` - Separates the words from each other
- **capitalize** `boolean = true` - Whether to transform the first character of each word to upper case
- **adjectiveCount** `number = 1` - How many adjectives to return
- **addAdverb** `boolean = false` - Adds a fourth part to the id

*This function is also available as the default export*

### `poolSize(options?: string | Option): number`
Returns the number of possible combinations for a given set of options.

### `minLength(options?: Option): number`
The length of the shortest possible id for a given set of options.

### `maxLength(options?: Option): number`
The length of the longest possible id for a given set of options.

### `extend(config?: ExtendConfig): void`
Extends the existing possible node values (data set). 

The ExtendConfig comprises an object with:

**KEY:** [adjectives | nouns | verbs | adverbs]

**VALUE:** 
*An array of string *(string[])* or an update function:*

*(curr : string[]) => string[]*

### `adjectives: string[]`
List of possible values for the first part of the human id.

### `nouns: string[]`
List of possible values for the second part of the human id.

### `verbs: string[]`
List of possible values for the third part of the human id.

### `adverbs: string[]`
List of possible values for the optional fourth part of the human id.

<h6 align="center">💃🆔</h6>

