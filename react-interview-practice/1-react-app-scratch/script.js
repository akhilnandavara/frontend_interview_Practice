// function Counter() {
//     const [count, setCount] = React.useState(0)
//     function increment() {
//         setCount(count + 1)
//     }
//     function decrement() {
//         if (count > 0) setCount(count - 1)
//     }
//     return (
//         // without JSX
//         // React.createElement('div',null,
//         //     React.createElement('h1',null,`Counter ${count}`),
//         //     React.createElement('button',{onClick:increment},'Increment'),
//         //     React.createElement('button',{onClick:decrement},'Decrement')
//         // )
//         // JSX
//         <>
//             <h1>Counter {count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>

//             <Ecom />
//         </>

//     )
// }


// const products = [
//     {
//         name: "laptop",
//         price: 1000,
//         category: "electronics"
//     },
//     {
//         name: "mobile",
//         price: 500,
//         category: "electronics"
//     },
//     {
//         name: "headset",
//         price: 100,
//         category: "electronics"
//     },
//     {
//         name: "shirt",
//         price: 20,
//         category: "clothing"
//     },
//     {
//         name: "jeans",
//         price: 50,
//         category: "clothing"
//     }
// ]

// const list = ["Akhil", "aku", "joy", "aku"]


// const Ecom = () => {
//     return (
//         <div>
//             <h1>E-Commerce</h1>
//             {/* map */}
//             <ul>
//                 <h2>MAP</h2>
//                 {
//                     products.map(
//                         (product) => (
//                             <li key={product.id}><strong>{product.name}</strong>  category - {product.category} price - ${product.price}</li>
//                         )
//                     )
//                 }
//             </ul>

//             {/* filter */}
//             <ul>
//                 <h2>Filter</h2>
//                 {
//                     products.filter((product) => product.category === "electronics").map(
//                         (product) => {
//                             return <li key={product.id}><strong>{product.name}</strong>  category - {product.category} price - ${product.price}</li>

//                         }
//                     )
//                 }
//             </ul>

//             {/* Reduce */}
//             <ul>
//                 <h2>Reduce</h2>
//                 <p>Total price: $
//                     {
//                         products.reduce((acc, curr) => acc + curr.price, 0)
//                     }</p>
//             </ul>
//             {/* Task: add discounted price key to products price more than $50 */}
//             <ul>
//                 <h2>Task</h2>
//                 {
//                     products.map((product) => {
//                         if (product.price > 50) {
//                             return {
//                                 ...product,
//                                 discountedPrice: product.price * 0.9
//                             }
//                         }
//                         return product
//                     }).map(
//                         (product) => (
//                             < li key={product.id}>
//                                 <strong>{product.name}</strong>  category - {product.category}  price - ${product.discountedPrice ? <strike>{product.price}</strike> : <>{product.price}</>} {product.discountedPrice}</li>
//                         )
//                     )
//                 }
//                 {/* {
//                     products.map((product) => {
//                         return product.price > 50 ? (
//                             <li key={product.id}><strong>{product.name}</strong>  category - {product.category}  price - <strike>${product.price}</strike> ${product.price*0.9}</li>
//                         ):(
//                             <li key={product.id}><strong>{product.name}</strong>  category - {product.category} price - ${product.price}</li>
//                         )
//                     })
//                 } */}
//             </ul>


//           {/* {list.filter((name,index)=>list.indexOf(name)===index).map((name)=><li>{name}</li>)} */}


//         </div>
//     )
// }

function App() {
    return (
        <>
            <h1>App</h1>
            <Counter />
        </>
    )
}


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h2>Counter {this.state.count}</h2>
            <button onClick={this.incrementCount}>Increment</button>

            </>
        )
    }

}

ReactDOM.render(React.createElement(App), document.getElementById('root'))