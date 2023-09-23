import { BoltIcon, SunIcon, ExclamationTriangleIcon} from '@heroicons/react/24/outline'

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2  text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className='flex space-x-4 text-center'>
        <div>
          <div className="flex flex-col items-center mb-5">
            { /*SUn Icon*/}
            <SunIcon className="h-8 w-8" />
            <h2>Example</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the diffrence between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center mb-5">
            { /*Bolt Icon*/}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Modal to use</p>
            <p className="infoText">Messages are stored in Firebase</p>
            <p className="infoText">Tailwind is the best inline CSS sytling</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center mb-5">
            { /*ExclamationTriangleIcon Icon*/}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Not build to replace ChatGPT"</p>
            <p className="infoText">"May occasionally generate incorrect information"</p>
            <p className="infoText">"Clone by Samuel Bamigboye in 2023"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Homepage;
