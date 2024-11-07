import { useState } from "react";
const CreateRoomForm = ({uuid}) => {

    const [roomId, setRoomId] = useState(uuid());
    const [name, setName] = useState("")

    const handleCreateRoom = (e) => {
        e.preventDefault()
        
        const roomData = {
            name, 
            roomId,
            userId: uuid(),
            host: true,
            presenter: true ,
        }

        console.log(roomData);
    }

    return (
    <form className="form col-md-12 mt-5">
        
        <div className="form-group">
            <input 
                type="text" 
                className="form-control my-2" 
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
                
        </div>

        <div className="form-group d-flex align-items-center justify-content-center border rounded-2 p-1">
            <div className="input-group">
                <input 
                    type="text" 
                    value={roomId}
                    className="form-control my-2 border-0 " 
                    disabled 
                    placeholder="Generate room code"/>
            </div>
            <div className="input-group-append d-flex">
                <button className="btn btn-primary me-1" onClick = {() =>setRoomId(uuid)} type="button">
                    generate
                </button>
                <button className="btn btn-outline-danger me-2 btn-sm" type="button">copy</button>
            </div>
        </div>
        <button type="submit" onClick={handleCreateRoom} className="mt-3 btn btn-primary btn-block form-control">Generate Room</button>

    </form>

    );
}

export default CreateRoomForm;