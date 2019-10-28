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
npm install --save human-id
```

## Usage

```js
import { humanId } from 'human-id'

// RareGeckosJam
humanId();

// rare-geckos-jam
humanId({
  separator: '-',
  capitalize: false
});
```
<h6 align="center">💃🆔</h6>
