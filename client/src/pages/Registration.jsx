import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import styles from "./Registration.module.css"

function Registration() {

    const navigate = useNavigate();

    async function handleLogIn(e) {

        e.preventDefault()

        const formData = new FormData(e.target);

        let formObject = {};
        formData.forEach((value, key) => {
            
            formObject[key] = value;

        });

        let res = await fetch("http://localhost:3000/api/v1/login-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formObject)
        });

        if (res.ok) {

            navigate("/dashboard", { replace: true });

        }

    }

    return (
        <div className={styles['page-container']}>
            <div className={styles['login-form']}>
                <h1>
                    <TypeAnimation
                    sequence={['Hello, Gorlock']}
                    speed={25}
                    cursor={false}
                    />
                </h1>
                <form onSubmit={handleLogIn}>
                    <label 
                    className="input input-lg input-bordered flex items-center gap-2 w-full"
                    htmlFor="webster-email"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className={styles['email-icon']}>
                            <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        
                        <input 
                        autoComplete='off'
                        name="webster-email"
                        type="text" 
                        className="grow" 
                        placeholder="Webster Email" 
                        />
                    </label>
                    <label 
                    className="input input-lg input-bordered flex items-center gap-2 w-full"
                    htmlFor="webster-email-password"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className={styles['password-icon']}>
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                        </svg>
                        <input 
                        autoComplete='off'
                        name="webster-email-password"
                        type="password" 
                        className="grow" 
                        placeholder="Email Password" 
                        />
                    </label>
                    <button className="btn btn-lg btn-primary btn-wide text-xl">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Registration
