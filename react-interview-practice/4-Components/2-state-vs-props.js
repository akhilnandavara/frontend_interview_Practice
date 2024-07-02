
function App() {
    return (
        <>
            <h1>Hello</h1>
            <ParentComponent />
            <ParentComponentFn/>
        </>
    )
}

const ParentComponentFn = () => {
    const [data, setData] = React.useState("Hello from Parent")
    const editFunction = (e) => {
        setData("Hello from Child")
    }
    return (
        <>
            <h3>Funtcion Based Parent Component</h3>
            <ChildComponentFn editFunction={editFunction} data={data} />
        </>
    )
}

const ChildComponentFn = ({data,editFunction}) => {
    return (
        <>
            <h5>Child Component {data}</h5>
            <button onClick={editFunction}>Edit Me Fn </button>
        </>
    )
}

class ParentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: "Hello from Parent"
        }
    }
    editFunction = (e) => {
        this.setState({
            data: "Hello from Child"
        })
    }

    render() {
        return (
            <>
                <h3> Class Based Parent Component</h3>
                <ChildComponent editFunction={this.editFunction} data={this.state.data} />

            </>
        )
    }
}

class ChildComponent extends React.Component {

    render() {
        return (
            <>
                <h5>Child Component {this.props.data}</h5>
                <button onClick={this.props.editFunction}>Edit me</button>
            </>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);