var config = [
  {
    id: 'tank',
    file: 'tanks.png',
    parts: [
      {
      	name: 'original',
      	x: 0,
      	y: 0,
      	h: 110,
      	w: 246,
      	paintable: true
      },
      {
      	name: 'supersport',
      	x: -246,
      	y: 0,
      	h: 95,
      	w: 278,
      	paintable: true
      }
    ]
  },
  {
    id: 'seat',
    file: 'seats.png',
    parts: [
      {
      	name: 'original',
      	x: 0,
      	y: 0,
      	h: 95,
      	w: 300
      },
      {
      	name: 'supersport',
      	x: -305,
      	y: 0,
      	h: 95,
      	w: 240,
      	paintable: true
      }
    ]
  }
]

module.exports = config;