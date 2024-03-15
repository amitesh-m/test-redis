
const { createClient }  = require ('redis');

console.log("hello")

const client = createClient({
    url: 'redis://127.0.0.1:6379'
  });

client.on('error', err => console.log('Redis Client Error', err));

let fn = async function(){
    await client.connect();

    await client.set('cricket', "game:1");
    const value = await client.get('cricket');
    console.log(value)
}
fn();