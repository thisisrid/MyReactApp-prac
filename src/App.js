/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';

/* eslint-disable react/destructuring-assignment */
const bodyStyle = {
    padding: '10px',
    // margin: '0 auto',
    backgroundColor: 'whitesmoke',
};
const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '3px solid black',
    borderRadius: '50%',
};
const profileStyle = {
    padding: '10px',
    margin: '10px',
    border: '2px solid grey',
    borderRadius: '10px',
    backgroundColor: 'lightGrey',
    boxShadow: '10px 5px 10px',
    width: '300px',
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto auto',
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
        <div style={bodyStyle}>
            <Counter />
            <Users />

            <CallApi />

            {/* Dynamic Way Using Map */}
            {profInfo.map((pd) => (
                <Profile info={pd} />
            ))}
        </div>
    );
}

// another api parctice
function Users() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=24')
            .then((res) => res.json())
            .then((data) => setUser(data.results));
    }, []);
    return user.map((element) => (
        <div style={profileStyle}>
            <div>
                <img style={imageStyle} src={element.picture.large} alt="image" />
                <h4>
                    Name: {element.name.title} {element.name.first} {element.name.last}
                </h4>
                <p>Cell Phone: {element.cell}</p>
                <small>Email: {element.email}</small>
                <p>Country: {element.location.country}</p>
                <p>City: {element.location.city}</p>
                <p>Gender: {element.gender}</p>
            </div>
        </div>
    ));
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
        <div>
            <h2>Total Users: {users.length}</h2>

            {users.map((user) => (
                <div style={profileStyle}>
                    <div>
                        <h5>Name: {user.name}</h5>
                        <h5>Email: {user.email}</h5>
                    </div>
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
            <div>
                <h3>Name: {name}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ullam expedita
                    quam natus iusto, magnam magni consequatur eveniet eum qui.
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
        </div>
    );
}

export default App;
