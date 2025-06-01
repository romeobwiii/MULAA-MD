/*

FROM ABOUT [ MFA ]

BASE ESM WANGSAPP
YT: @Fauzialifatah

INFORMASI:
https://whatsapp.com/channel/0029Vb5Tm5E6rsQnV4DIRO3z

*/

export const ownerNumber = '26776660902';
export const namabot = '-';

import chalk from 'chalk';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

fs.watchFile(__filename, () => {
    fs.unwatchFile(__filename);
    console.log(chalk.redBright(`Update ${__filename}`));
    import(`${import.meta.url}?update=${Date.now()}`)
        .then(() => console.log('Kode diperbarui!'))
        .catch(err => console.error('Gagal memperbarui:', err));
});
