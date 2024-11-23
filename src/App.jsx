/* eslint-disable react/prop-types */

import { useState } from 'react';
import './App.css'

function App() {

  /* React JS এর ভিতরে একটী Component তৈরি করে তা parant commponent এ দেখানোর নিয়ম । */

  return (
    <center>

      <Person></Person>




      <Device></Device>




      <Destructure
        Name='KING ALVI'
        Score='100'></Destructure>

      <Destructure
        Name='JHON WICK'
        Score='50'></Destructure>

      <Destructure></Destructure>





      <ConditionalRendering
        isDone={true}
        Task={'HTML'}
      ></ConditionalRendering>

      <ConditionalRendering
        isDone={true}
        Task={'CSS'}
      ></ConditionalRendering>

      <ConditionalRendering
        isDone={true}
        Task={'JAVASCRIPT'}
      ></ConditionalRendering>

      <ConditionalRendering
        isDone={false}
        Task={'REACT JS'}
      ></ConditionalRendering>

      <ConditionalRendering
        isDone={false}
        Task={'NEXT JS'}
      ></ConditionalRendering>





      {/* React JS এ map() method এর ব্যবহার । */}

      {
        // eslint-disable-next-line react/jsx-key
        friends.map(friend => <Friends friends={friend} ></Friends>)
      }

      {
        // eslint-disable-next-line react/jsx-key
        myPlayers.map(player => <Players players={player}></Players>)
      }





      <button onClick={eventHandeler1}>FIRST CLCIK</button>

      {/* Example Of Anonymous Function */}
      <button onClick={() => eventHandeler2(5)}> SECOEND CLICK</button>





      <UseState></UseState>

    </center>
  )
}





/* React JS এর ভিতরে একটী Component তৈরি করে তা parant commponent এ দেখানোর নিয়ম । */

function Person() {
  return (
    <h1> My name is ALVI . I am 25 old . i have 100$ with me .</h1>
  )
}










//// ১। React JS এ কোনো Data কে Dynamic ভাবে দেখানোর নিয়ম ।

function Device() {
  const name = 'Samsumg';
  const price = '50000$'
  return (
    <h1> I got a laptop . So the laptop is made by {name} and the laptop pice is {price} . </h1>
  )
}










//// ২। React JS এ Destructure এর মাধ্যমে একই Component একাধিকবার ব্যবহার করে এ বিভিন্ন Data প্রদর্শন করার নিয়ম ।

function Destructure({ Name = 'Not Found' /* Default Data */, /* Default Data */ Score = '0' }) {
  return (
    <center>
      <section className='Destructure'>
        <h2>This is a Student</h2>
        <p><b>Student Name : {Name}</b></p>
        <p><b>Student Score : {Score}</b></p>
      </section>
    </center>
  )
}










//// ৩। React JS এ Destructure এর মাধ্যমে Conditional Rendering (if else) করার নিয়ম ।

function ConditionalRendering({ isDone, Task }) {

  if (isDone) {
    return <li> Finished The : {Task}</li>
  }
  return <li> Complete The {Task}</li>


  // 1. Turnari Operator short verstion of if else

  /* <li> {isDone ? 'Finished' : 'Complete The'} : {Task}</li>  */


  // 2. Turnari Operator short verstion of if else with && Operator

  /* <li> {isDone && 'Finished : ' } {Task} </li>  */


  // 3. Turnari Operator short verstion of if else with || Operator

  /* <li> {isDone || 'Finished : ' } {Task} </li> */


  // 3. Turnari Operator if else with the use of variable (Let)

  /* 
  
    let listItem;

    if (isDone) {
      listItem <li> Finished The : {Task}</li>
    }
    else {
      listItem <li> Complete The {Task}</li>
    }

    return listItem;
  
  */

}










//// ৪। React JS এ map() method এর ব্যবহার ।


// 1. frist normal example 

const friends = ['alvi', 'jhon', 'whick', 'sam', 'justin']

function Friends({ friends }) {

  return <li> {friends} </li>

}


// 2. secoend advance example 

const myPlayers = [
  { Name: 'alvi', age: 21 },
  { Name: 'jhon', age: 22 },
  { Name: 'whick', age: 23 },
  { Name: 'sam', age: 24 },
  { Name: 'justin', age: 25 }
]

function Players({ players }) {
  return (
    <section>
      <h2> Palyer Name : {players.Name} </h2>
      <h3> Player Age : {players.age} </h3>
    </section>
  )
}










//// ৫। React JS এ কোনো Event Handel করার নিয়ম ।


// 1. Event Hnadel With Parameter .

function eventHandeler2(Number) {
  alert(Number + 5);
}

// 2. Event Handel Without Parameter .

function eventHandeler1() {
  alert('HELLO KING ALVI !!')
}










//// ৬। React JS এ কোনো কিছুর মান যদি Dynamically পরিবর্তন করতে চাই তাহলে আমাদেরকে useState() Method ব্যবহার করতে হবে ।

function UseState() {

  let [count, setCount] = useState(0);

  const handelPlushCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const handelMinusCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  if (count < 0) {
    count = 0;
  }

  return (
    <section>
      <h1>Number Count : {count}</h1>
      <button onClick={handelPlushCount}>Increase Number</button>
      <button onClick={handelMinusCount}>Decrease Number</button>
    </section>
  )
}

export default App