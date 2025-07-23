import { controller } from "./CatController";

const mainApp = () => ({
    async init() {
        const catsData = await controller.loadData()
        this.$store.catsData.cats = catsData
        this.loadCart()
    },

    addToCart(addedCat) {
        const existed = this.$store.catsData.cart.find((cat) => cat.name == addedCat.name)
        if (existed) {
            existed.amount++
        } else {
            addedCat.amount = 1
            this.$store.catsData.cart.push(addedCat)
        }
        this.saveCart()
    },
    caculatePrice(addedCat) {
        const existed = this.$store.catsData.cart.find((cat) => cat.name == addedCat.name)
        if (!existed) return 0
        return existed.price * existed.amount
    },

    totalPrice() {
        const totalPrice = this.$store.catsData.cart.reduce((totalPrice, cat) => totalPrice += cat.price * cat.amount, 0).toFixed(1)
        if (totalPrice.split(".")[1] === "0" ) return totalPrice.split(".")[0]
        else return totalPrice
    },

    removeCat(removedCat) {
        const removeCatIdx = this.$store.catsData.cart.findIndex((cat) => cat.name == removedCat.name)
        if (removeCatIdx >=0 ) { this.$store.catsData.cart.splice(removeCatIdx, 1) }
    },


    resetCart() {
        this.$store.catsData.cart = []
        this.saveCart()   
    },

    saveCart() {
        const currentCart = JSON.stringify(this.$store.catsData.cart)
        localStorage.setItem("localCart", currentCart)
    },

    loadCart() {
        const loadedCart = JSON.parse(localStorage.getItem("localCart") || "[]")
        this.$store.catsData.cart = loadedCart
    }
})

export { mainApp }