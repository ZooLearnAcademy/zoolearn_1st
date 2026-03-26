const fs = require('fs');

const path = 'd:/zoolearn/ongoing/zoolearn_1st-main/src/data/scopesData.js';
const content = fs.readFileSync(path, 'utf8');

// Extract courseDetails keys
const courseDetailsMatch = content.match(/export const courseDetails = \{([\s\S]*?)\};\s*export const careerCategories/);
const courseDetailsStr = courseDetailsMatch[1];
const courseDetailsKeys = [];
const regex = /"([^"]+)"\s*:/g;
let match;
while ((match = regex.exec(courseDetailsStr)) !== null) {
    courseDetailsKeys.push(match[1]);
}

// Extract careerCategories logic
const careerCategoriesStr = content.substring(content.indexOf('export const careerCategories = ['));
// A simpler way: just regex search for all strings in bsc: [...], msc: [...], phd: [...]
const careerRegex = /(?:bsc|msc|phd):\s*\[(.*?)\]/g;
let cMatch;
const usedCourses = new Set();
while ((cMatch = careerRegex.exec(careerCategoriesStr)) !== null) {
    const listStr = cMatch[1];
    const itemRegex = /"([^"]+)"/g;
    let iMatch;
    while ((iMatch = itemRegex.exec(listStr)) !== null) {
        usedCourses.add(iMatch[1]);
    }
}

const missing = [];
for (const course of usedCourses) {
    if (!courseDetailsKeys.includes(course) && course !== 'Optional') {
        missing.push(course);
    }
}

console.log("Missing courses:");
console.log(missing);
