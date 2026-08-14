const fs = require('fs');

const data = fs.readFileSync('d:\\Web dan Apk\\portfolio\\profile_views.txt', 'utf8');
const sections = data.split('======== NEW VIEW ========');

let combinedLines = {};

for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    if (sec.trim() === '') continue;
    
    const matchTime = sec.match(/Created At: (.*?)\n/);
    if (matchTime) {
        const time = new Date(matchTime[1]);
        if (time > new Date('2026-08-10T16:55:00Z')) {
            console.log("Skipping view from " + matchTime[1] + " (after disaster)");
            continue;
        }
    }
    
    // Sort sections from oldest to newest so newest overwrites oldest
    const lines = sec.split('\n');
    let contentStart = false;
    
    for (const line of lines) {
        if (contentStart) {
            if (line.includes('The above content does NOT show the entire file contents') || line.includes('The above content shows the entire, complete file')) {
                break;
            }
            const match = line.match(/^(\d+):\s(.*)/);
            if (match) {
                const lineNum = parseInt(match[1]);
                combinedLines[lineNum] = match[2];
            }
        }
        if (line.includes('The following code has been modified to include a line number')) {
            contentStart = true;
        }
    }
}

// Convert object to array based on keys
const maxLine = Math.max(...Object.keys(combinedLines).map(Number));
const outLines = [];
for (let i = 1; i <= maxLine; i++) {
    outLines.push(combinedLines[i] !== undefined ? combinedLines[i] : '');
}

fs.writeFileSync('d:\\Web dan Apk\\portfolio\\reconstructed.js', outLines.join('\n'));
