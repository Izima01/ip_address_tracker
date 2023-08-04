import arrow from '../assets/icon-arrow.svg';

type Props = {
    address: string,
    setAddress: React.Dispatch<React.SetStateAction<string>>,
    showDisplay: boolean,
    setShowDisplay: React.Dispatch<React.SetStateAction<boolean>>,
    handleSubmit: ()=>void
}

const TopLayer = (props: Props) => {
    const { address, setAddress, setShowDisplay, handleSubmit, showDisplay } = props;

    return (
        <header className={` ${showDisplay ? 'h-[240px]' : 'h-48'} w-full pt-6 flex flex-col items-center transition duration-300`}>
            <h1 className="font-bold text-white text-3xl mb-8">IP Address Tracker</h1>
            <form
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    setShowDisplay(true);
                    handleSubmit();
                }}
                className='w-10/12 md:w-1/2 lg:w-4/12 mx-auto'
            >
                <div className="inline-flex rounded-lg w-full">
                    <input type="text" name='ipAdress' value={address} required onChange={(e) => setAddress(e.target.value)} className="rounded-s-lg pl-4 py-2 outline-none w-full text-slate-600 font-medium" placeholder='Search for any IP address or domain' />
                    <button className='bg-black rounded-e-lg p-6' type='submit'>
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </form>
        </header>
    );
};

export default TopLayer
