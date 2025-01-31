import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.jpg';

export default function Partner() {
    return (
        <div className='flex p-12'>
            <div className='flex h-fit w-1/2'>
                <img src={partner2} alt="" className='self-end border' />
                <img src={partner1} alt="" className='self-start h- border' />
            </div>
            <div className='w-1/2'>
                <h2>Meet the partners who help us transform lives</h2>
                <p>Businesses and fellow foundations have given their time and support to help us make a difference in children's lives.
                    <ul>
                        <li>Davis Thorne and Partners</li>
                        <li>Gold Lion Business Services, Inc.</li>
                        <li>The Savannah Foundation</li>
                        <li>Langtown High School</li>
                        <li>Green Aero Tours</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}
