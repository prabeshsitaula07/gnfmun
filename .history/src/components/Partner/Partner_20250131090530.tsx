import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.jpg';

export default function Partner() {
  return (
    <div className='flex p-12'>
      <div className='flex h-fit'>
        <img src={partner2} alt="" className='self-end border' />
        <img src={partner1} alt="" className='self-start h-full border' />
      </div>
      <div>
        <h2>Meet the partners who help us transform lives</h2>
        <p>Businesses and fellow foundations have given their time and support to help us make a difference in children's lives.

            <ul>
                <li>Davis Thorne and Partners</li>
            </ul>
        </p>
      </div>
    </div>
  )
}
