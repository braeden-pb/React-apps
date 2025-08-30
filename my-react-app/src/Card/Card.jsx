import profilePic from './assets/pfp.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture"></img>
            <h2 className="card-title">Braeden</h2>
            <p className="card-text">I student at Western University and study Computer Science. I like to go to the gym and to go on walks outdoors.</p>
        </div>
    );
}

export default Card