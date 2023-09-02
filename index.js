function spy () {"function"}

function receivesAFunction (callback) {
    return callback ()
}
receivesAFunction (spy())

function returnsANamedFunction () {
    return function namedFunction () {console.log("function")}
}
returnsANamedFunction()

function returnsAnAnonymousFunction () {
    return function () {"function"}
}
returnsAnAnonymousFunction()