"use client";

import Navbar from '@/components/navbar';
import { Mail, ExternalLink, Code, Users, Lightbulb, GitBranch, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar title="About" />
            
            <div className="container mx-auto px-6 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="glass-card p-12 mb-8">
                        <h1 className="text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                            <Sparkles className="w-12 h-12 text-blue-300" />
                            Algorithm Visualizer
                            <Sparkles className="w-12 h-12 text-blue-300" />
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Where complex algorithms become crystal clear through interactive visualizations
                        </p>
                    </div>
                </div>

                {/* Main Intent Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Lightbulb className="w-8 h-8 text-yellow-400" />
                            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                        </div>
                        <p className="text-gray-200 leading-relaxed mb-4">
                            Algorithm Visualizer was born from a simple yet powerful idea: <span className="text-blue-300 font-semibold">learning algorithms shouldn't be abstract and intimidating</span>. 
                        </p>
                        <p className="text-gray-200 leading-relaxed mb-4">
                            As developers, we know the struggle of understanding complex algorithms through textbooks and static diagrams. That's why we created this interactive platform that transforms abstract concepts into <span className="text-green-300 font-semibold">visual, step-by-step experiences</span>.
                        </p>
                        <p className="text-gray-200 leading-relaxed">
                            Every visualization is crafted to bridge the gap between theory and understanding, making algorithms accessible to learners at every level.
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="w-8 h-8 text-purple-400" />
                            <h2 className="text-3xl font-bold text-white">What We Offer</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                                <p className="text-gray-200">Interactive pathfinding algorithms (Dijkstra, A*, BFS, DFS)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                <p className="text-gray-200">Sorting algorithm comparisons and visualizations</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                                <p className="text-gray-200">Recursion trees and mathematical algorithms</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                <p className="text-gray-200">Classic problems like N-Queens and Game of Life</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                                <p className="text-gray-200">Prime number algorithms and computational geometry</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Target Audience Section */}
                <div className="glass-card p-8 mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Users className="w-8 h-8 text-blue-400" />
                        <h2 className="text-3xl font-bold text-white">Who Can Benefit?</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-300">CSE</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Computer Science</h3>
                            <p className="text-gray-300 text-sm">Core algorithms and data structures</p>
                        </div>

                        <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-300">SWE</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Software Engineering</h3>
                            <p className="text-gray-300 text-sm">Algorithm optimization and design</p>
                        </div>

                        <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-purple-300">ICE</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Information & Communication</h3>
                            <p className="text-gray-300 text-sm">Network algorithms and optimization</p>
                        </div>

                        <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-yellow-300">ECE</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Electronics & Communication</h3>
                            <p className="text-gray-300 text-sm">Signal processing algorithms</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-200 text-lg">
                            <span className="text-blue-300 font-semibold">Perfect for students</span> taking courses in 
                            <span className="text-green-300 font-semibold"> Data Structures and Algorithms</span>, 
                            regardless of your engineering discipline!
                        </p>
                    </div>
                </div>

                {/* Contribution Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <GitBranch className="w-8 h-8 text-green-400" />
                            <h2 className="text-3xl font-bold text-white">Join the Journey</h2>
                        </div>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            This project thrives on <span className="text-green-300 font-semibold">community contributions</span>! 
                            Whether you're a student who found a bug, a developer with optimization ideas, or an educator with new algorithm suggestions.
                        </p>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            <span className="text-blue-300 font-semibold">You are cordially invited</span> to be part of this educational revolution. 
                            Every pull request, no matter how small, helps make algorithms more accessible to learners worldwide.
                        </p>
                        <div className="bg-white/5 border border-green-400/30 rounded-lg p-4">
                            <p className="text-green-300 font-semibold mb-2">How to contribute:</p>
                            <ul className="text-gray-200 space-y-1 text-sm">
                                <li>• Fork the repository on GitHub</li>
                                <li>• Add new algorithms or improve existing ones</li>
                                <li>• Enhance UI/UX or fix bugs</li>
                                <li>• Submit a pull request with your changes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-8 h-8 text-red-400" />
                            <h2 className="text-3xl font-bold text-white">Continuous Evolution</h2>
                        </div>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            Algorithm Visualizer is <span className="text-purple-300 font-semibold">not a finished product</span> — it's a 
                            <span className="text-blue-300 font-semibold"> living, breathing educational platform</span> that grows with the community.
                        </p>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            I continuously update the website with new algorithms, improved visualizations, and enhanced user experiences. 
                            This is an <span className="text-yellow-300 font-semibold">ongoing journey</span> of making computer science education more engaging and accessible.
                        </p>
                        <div className="bg-white/5 border border-blue-400/30 rounded-lg p-4">
                            <p className="text-blue-300 font-semibold mb-2">Coming soon:</p>
                            <ul className="text-gray-200 space-y-1 text-sm">
                                <li>• More graph algorithms</li>
                                <li>• Dynamic programming visualizations</li>
                                <li>• Advanced data structures</li>
                                <li>• Interactive coding challenges</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="glass-card p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Let's Connect & Collaborate</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <Link 
                            href="mailto:hello@ashisrahman.dev" 
                            className="group flex items-center justify-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                        >
                            <Mail className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-white font-semibold">Email Me</p>
                                <p className="text-gray-300 text-sm">hello@ashisrahman.dev</p>
                            </div>
                        </Link>

                        <Link 
                            href="https://linktr.ee/AshisRahman" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-300"
                        >
                            <ExternalLink className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-white font-semibold">Find Me Online</p>
                                <p className="text-gray-300 text-sm">linktr.ee/AshisRahman</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-gray-300 italic">
                            "Every algorithm has a story. Let's make those stories visible, interactive, and unforgettable."
                        </p>
                        <p className="text-blue-300 font-semibold mt-4">— Ashis Rahman, Creator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
