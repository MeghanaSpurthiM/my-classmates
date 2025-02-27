import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Stack from 'react-bootstrap/Stack';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function Row(props) {
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <Card id="customCard">
      
      <Card.Body id="cb">
      <ul>
        <Card.Text>
        
          <li>Name: {(props.person.name)}</li>
          <li>Favorite: {(props.person.favoriteColor)}</li>
          <li>Favorite Food: {(props.person.favoriteFood)}
          <Button variant="secondary" onClick={handleClick} style={{float: 'right'}}>Like({likes})</Button>
          </li>

          
        </Card.Text>
        </ul>
      </Card.Body>
      
    </Card>
   
  );
}

function Header({ title }) {
  return <h1><Badge bg="secondary">{title ? title : 'Default Title'}</Badge></h1>;
} 

function App() {
  
  const People = [{'name':'Meghana','favoriteFood':'Tiramisu','favoriteColor':'Blue'}
  ]
 
  document.title = "MyClassmates"

 
  return (
  
    <div>
      <Header title="My Classmates" />
      <ul>
      <Stack>
        {People.map((person) => (
          
          <Row person={person} key={person.name}></Row>
         
        ))}
         </Stack>
      </ul>
    </div>
  );
}
   
    



  export default App;
