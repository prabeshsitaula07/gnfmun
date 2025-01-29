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
        <div className="min-h-fit px-12 py-12 items-center shadow-sm">
            <h1 className='text-center'>How to make a difference</h1>
            <div className="flex justify-between w-full gap-4">
                {initiatives.map((initiative, index) => (
                    <div key={index}>
                        <img src={initiative.image} alt={initiative.title} className='h-80' />
                        <div>
                            <span>{initiative.title}</span>
                            <p>{initiative.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
