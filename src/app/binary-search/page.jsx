"use client";
import React, { Component } from 'react';
import EntryPoint from "./entryPoint";
import Search from "./search";
import Navbar from '@/components/navbar';

class BinarySearch extends Component {
    state = {
        upper: 100,
        lower: 0,
        max: 100,
        isRunning: false
    }
    render() {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar title={"Binary Search"} />
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800 p-8">
                    {!this.state.isRunning &&
                        <EntryPoint
                            startGame={this.handleStartGame}
                            upper={this.state.upper}
                            setUpper={this.handleSetUpper}
                        />}
                    {this.state.isRunning &&
                        <Search
                            yesButton={this.handleYes}
                            noButton={this.handleNo}
                            upper={this.state.upper}
                            lower={this.state.lower}
                            max={this.state.max}
                            onRestart={this.handleRestart}
                        />
                    }
                </div>
            </div>
        );
    }
    handleStartGame = () => {
        this.setState({ isRunning: true });
    }
    handleRestart = () => {
        this.setState({ isRunning: false, upper: 100, lower: 0 });
    }
    handleYes = () => {
        const mid = Math.floor((this.state.upper + this.state.lower) / 2);
        this.setState({ lower: mid + 1 });
    }
    handleNo = () => {
        const mid = Math.floor((this.state.upper + this.state.lower) / 2);
        this.setState({ upper: mid });
    }
    handleSetUpper = (up) => {
        let val = parseInt(up);
        if (val <= 0) {
            val = 100;
        }
        this.setState({ upper: val, max: val });
    }
}

export default BinarySearch;