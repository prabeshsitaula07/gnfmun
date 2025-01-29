import student1 from '../../assets/student1.jpg'

export default function Description() {
  return (
    <div className="flex px-12 justify-between items-center relative">
      <div className='flex'>
        <img src={student1} alt="student1" className='absolute top-0' />
        <img src={student1} alt="student2" className='absolute bottom-0' />
      </div>
      <div></div>
    </div>
  )
}
