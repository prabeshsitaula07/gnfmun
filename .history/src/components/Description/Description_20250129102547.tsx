import student1 from '../../assets/student1.jpg'

export default function Description() {
    return (
        <div className="flex flex-col lg:flex-row justify-between px-12 min-h-fit h-screen py-12 bg-blue-50">
            <div className="lg:flex lg:gap-4 lg:flex-row w-1/2">
                <img src={student1} alt="student1" className="self-end h-[450px]" />
                <img src={student1} alt="student2" className="self-start h-[450px]" />
            </div>
            <div className='lg:w-1/2 flex flex-col justify-between'>
                <h3 className='text-7xl text-gray-900'>The path to global change begins with a single child</h3>
                <br />
                <div className="flex-grow text-gray-700 text-xl pt-10">
                    <p>Sadly, not every kid grows up in a positive environment. The Lily River Children's Foundation is committed to helping the most vulnerable children, providing them with protection, education, and support.
                    <br /><br />
                    We are committed to transforming their lives because we know that it will change the world we live in.
                    <br /><br />
                    Through our various programs and initiatives, we aim to break the cycle of poverty, empower children, and equip them with the tools they need for a brighter future. By providing education, healthcare, and emotional support, we ensure that every child has the opportunity to thrive and contribute positively to their communities.
                    </p>
                </div>
            </div>
        </div>
    )
}
