const dane = {
    users: [
        {
            id: 1,
            age:29,
            name: "Alan",
            sex: "male",
        },{
            id:2,
            age:33,
            name:"Julia",
            sex: "female",
        },{
            id:3,
            age: 49,
            name: "Arek",
            sex: "male",
        }
    ]
}
const Item = ({user}) => (
<div className="userInfo">
    <h2> {user.name}</h2>
    <p>Informacje o użytkowniku</p>
    <p>Wiek użytkownika {user.age}</p>
    <p>Płeć użytkownika: {user.sex}</p>

</div>)
class ListItem extends React.Component{
  state={
        select: "all", 
    } 
    handleChangeFilter(option){
        this.setState({
            select: option
        })
       }
    usersList = () => {
        
        let users = this.props.dane.users;
            switch(this.state.select){
            case "all" : 
            return         users = users.map((user) => <Item key={user.id} user={user} />)
            case "female":  
            users = users.filter((user) => user.sex==="female");
            return        users = users.map((user) => <Item key={user.id} user={user} />)        
            case "male":  
            users = users.filter((user) => user.sex==="male")
            return        users = users.map((user) => <Item key={user.id} user={user} />)
                  
    }  }
    render() {
   
        return (
             <>
             <button onClick={this.handleChangeFilter.bind(this,"all")}>Pokaż wszytskich</button>
             <button onClick={this.handleChangeFilter.bind(this,"female")}>Pokaż kobiety</button>
             <button onClick={this.handleChangeFilter.bind(this,"male")}>Pokaż mężczyzn</button>
             {this.usersList()}
             </>
        );
    }
}
ReactDOM.render(<ListItem dane={dane} />,document.getElementById('root'))