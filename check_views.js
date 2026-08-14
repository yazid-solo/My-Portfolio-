const fs = require('fs');

const data = fs.readFileSync('d:\\Web dan Apk\\portfolio\\profile_views.txt', 'utf8');
const sections = data.split('======== NEW VIEW ========');

for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    if (sec.trim() === '') continue;
    const match = sec.match(/Created At: (.*?)\n/);
    if (match) {
        console.log(`Section ${i}: ${match[1]}`);
    }
}
