import student1 from '../../assets/student1.jpg'

export default function Description() {
    return (
        <div className="flex flex-col lg:flex-row justify-between px-12 h-screen py-12 bg-blue-50">
            <div className="md:flex md:gap-4 lg: lg:flex-row">
                <img src={student1} alt="student1" className="self-end h-[500px]" />
                <img src={student1} alt="student2" className="self-start h-[500px]" />
            </div>
            <div className="mt-4 lg:mt-0">
                <h3>The path to global change begins with a single child</h3>
                <p>
                    Sadly, not every kid grows up in a positive environment. The Lily River Children's Foundation is committed to helping the most vulnerable children, providing them with protection, education, and support.
                    <br />
                    We are committed to transforming their lives because we know that it will change the world we live in.
                </p>
            </div>
        </div>
    )
}