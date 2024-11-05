const JoinRoomForm = () => {
    return (    
    <form className="form col-md-12 mt-5">
        
        <div className="form-group">
            <input type="text" className="form-control my-2" placeholder="Enter your name"></input>
        </div>

        <div className="form-group d-flex align-items-center justify-content-center">
            <input type="text" className="form-control" placeholder="Enter room code"></input>
        </div>
        <button type="submit" className="mt-3 btn btn-primary btn-block form-control">Join Room</button>

    </form>
    );
}

export default JoinRoomForm;