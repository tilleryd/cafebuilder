module.exports = {
  core: {
    file: 'core.png',
    parts: {
      original: {
        h: 452,
        w: 955
      }
    }
  },
  seat: {
    file: 'seats.png',
    parts: {
      original: {
        x: 0,
        y: 0,
        h: 95,
        w: 300,
        draggable: true,
        hoverable: true
      },
      supersport: {
        x: -305,
        y: 0,
        h: 95,
        w: 240,
        paintable: true,
        draggable: true,
        hoverable: true
      }
    }
  },
  tank: {
    file: 'tanks.png',
    parts: {
      original: {
      	x: 0,
      	y: 0,
      	h: 110,
      	w: 246,
      	paintable: true,
        draggable: true,
        hoverable: true
      },
      supersport: {
      	x: -246,
      	y: 0,
      	h: 95,
      	w: 278,
      	paintable: true,
        draggable: true,
        hoverable: true
      }
    }
  },
  exhaust: {
    file: 'exhausts.png',
    parts: {
      original: {
        x: 0,
        y: 0,
        h: 179,
        w: 557,
        paintable: false,
        draggable: true,
        hoverable: true
      },
      supersport: {
        x: -557,
        y: 0,
        h: 179,
        w: 440,
        paintable: false,
        draggable: true,
        hoverable: true
      }
    }
  }
}
