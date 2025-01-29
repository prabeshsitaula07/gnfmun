import child1 from '../../assets/child1.jpg';
import tree from '../../assets/tree.jpg';
import volunteer from '../../assets/volunteer.jpg';

export default function MakeDifference() {
    const initiatives = [
        {
            image: child1,
            title: 'Sponsor a child',
            description: 'We provide monetary assistance to children living in poverty all over the world.'
        },
        {
            image: tree,
            title: 'Tree-Plantation Drives',
            description: 'Join us in restoring greenery and reducing carbon footprints.'
        },
        {
            image: volunteer,
            title: 'Volunteering and Public Service',
            description: 'Help us create cleaner, healthier spaces for everyone.'
        }
    ];

    return (
        <div className="min-h-fit px-12 py-12 items-center">
            <h1 className='text-center text-6xl font-normal'>How to make a difference</h1>
            <div className="flex justify-between w-full gap-4">
                {initiatives.map((initiative, index) => (
                    <div key={index}>
                        <img src={initiative.image} alt={initiative.title} className='h-80 w-auto' />
                        <div className='py-4'>
                            <span className='text-xl font-semibold'>{initiative.title}</span>
                            <p className='py-4 text-gray-800'>{initiative.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
