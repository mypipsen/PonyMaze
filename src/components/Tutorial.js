import Joyride from 'react-joyride'

export default function Tutorial () {

  const steps = [
    {
      target: '.object__pony',
      content: 'You are here!',
      disableBeacon: true
    },
    {
      target: '.object__domokun',
      content: 'This the Domokun. He will eat you, if he catches you!',
      disableBeacon: true
    },
    {
      target: '.object__end-point',
      content: 'This the exit!',
      disableBeacon: true
    },
  ]

  return (
    <Joyride steps={steps}/>
  )

}