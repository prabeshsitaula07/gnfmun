import student1 from '../../assets/student1.jpg'

export default function Description() {
    return (
        <div className="flex flex-col lg:flex-row justify-between px-12 min-h-fit h-screen py-12 bg-blue-50">
            <div className="lg:flex lg:gap-4 lg:flex-row w-1/2">
                <img src={student1} alt="student1" className="self-end h-[500px]" />
                <img src={student1} alt="student2" className="self-start h-[500px]" />
            </div>
            <div className='bg-red-300 w-1/2'>
                <h3 className='text-6xl'>The path to global change begins with a single child</h3>
            </div>
                <p className=''>Sadly, not every kid grows up in a positive environment. The Lily River Children's Foundation is committed to helping the most vulnerable children, providing them with protection, education, and support.
<br />
We are committed to transforming their lives because we know that it will change the world we live in.</p>
        </div>
    )
}