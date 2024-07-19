var fs = require('node:fs');
var path = require('node:path');

fs.writeFileSync(path.join(process.cwd(), 'a.json'), '123132');
