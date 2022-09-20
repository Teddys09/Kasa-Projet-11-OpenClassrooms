import bannerHome from '../assets/img/bannerHome.png';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <div className="banner banner-home">
        <img className="img-banner" src={bannerHome} alt="Paysage" />
        <p className="name-home">Chez vous, partout et ailleurs</p>
      </div>
      <div className="card-section">
        <Card />
      </div>
    </div>
  );
};

export default Home;
