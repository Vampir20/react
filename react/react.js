const root = ReactDOM.createRoot(document.getElementById("root"));

class App extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            items: [
                {
                    text: "To install Kali Linux",
                    id: Date.now(),
                },

                {
                    text: "hack vk",
                    id: Date.now(),
                },

                {
                    text: "пробить человека, зная id от vk",
                    id: Date.now(),
                },
            ],

        }

        
    }
    handleSubmit(){
        
    }
    render(){
        return(
            <form action="">
                <h1>TODO APP</h1>
                <ol>
                    {
                        this.state.items.map((item) => (
                            <li key={item.id}>
                                <p>{item.text}</p>
                                <p>{item.id}</p>
                                <button>Edit</button>
                                <button>Delete</button>
                            </li>
                        ))
                    }
                </ol>
                <input type="text" />
                <button onClick={()=> this.handleSubmit()}>ADD</button>
            </form>
        )
    }
}

root.render(<App/>)