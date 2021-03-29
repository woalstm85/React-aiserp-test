import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name': '정재민',
  'birthday': "850904",
  'gender': "남성",
  'job': "개발자",
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': "841215",
  'gender': "남자",
  'job': "프로그래머",
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name': '김태희',
  'birthday': "821212",
  'gender': "여성",
  'job': "연예인",
}

]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=> {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}



export default App;
