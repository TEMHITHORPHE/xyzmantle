/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { Transition } from '@headlessui/react';
import { memo } from 'react';


export function AnimatedHeadlessUIDisclosurePanel({ children, isOpen }) {
    
    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            {children}
        </Transition>
    )
}

// export memo(AnimatedHeadlessUIDisclosurePanel) ;