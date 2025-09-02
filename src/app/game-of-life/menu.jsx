import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';

export default function Menu({ onStart, onStop, onClear }) {
    return (
        <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 space-y-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h2>
        
            {/* <Button className="m-1" >Clear Path</Button> */}
            <Button className="m-1" onClick={onClear}>Clear Board</Button>
            <Button className="w-full" onClick={onStop} >Stop Simulation</Button>
            <Button className="w-full" onClick={onStart} >Start Simulation</Button>
        </div>
    );
}

Menu.propTypes = {
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};