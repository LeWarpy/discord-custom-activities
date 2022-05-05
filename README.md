# discord-custom-activities

Summon your own custom Activities on Discord

## Setup
- Node.JS v17.9 or higher
- Create an application on `discord.com/developers/`
- Add the Application ID to `config.json` in the format 
```json
"YOUR_APPLICATION_ID": "https://your_endpoint_url.net"
```
- Run `node index.js`

## How to Use
Run the following snippet in your Discord console
```js
let application = "YOUR_APPLICATION_ID_HERE";
let Dispatcher = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.default?.isDispatching)
Dispatcher.exports.default.dirtyDispatch({
  type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
  applicationId: application,
  originURL: `http://localhost:3000/launch/${application}`
})
```
Join a voice channel and select it from the activity menu.

This is only a proof-of-concept for now, the opened activities close sometimes after ~1 minute.

## Example

Application "FranceInfo" (YouTube live player) => ID : 910520972451409960

## Credits
- [derpystuff](https://gitlab.com/derpystuff) for his research
