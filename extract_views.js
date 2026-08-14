const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\31461221-e7a9-48a9-beba-1bb22fd6d8eb\\.system_generated\\logs\\transcript_full.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const lines = [];

  for await (const line of rl) {
    if (line.includes('Showing lines') || line.includes('File Path:')) {
      const obj = JSON.parse(line);
      if (obj.content && obj.content.includes('profile.js')) {
          lines.push("======== NEW VIEW ========");
          lines.push(obj.content);
      }
    }
  }
  
  fs.writeFileSync('d:\\Web dan Apk\\portfolio\\profile_views.txt', lines.join('\n'));
}

processLineByLine();
