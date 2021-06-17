import Carousel from '../components/Carousel'
import NavBar from '../components/NavBar';
import Title from '../components/Title'

const HomePage = () => (
    <div className="vh-100">
        <div className="bg-secondary">
            <Title />
            <NavBar />
            <Carousel />
        </div>
        <div className="bg-secondary pt-1 pb-3">
            <p className="text-sm-center text-white">
                The Walking Buddy helps you partner with a person on your next park visit.
                Do you feel that you are bored when trying to work out in the park? <br />
                There is no one that you can interact with? Worry no more,
                The Walking Buddy is here to solve all these problems. <br />
                It will help you select a Park and a suitable time to book your slot,
                and you can either pair up with a person or let them pair up with you. <br />
            </p>
        </div>
    </div>
);

export default HomePage;