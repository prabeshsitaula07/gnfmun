import feedback from '../../assets/feedback.jpg'

export default function Testimonials() {
  return (
    <div className="pr-12 bg-blue-50 h-fit flex justify-between">
      <img src={feedback} alt="feedback" className='max-w-1/2' />
      <div className='w-1/2 bg-red-200'>
        <h2>See what our sponsors and volunteers have to say</h2>
        <p>"When I visited Kyrie, I was blown away by the gratitude I received. Seeing how my small monthly donation changed her life was a heartwarming experience."</p>
      </div>
    </div>
  )
}
