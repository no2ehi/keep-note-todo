import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { initialColorPalette } from '../Constants/colorPalette';


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function DropDownColorPalette({ setColor, color }) {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className={`inline-flex w-full justify-between rounded-md border-gray-300 bg-slate-100 px-3 py-4  text-gray-700  focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-slate-800 dark:text-slate-200`}>
        <div className={`${color} w-6 h-6 rounded-full`}></div> colors 
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
          <div className="py-3 px-3 flex">
            {initialColorPalette.map((color) => (
                <Menu.Item key={color.code}>               
                  <div
                    onClick={() => setColor(color.code)}
                   className={`mx-0.5 w-7 h-7 ${color.code} rounded-full border-2 shadow hover:border-slate-800 hover:border-slate-600 cursor-pointer`}></div>            
                </Menu.Item>
            ))}    
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
