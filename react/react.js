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
                },
               
            ],
            text: "",


        }
        
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(16);
        let newItem = {
            text: this.state.text,
            id: Date.now(),
        }
        this.setState(function(state){
            let currentItems = state.items
            currentItems.push(newItem)
            let buttonText = " ";
            return {
                items: currentItems,
                text: buttonText
                
            }
        })
    }
    render(){
        return(
            <form action="" onSubmit={(event)=>this.handleSubmit(event)}>
                <h1>TODO APP</h1>
                <ol>
                    {
                        this.state.items.map((item) => (
                            <li key={item.id}>
                                <p>{item.text}</p>
                                <button type="button">Edit</button>
                                <button type="button">Delete</button>
                            </li>
                        ))
                    }
                </ol>
                <input type="text" onChange={(event) => this.setState({text: event.target.value})} value={this.state.text}/>
                <button>ADD</button>
            </form>
        )
    }
}

root.render(<App/>)