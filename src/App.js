/* eslint-disable react/destructuring-assignment */
const style = {
    padding: '10px',
    margin: '20px',
};
const profInfo = [
    { name: 'Md Ridwanul Alam', roll: '2902' },
    { name: 'Md Irfanul Alam', roll: '3309' },
    { name: 'Md Ashikul Alam', roll: '4430' },
    { name: 'Md Junayedul Alam', roll: '4880' },
    { name: 'Md Zayanul Alam', roll: '4438' },
];
function App() {
    return (
        <div style={style}>
            <Profile info={profInfo[0]} />
            <Profile info={profInfo[1]} />
            <Profile info={profInfo[2]} />
            <Profile info={profInfo[3]} />
            <Profile info={profInfo[4]} />
        </div>
    );
}

function Profile(props) {
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
