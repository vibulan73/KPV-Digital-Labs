const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "../app/assets");
const indexFile = path.join(assetsDir, "index.ts");

const files = fs.readdirSync(assetsDir).filter(f => /\.(png|jpg|jpeg|svg|gif)$/.test(f));

let content = "";

files.forEach(file => {
  const varName = path.basename(file, path.extname(file)).replace(/[^a-zA-Z0-9_]/g, "_");
  content += `import img${varName} from "./${file}";\n`;
});

content += "\nexport {\n";
files.forEach(file => {
  const varName = path.basename(file, path.extname(file)).replace(/[^a-zA-Z0-9_]/g, "_");
  content += `  img${varName},\n`;
});
content += "};\n";

fs.writeFileSync(indexFile, content);
console.log("✅ assets/index.ts generated!");

