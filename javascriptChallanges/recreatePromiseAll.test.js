const recreatedPromisseAll = (promisses) => {
    let result = []
    let completed = 0
    return new Promise((resolve,reject) => {
        if(promisses.length === 0){
            resolve([])
        }
        promisses.forEach((promisse,index) => {
            promisse.then((promise) => {
                result[index] = promise
                completed++
                if(completed===promisses.length) {
                    resolve(result)
                }
            }
            ).catch((error) => { reject(error) })
        })
        
    })
}
const promisses = [Promise.resolve(1),Promise.resolve(2)]

const withErrorPromise = [Promise.resolve(1), Promise.reject('error')]

test('Recreated promisse all should resolve with correct data', async () => {
    const data = await recreatedPromisseAll(promisses)
    expect(data).toEqual([1,2])
})

test('Recreaed Promise.all should catch error',async () => {
    try {
        await recreatedPromisseAll(withErrorPromise)
    } catch (error) {
        expect(error).toBe('error')
    }
})

test('Recreated Promise.all should return in correct order', async () => {
    const p0 = Promise.resolve(2);
    const p1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve(3);
      }, 10);
    });
    const p2 = new Promise((resolve) => {
        setTimeout(() => {
          resolve(4);
        }, 5);
      });

    const res = await recreatedPromisseAll([p0, p1,p2]);
    console.log(res)
    expect(res).toEqual([2,3,4]);
  });

test('Recreated Promise.all empty input array', async () => {
const res = await recreatedPromisseAll([]);
expect(res).toEqual([]);
});