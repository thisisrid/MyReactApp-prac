import { useEffect, useState } from 'react';

/* eslint-disable react/destructuring-assignment */
const style = {
    padding: '10px',
    margin: '20px',
    backgroundColor: 'whitesmoke',
};
const profileStyle = {
    padding: '10px',
    margin: '8px',
    border: '2px solid grey',
    borderRadius: '10px',
    backgroundColor: 'lightGrey',
    boxShadow: '10px 5px 10px',
    width: '250px',
    height: '300px',
    float: 'left',
};
const profInfo = [
    { name: 'Md Ridwanul Alam', roll: '2902' },
    { name: 'Md Irfanul Alam', roll: '3309' },
    { name: 'Md Ashikul Alam', roll: '4430' },
    { name: 'Md Junayedul Alam', roll: '4880' },
    { name: 'Md Zayanul Alam', roll: '4438' },
    { name: 'Md Shakil', roll: '4438' },
    { name: 'Md Anwar Ali', roll: '4778' },
    { name: 'Md Abdur Rahman', roll: '7388' },
    { name: 'Md Fawzul Karim', roll: '4656' },
];
function App() {
    return (
        <div style={style}>
            <CallApi />
            <Counter />
            {/* conventional */}
            {/* <Profile info={profInfo[0]} />
            <Profile info={profInfo[1]} />
            <Profile info={profInfo[2]} />
            <Profile info={profInfo[3]} />
            <Profile info={profInfo[4]} /> */}

            {/* Dynamic Way Using Map */}
            {profInfo.map((pd) => (
                <Profile info={pd} />
            ))}
        </div>
    );
}

// Api Call and making dynamic div
function CallApi() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div style={{ height: '350px' }}>
            <h2>Total Users: {users.length}</h2>
            {users.map((user) => (
                <div
                    style={{
                        border: '2px solid black',
                        margin: '5px',
                        padding: '5px',
                        float: 'left',
                        borderRadius: '10px',
                        backgroundColor: 'lightGrey',
                        boxShadow: '10px 5px 10px',
                    }}
                >
                    <h5>Name: {user.name}</h5>
                    <h5>Email: {user.email}</h5>
                </div>
            ))}
        </div>
    );
}
// Button increase and decrease function method
function Counter() {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);
    return (
        <div>
            <h1>Count: {count}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ab cum doloribus
                illum temporibus ipsam?
            </p>
            <button onClick={increaseCount} type="button" style={{ margin: '5px' }}>
                {' '}
                Increase{' '}
            </button>
            <button onClick={decreaseCount} type="button">
                {' '}
                Decrease{' '}
            </button>
        </div>
    );
}

function Profile(props) {
    const { name, roll } = props.info;

    return (
        <div style={profileStyle}>
            <h3>Name: {name}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ullam expedita quam
                natus iusto, magnam magni consequatur eveniet eum qui.
            </p>
            <small
                style={{
                    display: 'inline-block',
                    border: '3px solid red',
                    padding: '3px',
                    marginBottom: '3px',
                }}
            >
                Roll: {roll}
            </small>
            <br /> <button type="button"> Go To Profile </button>
        </div>
    );
}

export default App;
