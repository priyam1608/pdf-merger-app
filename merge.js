const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergerpdfs = async (p1,p2) => {
  try {
    await merger.add(p1);
    await merger.add(p2);
    let d = new Date().getTime();
    await merger.save(`./assets/public/${d}.pdf`);
    return d;
  } catch (error) {
    console.error('PDF merging error:', error);
    throw error; // Re-tgithrow the error to handle it in the calling code.
  }

};

module.exports = {mergerpdfs}