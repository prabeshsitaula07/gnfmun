import feedback from '../../assets/feedback.jpg'

export default function Testimonials() {
  return (
    <div className="pr-12 bg-blue-50 h-fit flex justify-between">
      <img src={feedback} alt="feedback" className='max-w-1/2' />
      <div className='w-1/2'>
        <h2 className='text-7xl font-light'>See what our <br />sponsors and volunteers <br />have to say</h2>
        <div className='py-10 text-xl font-medium text-gra'>
        <p>"When I visited Kyrie, I was blown away by the gratitude I received. Seeing how my small monthly donation changed her life was a heartwarming experience."</p><br />
        <span className='font-bold text-gray-700'>- Helene P., sponsor since 2009</span>
        </div>
        <div className='py-10'>
        <p>"Spending time with the kids and seeing their happiness as they learn from me is a rewarding experience. Knowing I am helping make their life better in such a small way is an amazing feeling."</p><br />
        <span>- Shawn G., volunteer educator since 2012</span>
        </div>
      </div>
    </div>
  )
}
