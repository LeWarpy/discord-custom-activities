# discord-custom-activities

Summon your own custom Activities on Discord

![Screenshot](https://ifh.cc/g/AwnC1P.jpg)

## Setup
- Node.JS >=16.15
- Create an application on `discord.com/developers/`
- Add the Application ID to `config.json` in the format 
```json
"YOUR_APPLICATION_ID": "https://your_endpoint_url.net"
```
- Install dependencies `npm install`
- Run `node index.js`

## How to Use
Run the following snippet in your Discord console
```js
let application = "YOUR_APPLICATION_ID_HERE";
(webpackChunkdiscord_app.push([[''],{},e=>{mods = Object.values(e.c)}]));
const { exports: { Z } } = mods.findLast(m => m?.exports?.Z?.dispatch);
Z.dispatch({
  type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
  applicationId: application, // Testing Discord app
  originURL: "http://localhost:3000/launch/${application}"
});
```
Join a voice channel and select it from the activity menu.

This is only a proof-of-concept for now, the opened activities close sometimes after ~1 minute.

## Example

Application "FranceInfo" (YouTube live player) => ID : 910520972451409960

## Credits
- [derpystuff](https://gitlab.com/derpystuff) for his research
