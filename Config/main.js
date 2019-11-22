const textToSpeech = require('@google-cloud/text-to-speech'); 
const fs = require('fs');
const util = require('util');

const rootDir = require('path').resolve(__dirname, '..');
const outputDir = `${rootDir}\\Output`;
const configDir = __dirname;

fs.readFile(`${rootDir}\\TextContent.txt`, "utf8", function(err, text) {
	if(err) {
		console.log('\x1b[31m\x1b[43m', err); 
		console.log('\x1b[0m');
	} else {
		console.log(`************ convert content start ************\n\n${text}`);
		console.log('\n************ convert content end ************\n');
		convertTextToMp3(text); 
	} 
}); 

// https://cloud.google.com/text-to-speech/docs/create-audio?hl=zh-tw#text-to-speech-text-nodejs
async function convertTextToMp3(text) {
	const client = new textToSpeech.TextToSpeechClient();  
	const outputFile = `${outputDir}\\${new Date().getTime().toString()}.mp3`;  
	const rawdata = fs.readFileSync(`${configDir}\\setting.json`);
	let request = JSON.parse(rawdata || {});
 
	if(!request.audioConfig) request.audioConfig = {};
	request.audioConfig.audioEncoding = 'MP3';

	if(!request.input) request.input = {};
	request.input.text = text; 
 
	const [response] = await client.synthesizeSpeech(request);
	const writeFile = util.promisify(fs.writeFile);
	await writeFile(outputFile, response.audioContent, 'binary');
	console.log('\x1b[47m\x1b[34m', `text content written to file: ${outputFile}\n`);
	console.log('\x1b[0m');
}
