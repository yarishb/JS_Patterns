function networkFetch (url) {
    return `${url} - Server reply`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) return `${url} - Cache reply`
        else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('socket.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('react.io'))