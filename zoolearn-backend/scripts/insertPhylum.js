require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const Phylum = require("./models/phylum");

mongoose.connect(process.env.MONGO_URI);

const folderPath = path.join(__dirname, "../data/phylums");

async function insertData() {
    const files = fs.readdirSync(folderPath);

    let index = 1;

    for (const file of files) {
        const filePath = path.join(folderPath, file);

        const jsonData = JSON.parse(
            fs.readFileSync(filePath, "utf-8")
        );

        await Phylum.create({
            index,
            name: file.split(".")[0],
            data: jsonData
        });

        console.log(`Inserted: ${file}`);
        index++;
    }

    console.log("All data inserted ✅");
    process.exit();
}

insertData();