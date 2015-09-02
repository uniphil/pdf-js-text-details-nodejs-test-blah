
console.log('hello');


const noooooo = (err) => console.error(err);

function render(page, canvas) {
  console.log('page', window.page = page);
  var viewport = page.getViewport(2.0);  // scale
  console.log('viewport', window.viewport = viewport);
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  page.render({
    canvasContext: canvas.getContext('2d'),
    viewport: viewport
  });
}

var canvas = document.getElementById('canvas');
PDFJS.getDocument('kosmos-energy-suriname-block-45-2011.pdf')
  .then((pdf) => pdf.getPage(1))
  .then((page) => render(page, canvas))
  .catch(noooooo)



var container = document.getElementById('viewer');

var pdfViewer = new PDFJS.PDFViewer({
  container: container
});

container.addEventListener('pagesinit', function () {
  // we can use pdfViewer now, e.g. let's change default scale.
  pdfViewer.currentScaleValue = 'page-width';
});

// Loading document.
PDFJS.getDocument('kosmos-energy-suriname-block-45-2011.pdf')
  .then(function (pdfDocument) {
    // Document loaded, specifying document for the viewer.
    pdfViewer.setDocument(pdfDocument);
  });


/*
page.getTextContent() is very rich
*/

