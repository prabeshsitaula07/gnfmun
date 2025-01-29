import student1 from '../../assets/student1.jpg'

export default function Description() {
  return (
    <div className="flex px-12 justify-between items-center">
      <div className='flex gap-4'>
        <img src={student1} alt="student1" className='' />
        <img src={student1} alt="student2" className='' />
      </div>
      <div>
        
      </div>
    </div>
  )
}
