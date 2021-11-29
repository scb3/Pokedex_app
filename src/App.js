import React, {component, Component} from 'react';
import { render } from '@testing-library/react';

class App extends Component {
   constructor(props) {
      super(props) ;

         this.state = {
            items : [ ],
            isLoaded : false,
         }
}

// https://pokeapi.co/api/v2/pokemon/

componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json() ) .then(json => {
      this.setState ({
         isLoaded: true,
         items: json,
      })
   });
}

render() {
   var{isLoaded,items}= this.state;
   if(!isLoaded) {
      return <div> Loading....</div>
   }
   else {
      return (
         <div className='App'> 
            <ul>
               {items.map(items => (
                   <li key = {items.id }>
                     {items.name}| {items.email}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

}
export default App;