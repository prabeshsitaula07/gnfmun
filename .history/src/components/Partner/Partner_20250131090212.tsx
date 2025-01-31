import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.jpg';

export default function Partner() {
  return (
    <div className='flex'>
      <div className='flex'>
        <img src={partner2} alt="" className='self-end' />
        <img src={partner1} alt="" className='self-start' />
      </div>
      <div></div>
    </div>
  )
}
