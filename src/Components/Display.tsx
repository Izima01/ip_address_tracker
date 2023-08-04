import '../App.css';

type ipInterface = {
    ipAdd: string,
    location: string,
    timeZone: string,
    isp: string
};

type Props = {
    showDisplay: boolean,
    ipdata: ipInterface
}

const Display = (props: Props) => {
    const { ipAdd, location, timeZone, isp } = props.ipdata;

  return (
    <section style={{ zIndex: 1000 }} className={`${props.showDisplay ? 'block' : 'hidden'} shadow-lg fixed left-[8.5%] right-[8.5%] top-44 md:top-[12rem] w-10/12 mx-auto bg-white rounded-2xl p-4 md:p-6`}>
        <div className='displayBody text-center md:text-left md:gap-0 gap-4 relative grid'>
            <div className="address mx-auto">
                <p className="text-slate-500 text-xs uppercase tracking-widest">IP Address</p>
                <h4 className="font-bold text-xl md:text-lg">{ipAdd || "192.212.175.101"}</h4>
            </div>
            <div className="location mx-auto">
                <p className="text-slate-500 text-xs uppercase tracking-widest">Location</p>
                <h4 className="font-bold text-xl md:text-lg">{location || "Brooklyn, NY 10001"}</h4>
            </div>
            <div className="timeZone mx-auto">
                <p className="text-slate-500 text-xs uppercase tracking-widest">Timezone</p>
                <h4 className="font-bold text-xl md:text-lg">UTC {timeZone || "-05:00"}</h4>
            </div>
            <div className="isp mx-auto">
                <p className="text-slate-500 text-xs uppercase tracking-widest">isp</p>
                <h4 className="font-bold text-xl md:text-lg">{isp || "SpaceX Starlink"}</h4>
            </div>
            <hr className='bg-[#b3b3b3] hidden sm:block rotate-90 absolute w-10 h-[2px] left-[22%]' />
            <hr className='bg-[#b3b3b3] hidden sm:block rotate-90 absolute w-10 h-[2px] left-[44%]' />
            <hr className='bg-[#b3b3b3] hidden sm:block rotate-90 absolute w-10 h-[2px] left-[61%]' />
        </div>
    </section>
  )
}

export default Display