import './SignUp.css';
import NavBar from '../components/NavBar';
import Title from '../components/Title'
import { findListing } from '../mongo';

async function getInputValue() {
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value
    console.log(email + " " + password);
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://shreyshah:Speaker_123@shrey-cluster-0.dwvhl.mongodb.net/Users?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    var user = { email: email, password: password };
    const userLogin = await findListing(client, user);
    console.log(userLogin);
    client.close();
}

const Login = () => (
    <div className="bg-secondary vh-100">
        <Title />
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto align-self-center">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                {/* <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                </div> */}
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => getInputValue()} type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Login;