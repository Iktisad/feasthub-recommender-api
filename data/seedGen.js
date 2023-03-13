import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import * as argon2 from "argon2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function userSeedData() {
    
    const filePath = path.join(__dirname, './restaurents_visited.json');
    const fileData = fs.readFileSync(filePath, "utf8");
    
    const data = JSON.parse(fileData);
    
    // sort data by userID
    data.sort((a, b) => {
        const aUserID = parseInt(a.userID.split('U')[ 1 ]);
        const bUserID = parseInt(b.userID.split('U')[ 1 ]);
        return aUserID - bUserID;
    });

    const result = []
    
    for(let i = 0; i < data.length; i++) {
        const element = data[i];
        const isUserExist = result.find(user => user.userID === element.userID);
        if (!isUserExist) {
            result.push({
                id: result.length + 1,
                userID: element.userID,
                username: `user${element.userID.split('U')[ 1 ]}`,
                password: await argon2.hash(`user${element.userID.split('U')[ 1 ]}`),
            });
        }
    }

    const json = JSON.stringify(result);
    
    fs.writeFile('./output/users-seed.json', json, 'utf8', (err) => {
        if (err) {
            console.log("Error writing file", err);
        } else {
            console.log("Successfully wrote file");
        }
    });

}

async function genericSeedData(fileName) {
    const filePath = path.join(__dirname, `./${fileName}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");

    const data = JSON.parse(fileData);

    const result = []

    for (let i = 0;i < data.length;i++) {
        const element = data[i];
        result.push({
            id: i + 1,
            ...element,
        })
    }

    const json = JSON.stringify(result);

    fs.writeFile(`./output/${fileName}-seed.json`, json, 'utf8', (err) => {
        if (err) {
            console.log("Error writing file", err);
        } else {
            console.log("Successfully wrote file");
        }
    });
}


// anonymous function
(async () => {
    await userSeedData();
    await genericSeedData('restaurents_visited');
    await genericSeedData('cusine_and_type');
})();