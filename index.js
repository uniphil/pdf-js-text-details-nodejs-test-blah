
var PDFJS = require('./pdf.js')


console.log('hello');


const noooooo = (err) => console.error(err);


PDFJS.getDocument('kosmos-energy-suriname-block-45-2011.pdf')
  .then((pdf) => pdf.getPage(1))
  .then((page) => page.getTextContent())
  .then(printTextCoords)
  .catch(noooooo);

function printTextCoords(textStuff) {
  textStuff.items.forEach(function(item) {
    console.log(Math.round(item.width) + '×' + Math.round(item.height) + ':',
      item.str);
  });
}
