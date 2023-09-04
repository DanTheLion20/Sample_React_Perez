import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Image1 from "./img/i1.jpg";
import Image2 from "./img/i2.jpg";
import Image3 from "./img/i3.jpg";
import Image4 from "./img/i4.jpe";
import Image5 from "./img/i5.jpg";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";

function App() {

    return (
        <>
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <div className="bg-dark p-5 ">
            <div className="container">
                <h1 className="text-warning">Top 5 Animes of the week: </h1>
            <div className="row">
                <GridItems name="Jujutsu Kaisen" imageFile={Image1} CardText="Text1"></GridItems>
                <GridItems name="Hell's Paradise" imageFile={Image2} CardText="Text2"></GridItems>
                <GridItems name="One Piece" imageFile={Image3} CardText="text3"></GridItems>
                <GridItems name="Chainsaw Man" imageFile={Image4} CardText="text4"></GridItems>
                <GridItems name="Demon Slayer" imageFile={Image5} CardText="text5"></GridItems>
            </div>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default App;