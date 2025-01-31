import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.jpg';

export default function Partner() {
  return (
    <div className='flex p-12'>
      <div className='flex h-fit'>
        <img src={partner2} alt="" className='self-end border' />
        <img src={partner1} alt="" className='self-start h-96 border' />
      </div>
      <div></div>
    </div>
  )
}
