import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h2>Esports teams</h2>
      <Card name="Global esports" src="https://yt3.ggpht.com/ytc/AKedOLQzQjkvOeDL0BLL26kTB9xBzjOTUEGm9bA0bvDW-w=s900-c-k-c0x00ffffff-no-rj"/>
      <Card name="Enigma gaming" src="https://cdn.thespike.gg/Teams%25202%2Fenigmagaming_1613140321069.png"/>
      <Card name="Velocity Gaming" src="https://yt3.ggpht.com/sb1DjHoMigVOA4ovkQgzGASTzuBMSO2CK6hswtjxROJkTH7sqIDAfMD4FAEkBbXLtWd5zTRJNA=s900-c-k-c0x00ffffff-no-rj"/>
      <Card name="Soul" src="https://cdn1.dotesports.com/wp-content/uploads/2020/06/16114729/145562.jpg"/>
    </div>
  );
}

export default App;
