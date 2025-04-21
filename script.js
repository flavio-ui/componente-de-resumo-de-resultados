let json = `[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]`

let results = JSON.parse(json)
console.log(results.icon)

function carregar() {
    document.querySelector('p.reaction').innerHTML = `${results[0].category}`
    document.querySelector('p.n8').innerHTML = `${results[0].score}`

    document.querySelector('p.memory').innerHTML = `${results[1].category}`
    document.querySelector('p.n9').innerHTML = `${results[1].score}`

    document.querySelector('p.verbal').innerHTML = `${results[2].category}`
    document.querySelector('p.n6').innerHTML = `${results[2].score}`

    document.querySelector('p.visual').innerHTML = `${results[3].category}`
    document.querySelector('p.n7').innerHTML = `${results[3].score}`
}