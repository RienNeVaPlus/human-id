import {humanId, Options, adjectives, adverbs, poolSize} from './index'

const samples = 15
const list = [...Array(samples)]

console.info(`\n/*\n * humanId()\n */`)
for(const _ of list){ console.log(`# ${humanId()}`) }

console.info(`\n/*\n * humanId(\'-\') // or { separator: '-' }`)
for(const _ of list){ console.log(` * • ${humanId('-')}`) }

console.info(` */\n\nhumanId({ capitalize: false })`)
for(const _ of list){ console.log(`> ${humanId({capitalize:false})}`) }

console.info(` */\n\nhumanId({ adjectiveCount:2, addAdverb: true })`)
for(const _ of list){ console.log(`> ${humanId({ adjectiveCount:2, addAdverb: true })}`) }


function withCommas(str: any): string { return (str+'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")}

function poolSizeByOptions( opts : Options ): string {
	const { adjectiveCount = 1, addAdverb = false } = opts
	return withCommas( poolSize * Math.pow(adjectives.length, adjectiveCount-1) * (addAdverb?adverbs.length:1.0) )
}

console.log({'2 adjective poolSize': withCommas(poolSizeByOptions({adjectiveCount:2})) })
console.log({'3 adjective poolSize': withCommas(poolSizeByOptions({adjectiveCount:3})) })
console.log({'add adverb poolSize': withCommas(poolSizeByOptions({addAdverb:true})) })
console.log({'2 adjective & add adverb poolSize': withCommas(poolSizeByOptions({adjectiveCount:2, addAdverb:true})) })
