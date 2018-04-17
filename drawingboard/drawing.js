//pass options and add custom controls to a board
var customBoard = new DrawingBoard.Board('drawing', {
  background: "#000000",
  color: "#fff",
  size: 2,
  controls: [
    'Download'
  ],
  controlsPosition: 'bottom',
  enlargeYourContainer: true,
  webStorage: false
});