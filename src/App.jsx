import { useEffect, useState } from 'react';
import './App.css'
import RestCountries from './Rest Countries/RestCountries';

function App() {

    /* How to create a Component in React JS and display it in the Parent Component. */

    return (
        <center>

            <Component></Component>

            <Device></Device>

            <Destructure Name='KING ALVI' Score='100'></Destructure>

            <Destructure Name='JHON WICK' Score='50'></Destructure>

            <Destructure></Destructure>

            <ConditionalRendering isDone={true} Task={'HTML'}></ConditionalRendering>

            <ConditionalRendering isDone={true} Task={'CSS'}></ConditionalRendering>

            <ConditionalRendering isDone={true} Task={'JAVASCRIPT'}></ConditionalRendering>

            <ConditionalRendering isDone={false} Task={'REACT JS'}></ConditionalRendering>

            <ConditionalRendering isDone={false} Task={'NEXT JS'}></ConditionalRendering>

            {/* Usage of the map() Method in React JS. */}

            {
                // Normal Mapping
                friends.map(friend => <Friends friends={friend} ></Friends>)
            }

            {
                // Advanced Mapping
                myPlayers.map(player => <Players key={player.id} players={player}></Players>)
            }

            {/* Example Of Handeling A Event Through Button */}
            <button onClick={eventHandeler1}>FIRST CLICK</button>

            {/* Example Of Anonymous Function */}
            <button onClick={() => eventHandeler2(5)}> SECOND CLICK</button>

            <UseState></UseState>

            <LoadAPIData></LoadAPIData>

            <RestCountries></RestCountries>

        </center>
    )
}





/* How to create a Component in React JS and display it in the Parent Component. */
function Component() {
    return (
        <h1> My name is ALVI. I am 25 years old. I have $100 with me. </h1>
    )
}










/* 1. How to dynamically display data in React JS. */
function Device() {
    const name = 'Samsung'
    const price = '$50000'
    return (
        <h1> I got a laptop. The laptop is made by {name} and costs {price}. </h1>
    )
}










/* 2. How to use Destructuring in React JS to reuse the same Component multiple times with different data. */
function Destructure({ Name = 'Not Found', Score = '0' }) {
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










/* 3. How to use Destructuring for Conditional Rendering (if-else) in React JS. */
function ConditionalRendering({ isDone, Task }) {

    if (isDone) {
        return <li> Finished The: {Task}</li>
    }
    return <li> Complete The: {Task}</li>

    //// 1. Short version of if-else using ternary operator ////
     <li> {isDone ? 'Finished' : 'Complete The'} : {Task}</li>

    //// 2. Short version of if-else using ternary operator with && Operator ////
     <li> {isDone && 'Finished : ' } {Task} </li>

    //// 3. Short version of if-else using ternary operator with || Operator ////
     <li> {isDone || 'Finished : ' } {Task} </li>

    //// 4. If-else using a variable (let) ////
    let listItem;
    if (isDone) {
        listItem = <li> Finished The: {Task} </li>;
    } else {
        listItem = <li> Complete The: {Task} </li>;
    }
    return listItem;
}










/* 4. How to use the map() method in React JS. */

//// 1. First Normal Example ////
const friends = ['alvi', 'jhon', 'wick', 'sam', 'justin']

function Friends({ friends }) {
    return <li> {friends} </li>
}

//// 2. Second Advanced Example ////
const myPlayers = [
    { id: 1, Name: 'alvi', age: 21 },
    { id: 2, Name: 'jhon', age: 22 },
    { id: 3, Name: 'wick', age: 23 },
    { id: 4, Name: 'sam', age: 24 },
    { id: 5, Name: 'justin', age: 25 }
]

function Players({ players }) {
    return (
        <section>
            <h2> Player Name : {players.Name} </h2>
            <h3> Player Age : {players.age} </h3>
        </section>
    )
}










/* 5. How to handle Events in React JS. */

//// 1. Event Handle With Parameter. ////
function eventHandeler2(Number) {
    alert(Number + 5);
}

//// 2. Event Handle Without Parameter. ////
function eventHandeler1() {
    alert('HELLO KING ALVI !!')
}










/* 6. How to dynamically change or display values in React JS using the useState() method. */
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

    const countStyle = {
        border: '2.5px solid purple',
        width: '25vw',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }

    return (
        <section style={countStyle}>
            <h1>Number Count : {count}</h1>
            <button onClick={handelPlushCount}>Increase Number</button>
            <button onClick={handelMinusCount}>Decrease Number</button>
        </section>
    )
}










/* 7. How to load data from the browser or an API in React JS using the useEffect() method. */
function LoadAPIData() {

    const [API, laodAPI] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => laodAPI(data))
    }, [])

    return (
        <section className='Destructure'>
            <h1>Total Users : {API.length}</h1>

            {
                API.map(userData => <UsersData key={userData.id} usersData={userData}></UsersData>)
            }

            <br /><br />

        </section>
    )
}

//// Example Of Destructuring API Data Using the map() Method. ////
function UsersData({ usersData }) {

    const { name, email, phone } = usersData;

    return (
        <div>
            <hr />
            <h3>User Name : {name}</h3>
            <h5>1. User Email : {email}</h5>
            <h5>2. User Phone Number : {phone}</h5>
            <hr />
        </div>
    )
}

export default App
