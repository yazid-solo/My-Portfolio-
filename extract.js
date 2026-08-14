const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\31461221-e7a9-48a9-beba-1bb22fd6d8eb\\.system_generated\\logs\\transcript_full.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('replace_file_content') && line.includes('profile.js')) {
      const obj = JSON.parse(line);
      // Print the TargetContent to see what we replaced, maybe it has pieces we need!
      if (obj.tool_calls) {
        for (const call of obj.tool_calls) {
            if (call.name.includes('replace_file_content') && call.args && call.args.TargetFile && call.args.TargetFile.includes('profile.js')) {
                 if (call.args.ReplacementChunks) {
                     console.log(call.args.ReplacementChunks);
                 } else {
                     console.log(call.args);
                 }
            }
        }
      }
    }
  }
}

processLineByLine();
