import React, { Component } from "react";


class App extends Component {
constructor(props) {
super(props);
this.state = {
items: [],
isLoaded: false
};
}

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
    .then((res) => res.json())
    .then((json) => {
    this.setState({
    isLoaded: true,
    items: json
    });
    });
    }


  render() {
    var { isLoaded, items } = this.state;
    console.log(items)
    if (!isLoaded) {
    return <div> Loading....</div>;
    } else {
    return (
    <div className="App">
    <ul>
    {items.results.map((item) => (
    <li key={item.id}>
    {item.name}
    </li>
    ))}
    </ul>
    </div>
    );
    }
    }
    }
   
export default App;