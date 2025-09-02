import { CustomSelect } from '@/components/custom-select';
import { Button } from '@/components/ui/button';
import { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h2>
            
                <CustomSelect
                    title="Select Algorithm"
                    options={this.props.algorithms}
                    onChange={this.props.onAlgoChanged}
                />
                <CustomSelect
                    title="Select Maze Division"
                    options={this.props.mazes}
                    onChange={this.props.onMazeChanged}
                />
                <Button className="m-1" onClick={this.props.onClearPath}>Clear Path</Button>
                <Button className="m-1" onClick={this.props.onClearBoard}>Clear Board</Button>
                <Button className="w-full" onClick={this.props.onCreateMaze}>Create Maze</Button>
                <Button className="w-full" onClick={this.props.onVisualize}>Visualize</Button>
            </div>
        );
    }
}

export default Menu;