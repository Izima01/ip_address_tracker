import TopLayer from './Components/TopLayer';
import './App.css';
import { useState, useEffect } from 'react';
import Display from './Components/Display';
import Map from './Components/Map';
type ipInterface = {
    ipAdd: string,
    location: string,
    timeZone: string,
    isp: string
};

function App() {
  const [ipdata, setIPData] = useState<ipInterface>({} as ipInterface);
  const [latLong, setLatLong] = useState <[number, number]>([50.5, 30.5]);
  const [address, setAddress] = useState("");
  const apiKey = import.meta.env.VITE_ipify_apiKey;
  const [isLoading, setIsLoading] = useState(false);
  const [showDisplay, setShowDisplay] = useState(true);
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  async function getLocation (ip?: string) {
    try {
      setIsLoading(true);
      const res = await fetch(url + (ip ? `&ipAddress=${ip}` : ''));
      const data = await res.json();
      console.log(data);
      setIPData({
        ipAdd: data.ip,
        location: `${data.location.city}, ${data.location.region}`,
        timeZone: data.location.timezone,
        isp: data.isp
      });
      setLatLong([data.location.lat, data.location.lng]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchIP = () => {
    getLocation(address);
  };

  return (
    <div className='flex flex-col h-screen'>
      {isLoading && <h1>Loading now</h1>}
      <TopLayer address={address} setAddress={setAddress} showDisplay={showDisplay} setShowDisplay={setShowDisplay} handleSubmit={searchIP} />
      <Display showDisplay={showDisplay} ipdata={ipdata} />
      <Map  setShowDisplay={setShowDisplay} latLong={latLong} />
    </div>
  )
}

export default App
