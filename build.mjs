import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
const dir='payload';
const data=fs.readdirSync(dir).filter(x=>x.endsWith('.txt')).sort().map(x=>fs.readFileSync(path.join(dir,x),'utf8')).join('');
const files=JSON.parse(zlib.brotliDecompressSync(Buffer.from(data,'base64')).toString('utf8'));
for(const [name,content] of Object.entries(files)){fs.mkdirSync(path.dirname(name),{recursive:true});fs.writeFileSync(name,content)}
console.log('Expanded',Object.keys(files).length,'project files');
