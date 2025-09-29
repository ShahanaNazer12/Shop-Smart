const Login=()=>{
    return(
        <div>
            <form action="">
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" placeholder="Enter your name" /> <br /> <br />
                <label htmlFor="gmail"> email</label>
                <input type="email" id="gmail" placeholder="gmail" /> <br /> <br />
                <label htmlFor="ps">PS</label>
                <input type="Password" name="ps" id="ps" /> <br /> <br />
                <button>Login</button>
            </form>
        </div>
    )

}
export default Login;