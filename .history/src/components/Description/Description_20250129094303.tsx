import student1 from '../../assets/student1.jpg'

export default function Description() {
    return (
        <div className="flex flex-col lg:flex-row justify-between px-12 min-h-fit h-screen py-12 bg-blue-50">
            <div className="lg:flex lg:gap-4 lg:flex-row">
                <img src={student1} alt="student1" className="self-end h-[500px]" />
                <img src={student1} alt="student2" className="self-start h-[500px]" />
            </div>
            <div>
                h
            </div>
        </div>
    )
}