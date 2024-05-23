const cart = ["apple", "orange", "banana"];
// const cart = []


// proceedPayment()
// showOrderSummery()
// updateWallet()
const createOrder = (cart, callback) => {
    return new Promise(function (resolve, reject) {
        if (!cart.length) reject("Cart is empty")
        else setTimeout(() => {
            console.log("Order Created")
            resolve(123)
            // reject("Order creation failed")
        }, 2000)
    })
}

const proceedPayment = (orderId) => {
    return new Promise(function (resolve, reject) {
        if (!orderId) reject("Order Id is missing")

        else resolve("Payment Success")
    })
}
const updatedWallet = (paymentInfo) => {
    return new Promise(function (resolve, reject) {
        if (!paymentInfo) reject("payment Info is missing")

        else resolve("Wallet Updated")
    })
}

// createOrder(cart,function(orderId){
//     proceedPayment(orderId,function(paymentStatus){
//         showOrderSummery(orderId,function(orderSummery){
//             updateWallet(orderSummery,function(walletStatus){
//                 console.log("Order completed successfully")
//             })
//         })
//     })
// })


// createOrder(cart)
//     .then((orderId) => {
//         return proceedPayment(orderId)
//     })
//     .then((paymentInfo) => {
//         return updatedWallet(paymentInfo)
//     })
//     .then((walletStatus) => {
//         console.log(walletStatus, "Order completed successfully")
//     })
//     .catch((err) => {
//         console.log(err)
//     })

async function getUser(){
    const user =await fetch("https://api.github.com/users/akhilnandavara")
    const data = await user.json()
    console.log(data)

}

getUser()