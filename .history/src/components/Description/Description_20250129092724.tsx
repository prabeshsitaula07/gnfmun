import student1 from '../../assets/student1.jpg'

export default function Description() {
  return (
    <div className="flex px-12 justify-between items-center">
      <div className='flex'>
        <img src={student1} alt="" className='' />
        <img src={student1} alt="" />
      </div>
      <div></div>
    </div>
  )
}
