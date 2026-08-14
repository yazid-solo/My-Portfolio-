const fs = require('fs');

const data = fs.readFileSync('d:\\Web dan Apk\\portfolio\\profile_views.txt', 'utf8');
const sections = data.split('======== NEW VIEW ========');

for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    if (sec.trim() === '') continue;
    
    const lines = sec.split('\n');
    let contentStart = false;
    let outLines = [];
    
    for (const line of lines) {
        if (contentStart) {
            if (line.includes('The above content does NOT show the entire file contents') || line.includes('The above content shows the entire, complete file')) {
                break;
            }
            // Strip line numbers
            const match = line.match(/^\d+:\s(.*)/);
            if (match) {
                outLines.push(match[1]);
            } else {
                // If it doesn't match the line number format, just push it
                outLines.push(line);
            }
        }
        if (line.includes('The following code has been modified to include a line number')) {
            contentStart = true;
        }
    }
    
    if (outLines.length > 0) {
        fs.writeFileSync(`d:\\Web dan Apk\\portfolio\\view_${i}.txt`, outLines.join('\n'));
    }
}
