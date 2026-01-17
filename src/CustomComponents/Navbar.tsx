import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
function Navbar() {
    return (
        <div className="bg-white w-full p-3 mb-3  z-10 border-b border-1/ border-gray-200 flex justify-between items-center ">
            <div className='flex justify-between gap-2 items-center ml-4'>
                <div className='p-2 bg-indigo-600 rounded-xl'>
                    <GraduationCap className='text-white text-xl' />
                </div>
                <div className='font-bold text-xl'>
                    CA MONK
                </div>
            </div>
            <div className='flex-1 flex justify-center '>
                <div className="flex gap-10 items-center">
                    <div>Tools</div>
                    <div>Practice</div>
                    <div>Events</div>
                    <div>Job Boards</div>
                    <div>Points</div>
                </div>
            </div>
            <div className='flex justify-center items-center mr-4'>
                <Button variant={"monk"} >Profile</Button>
            </div>
        </div>
    )
}

export default Navbar