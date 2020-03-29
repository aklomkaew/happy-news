import * as React from 'react';


// import axios from 'axios';

// // public IP address for your computer
// const serverUrl = 'http://108.227.22.246:5000';
// const http = axios.create({
//   baseURL: serverUrl,
// });

export class App extends React.Component<{}, IState>{
  constructor(props: {}){
    super(props);
    this.state={
      currentSearch:"",
      Search: []
    }
  }
  handleSubmit(e: any){
    e.preventDefault();
    this.setState({
      currentSearch:"",
      Search: [
        ...this.state.Search,
        this.state.currentSearch
      ]
    })
  }
  render(){
    console.log(this.state);
    return (
    <div>
      <h1> News source </h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            type="text" 
            placeholder="e.g. BBC, CNN, VOA"
            value={this.state.currentSearch}
            onChange={e => this.setState({currentSearch: e.target.value})}
          />
          <button type="submit">Search</button>
        </form>
    </div>
    );
  }
}
interface IState{
  currentSearch: string;
  Search:Array<string>;
}