// Generates the QR code that neighbors scan. Points to the clean domain,
// which then explains everything and links to PECO's form.
// Run: node scripts/make-qr.js   (optionally: node scripts/make-qr.js https://other-url)
const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

const url = process.argv[2] || "https://rickroadneighbors.com";
const outDir = path.join(__dirname, "..", "qr");
fs.mkdirSync(outDir, { recursive: true });

const opts = {
  errorCorrectionLevel: "M", // good balance; survives small print smudges
  margin: 2,
  color: { dark: "#12161c", light: "#ffffff" }, // near-black for reliable scanning
};

(async () => {
  // High-res PNG for printing (flyers, door hangers)
  await QRCode.toFile(path.join(outDir, "rickroad-qr.png"), url, {
    ...opts,
    type: "png",
    width: 1200,
  });

  // Crisp SVG — scales to any size with no blur (best for print)
  const svg = await QRCode.toString(url, { ...opts, type: "svg", width: 1200 });
  fs.writeFileSync(path.join(outDir, "rickroad-qr.svg"), svg);

  console.log("QR codes written to /qr for:", url);
})();
