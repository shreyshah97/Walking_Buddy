import './SignUp.css';
import NavBar from '../components/NavBar';
import Title from '../components/Title';

const SearchPage = () => (
    <div className="bg-secondary vh-100">
        <Title />
        <NavBar />
        <div class="container">
            <form action="/" method="POST">
                <div className="form-group">
                    <label for="title" className="text-white mt-3">Park :</label>
                    {/* <input type="text" className="form-control" name="date" placeholder="Enter Park" required /> */}
                    <br />
                    <select id="time" className="p-1" style={{ "width": "100%" }}>
                        <option value="Pecos Park">Pecos Park</option>
                        <option value="Desert Breeze Park">Desert Breeze Park</option>
                        <option value="Meadowbrook Park">Meadowbrook Park</option>
                        <option value="Veterans Oasis Park">Veterans Oasis Park</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="title" className="text-white">Date</label>
                    <input type="date" className="form-control" name="date" placeholder="Enter Date" style={{ "width": "100%" }} required />
                </div>
                <div className="form-group">
                    <label for="title" className="text-white">Time Slot : </label>
                    {/* <input type="time" className="form-control" name="time" placeholder="Enter Time" required /> */}
                    <br />
                    <select id="time" className="p-1" style={{ "width": "100%" }}>
                        <option value="4:00 - 4:30">4:00 - 4:30</option>
                        <option value="4:30 - 5:00">4:30 - 5:00</option>
                        <option value="5:00 - 5:30">5:00 - 5:30</option>
                        <option value="5:30 - 6:00">5:30 - 6:00</option>
                    </select>
                </div>
                <div className="buttons float-right mt-5">
                    <button type="reset" className="btn btn-secondary">Reset</button>
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    </div >
);

export default SearchPage;