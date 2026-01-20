const fs = require("fs");
const path = require("path");

const svgFolder = path.join(__dirname, "../app/assets");

// Read all SVG files
const files = fs.readdirSync(svgFolder).filter(f => f.endsWith(".svg"));

files.forEach(file => {
  const filePath = path.join(svgFolder, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Set fill color to #ffffff
  content = content.replace(/fill=".*?"/g, 'fill="#ffffff"');

  // Add width and height attributes or replace if already exists
  if (/width=".*?"/.test(content)) {
    content = content.replace(/width=".*?"/g, 'width="80px"');
  } else {
    content = content.replace(
      /<svg/,
      '<svg width="80px"'
    );
  }

  if (/height=".*?"/.test(content)) {
    content = content.replace(/height=".*?"/g, 'height="80px"');
  } else {
    content = content.replace(
      /<svg/,
      '<svg height="80px"'
    );
  }

  // Save file
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Processed: ${file}`);
});
