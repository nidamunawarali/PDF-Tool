const PDFMerger = require('pdf-merger-js');



const mergePDFs = async (p1, p2) => {

  var merger = new PDFMerger();

  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);


  // Set metadata
  await merger.setMetadata({
    producer: "pdf-merger-js based script",
    author: "Nida",
    creator: "Nida",
    title: "Merged PDF"
  });

  let d = new Date().getTime();

  await merger.save(`./public/${d}.pdf`); //save under given name and reset the internal document
  return d;

  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = { mergePDFs }