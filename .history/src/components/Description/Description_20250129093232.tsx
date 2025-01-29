import student1 from '../../assets/student1.jpg'

export default function Description() {
    return (
        <div className="">
            <div className=''>
                <img src={student1} alt="student1" className="align-top" />
                <img src={student1} alt="student2" className="align-bottom" />
            </div>
            <div>
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
