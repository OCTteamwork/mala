import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
const dir='payload';
const data=fs.readdirSync(dir).filter(x=>x.endsWith('.txt')).sort().map(x=>fs.readFileSync(path.join(dir,x),'utf8')).join('');
const files=JSON.parse(zlib.brotliDecompressSync(Buffer.from(data,'base64')).toString('utf8'));
for(const [name,content] of Object.entries(files)){fs.mkdirSync(path.dirname(name),{recursive:true});fs.writeFileSync(name,content)}
const gatewayPackage={name:'cf-je189-gateway',private:true,version:'0.4.0',main:'src/server.js',scripts:{postinstall:'node scripts/patch-minecraft-protocol.js',start:'node src/server.js',check:'node --check src/server.js && node --check scripts/patch-minecraft-protocol.js'},dependencies:{dotenv:'^16.6.1','minecraft-data':'^3.100.0','minecraft-protocol':'^1.66.0','prismarine-chunk':'^1.38.0','prismarine-registry':'^1.11.0',vec3:'^0.1.10'}};
fs.mkdirSync('public/gateway',{recursive:true});
fs.writeFileSync('public/gateway/package.json',JSON.stringify(gatewayPackage,null,2)+'\n');
console.log('Expanded',Object.keys(files).length+1,'project files');
