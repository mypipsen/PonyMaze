import useDarkMode from 'support/hooks/useDarkMode'

export default function DarkModeToggler () {

  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div className='flex justify-between items-center' onClick={() => setDarkMode(!darkMode)}>
      <div className={`w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${darkMode ? 'bg-green-400' : ''}`}>
        <div className={`bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? 'translate-x-6' : ''}`} />
      </div>
    </div>
  )

}