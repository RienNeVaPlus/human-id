import {humanId} from './index'

const samples = 15
const list = [...Array(samples)]

console.info(`\n/*\n * humanId()\n */`)
for(const _ of list){ console.log(`# ${humanId()}`) }

console.info(`\n/*\n * humanId(\'-\') // or { separator: '-' }`)
for(const _ of list){ console.log(` * • ${humanId('-')}`) }

console.info(` */\n\nhumanId({ capitalize: false })`)
for(const _ of list){ console.log(`> ${humanId({capitalize:false})}`) }