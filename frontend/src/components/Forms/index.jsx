import "./index.css";
import CreateRoomForm from "./CreateRoomForm";
import JoinRoomForm from "./JoinRoomForm";

const Forms = () => {
    return (
        <div className="row h-100 pt-5 ">
            <div className="col-md-5 mt-5 border p-5 form-box border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
                <h1 className="text-primary fw-bold">Create room</h1>
                <CreateRoomForm />
            </div>
            <div className="col-md-5 mt-5 border p-5 form-box border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
                <h1 className="text-primary fw-bold">Join room</h1>
                <JoinRoomForm />
            </div>
        </div>
    );
}
export default Forms;