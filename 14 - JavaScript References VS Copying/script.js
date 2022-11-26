// start with strings, numbers and booleans
    let [num, num2,num3] = [45, ,50, 55]
    num2 = 47.5
    // console.log(num,num2,num3)

    let [s1,s2,s3,s4] = ['Tanaka Rie','Tomoko Kureda','Kei Shindo','Marina Inoue']
    s3 = 'M.A.O'
    // console.log([s1,s2,s3,s4])
    // Let's say we have an array
    const superstars = ['No Party Jose', 'Roman Reign', 'Kevin Owens', 'Daniel Bryan','Honkythonk Man',
    'Brock Lesnar','The Rock','Steve Austin'];
    const nrow = [20,25,34,37,49,58,76,80]

    // and we want to make a copy of it.
    const wwepl = superstars

    // You might think we can just do something like this:
    // let p2 = wwepl[2]

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const old = superstars.slice(4,8)
    // console.log(old)

    // one way

    // or create a new array and concat the old one in
    

    // or use the new ES6 Spread

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const car = {
      name: 'Apollo Gunpert',
      brand: 'Apollo Automobile',
      price: 668000
    };

    // and think we make a copy:

    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
