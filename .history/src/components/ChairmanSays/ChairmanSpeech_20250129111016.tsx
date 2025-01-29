import chairman from '../../assets/chairman.png';

export default function ChairmanSpeech() {
    return (
        <div className='flex px-12 py-12 h-fit justify-between'>
            <img src={chairman} alt='chairman' className='h-[70vh] border' />
            <div className='w-2/3'>
                <h2 className='text-3xl font-bold pb-4'>MESSAGE FROM THE  FOUNDER, CHAIRMAN</h2>
                <p className='text-center text-xl '>
                    "At the Great Nepal Foundation, we believe that even the smallest actions can create a ripple of change. Together, we can build a future rooted in hope, compassion, and sustainability. Whether it’s protecting our planet, supporting those in need, or empowering the next generation through education, your involvement makes all the difference.  we can protect our beautiful planet and secure a sustainable future for generations to come. Let’s act today, for a better tomorrow. <br /><br />
                    Join us on this journey to create a better world for everyone. <br />
                    Together, we rise." <br />
<br />
                    — Damodar Ghimire, Founder, Chairman, Great Nepal Foundation
                </p>
            </div>
        </div>
    )
}
