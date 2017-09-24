Promise.resolve([1, 2, 3])
.then(values => values.map(value => value * 2))
.then(values => console.log(values))