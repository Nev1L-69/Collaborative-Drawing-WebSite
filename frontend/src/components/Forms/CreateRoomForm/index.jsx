const CreateRoomForm = () => {
    return (
    <form className="form col-md-12 mt-5">
        
        <div className="form-group">
            <input type="text" className="form-control my-2" placeholder="Enter your name"></input>
        </div>

        <div className="form-group d-flex align-items-center justify-content-center border rounded-2 p-1">
            <div className="input-group">
                <input type="text" className="form-control my-2 border-0 " disabled placeholder="Generate room code"></input>
            </div>
            <div className="input-group-append d-flex">
                <button className="btn btn-primary me-1" type="button">generate</button>
                <button className="btn btn-outline-danger me-2 btn-sm" type="button">copy</button>
            </div>
        </div>
        <button type="submit" className="mt-3 btn btn-primary btn-block form-control">Generate Room</button>

    </form>

    );
}

export default CreateRoomForm;