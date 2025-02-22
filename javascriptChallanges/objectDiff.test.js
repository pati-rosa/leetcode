const diff = (newCode,oldCode) => {
    const newCodeArray = Object.keys(newCode)
    const oldCodeArray = Object.keys(oldCode)

    let result = []
    oldCodeArray.forEach((key) => {
        if(!newCode[key]) {
            result.push(['-',key,oldCode[key]])
        }
    })
    newCodeArray.forEach((key) => {
        if(!oldCode[key]) {
            result.push(['+',key,newCode[key]])
        }            
    })
    console.log(result)
    return result
}

test('it calculates the diff of shallow object properties', () => {
  const newCode = {
    apples: 3,
    oranges: 4
  }
  const oldCode = {
    apples: 3,
    grapes: 5
  }

  const objectDiff = [
    ['-', 'grapes', 5],
    ['+', 'oranges', 4]
  ]

  expect(diff(newCode, oldCode)).toEqual(objectDiff)
})

test('it calculates the diff of nested object properties', () => {
  const newCode = {
    apples: 3,
    oranges: {
      navel: 5
    }
  }

  const oldCode = {
    apples: 3,
    oranges: {
      valencia: 4
    }
  }

  const objectDiff = [
    ['-', 'oranges.valencia', 4],
    ['+', 'oranges.navel', 5]
  ]

  expect(diff(newCode, oldCode)).toEqual( objectDiff)
})

test.skip('it calculates the diff of doubly nested object properties', () => {
  const newCode = {
    apples: 3,
    oranges: {
      bergamot: 3,
      navel: {
        peaches: 1,
        apples: 3
      }
    }
  }

  const oldCode = {
    apples: 3,
    oranges: {
      bergamot: 3,
      valencia: {
        pears: 2,
        oranges: 4
      }
    }
  }

  const objectDiff = [
    [ '-', 'oranges.valencia.pears', 2 ],
    [ '-', 'oranges.valencia.oranges', 4 ],
    [ '+', 'oranges.navel.peaches', 1 ],
    [ '+', 'oranges.navel.apples', 3 ]
  ]

  expect(diff(newCode, oldCode)).toEqual( objectDiff)
})

test.skip('it calculates the diff of diference sized objects', () => {
  const newCode = {
    apples: 3,
    oranges: 5
  }

  const oldCode = {
    apples: 3,
    oranges: {
      bergamot: 3,
      valencia: {
        pears: 2,
        oranges: 4
      }
    }
  }

  const objectDiff = [
    ['-', 'oranges.bergamot', 3],
    ['-', 'oranges.valencia.pears', 2],
    ['-', 'oranges.valencia.oranges', 4],
    ['+', 'oranges', 5]
  ]

  expect(diff(newCode, oldCode)).toEqual( objectDiff)
})