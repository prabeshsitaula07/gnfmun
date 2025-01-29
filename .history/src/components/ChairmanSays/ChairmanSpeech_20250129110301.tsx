import chairman from '../../assets/chairman.png';

export default function ChairmanSpeech() {
    return (
        <div className='flex px-12 py-12 h-fit justify-between'>
            <img src={chairman} alt='chairman' className='h-[70vh] border' />
            <div>
                <h2>MESSAGE FROM THE  FOUNDER, CHAIRMAN</h2>
                <p>
                    "At the Great Nepal Foundation, we believe that even the smallest actions can create a ripple of change. Together, we can build a future rooted in hope, compassion, and sustainability. Whether it’s protecting our planet, supporting those in need, or empowering the next generation through education, your involvement makes all the difference.  we can protect our beautiful planet and secure a sustainable future for generations to come. Let’s act today, for a better tomorrow.
                    Join us on this journey to create a better world for everyone.
                    Together, we rise."

                    — Damodar Ghimire, Founder, Chairman, Great Nepal Foundation
                </p>
            </div>
        </div>
    )
}
