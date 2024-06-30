import './App.css';
import Header from "./containers/headers";
import Listing from "./containers/listing";
import Footer from "./containers/footer";

function App() {
    const today = new Date();

    return (
        <div className="App">
            <Header today={today}/>
            <Listing today={today}/>
            <Footer />
        </div>
    );
}

export default App;
