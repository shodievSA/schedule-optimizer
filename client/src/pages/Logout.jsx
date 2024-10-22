import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation";

function Logout() {

    const modalRef = useRef(null);
    const navigate = useNavigate();

    async function logout() {

        let res = await fetch("http://localhost:3000/api/v1/logout-user");

        if (res.ok) {
            navigate("/registration", { replace: true })
        }

    }

    return (
        <div className="h-full flex flex-col justify-center items-center gap-y-12">
            <h1 className="text-4xl font-medium">
                <TypeAnimation 
                    sequence={['We hope to see you come back soon!']}
                    speed={30}
                    cursor={false}
                />
            </h1>
            <button 
            className="btn btn-lg btn-neutral"
            onClick={() => modalRef.current.showModal()}
            >Logout</button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-md btn-circle btn-ghost absolute right-4 top-4">✕</button>
                    </form>
                    <h3 className="font-bold text-xl">Important!</h3>
                    <p className="py-4 text-lg">Are you sure you want to logout?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-neutral">Close</button>
                        </form>
                        <button 
                        className="btn btn-neutral"
                        onClick={logout}>Confirm</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Logout