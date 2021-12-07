import React, { Component } from "react";


class App extends Component { //Setup of App
constructor(props) {
super(props);
this.state = {
items: [],
isLoaded: false
};
}

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon-species?limit=500") //Fetch the details of the API
    .then((res) => res.json())
    .then((json) => {
    this.setState({
    isLoaded: true,
    items: json
    });
    });
    }

    handleChange=(e) => { //For Search Bar
      this.setState({search: e.target.value});
    };


  render() {
    var { isLoaded, items } = this.state;
    console.log(items)
    if (!isLoaded) {
    return <div> Loading....</div>;
    } else {
    return (
    <div className="App">
      <div>
     <nav>
         <ul id="navigation">
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/about">About</Link>
             </li>
             <li>
                 <Link to="/contact">Contact</Link>
             </li>
         </ul>
     </nav>
</div>
    <ul>
    {items.results.map((item) => ( //Map Object from PokeAPI to a List
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