//*Thuật toán xem sử dụng gần đây nhất
//*LRU: Least Recently Used
class LRUCache {
    constructor(size) {
        this.size = size || 3
        this.cache = new Map();
    }
    put(key, val) {
        const hasKey = this.cache.has(key)
        if (hasKey) {
            this.cache.delete(key)
        }
        this.cache.set(key, val)

        //Check cache only equal ===3
        if (this.cache.size > this.size) {
            this.cache.delete(this.cache.keys().next().value)
        }
        return true
    }
    get(key) {
        const hasKey = this.cache.has(key)
        if (hasKey) {
            const val = this.cache.get(key)
            //delete end and insert data new first
            this.cache.delete(key)
            this.cache.set(key, val)
            return val
        }
        return -1
    }

    item() {
        return (this.cache.entries())
    }
}