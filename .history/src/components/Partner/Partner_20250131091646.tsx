import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.jpg';

export default function Partner() {
    return (
        <div className='flex p-12 gap-6'>
            {/* Left side: Images */}
            <div className='flex h-full gap-4 w-fit'>
                <img src={partner2} alt="Partner 2" className='self-end border h-80' />
                <img src={partner1} alt="Partner 1" className='self-start h-[500px] w-[400px] border' />
            </div>

            {/* Right side: Text */}
            <div className='flex flex-col justify-between'>
                <h2 className="text-6xl font-normal">Meet the partners</> who help us transform lives</h2>
                <p className="text-lg">
                    Businesses and fellow foundations have given their time and support to help us make a difference in children's lives.
                </p>
                <ul className="list-disc ml-6 mt-4 text-lg">
                    <li>Davis Thorne and Partners</li>
                    <li>Gold Lion Business Services, Inc.</li>
                    <li>The Savannah Foundation</li>
                    <li>Langtown High School</li>
                    <li>Green Aero Tours</li>
                </ul>
            </div>
        </div>
    );
}
