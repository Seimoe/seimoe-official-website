"use client";
import React, { useState, useEffect } from 'react';
import {Menu, X, Search, Eye, Brain, ChevronRight, MessageSquare, Globe, Zap, Moon, Sun} from 'lucide-react';
import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image src="/seimoe-logo.png" alt="Seimoe Logo" className="max-h-10 w-auto rounded-full" />
                    <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        Seimoe
                    </span>
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">功能</a>
                    <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">服务</a>
                    <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">关于希茉</a>
                </div>
            </nav>
        </header>
    );
};

const Hero = () => (
    <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="leading-normal text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    遇见希茉，
                    <br />

                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            可爱的AI助手
          </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    无论是日常对话、信息搜索，还是智能处理，希茉都将成为你的得力助手。
                </p>
                <div className="flex space-x-4">
                    <a href="/abc"
                       className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:opacity-90 flex items-center">
                        立即体验
                        <ChevronRight className="ml-2" size={20}/>
                    </a>
                    <a href="/about"
                       className="px-8 py-3 border-2 border-orange-500 text-orange-500 dark:border-orange-400 dark:text-orange-400 rounded-full hover:bg-orange-50 dark:hover:bg-orange-950/20">
                        了解更多
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const ServiceCard = ({icon: Icon, title, description, link}) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
            <Icon className="text-orange-500 dark:text-orange-400" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a
            href={link}
            className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-500 flex items-center"
        >
            访问服务
            <ChevronRight size={16} className="ml-1" />
        </a>
    </div>
);

const Services = () => (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">探索希茉的服务</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12">多样化的AI服务，满足你的不同需求</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    icon={MessageSquare}
                    title="智能对话"
                    description="与希茉进行自然流畅的对话，获得准确的答案和贴心的帮助"
                    link="/abc"
                />
                <ServiceCard
                    icon={Search}
                    title="Seimoe Search"
                    description="AI驱动的智能搜索引擎，为你提供更精准的搜索结果"
                    link="/abc"
                />
                <ServiceCard
                    icon={Eye}
                    title="Sanuki OCR"
                    description="由希茉的姐姐Sanuki提供的智能图片文字识别服务，轻松提取图片中的文字内容"
                    link="https://ocr.seimoe.com"
                />
            </div>
        </div>
    </section>
);

const Features = () => (
    <section id="features" className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">希茉的能力</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12">独特的优势，让希茉成为你的最佳助手</p>
            <div className="grid md:grid-cols-3 gap-8">
                {/* 智能理解 */}
                <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Brain className="text-orange-500 dark:text-orange-400" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">前沿模型</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            总是第一时间采用最新、最先进的AI模型和技术
                        </p>
                    </div>
                </div>

                {/* 多语言支持 */}
                <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Globe className="text-blue-500 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">多场景支持</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            支持多种场景，例如写作、翻译、数据处理等
                        </p>
                    </div>
                </div>

                {/* 持续学习 */}
                <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Zap className="text-green-500 dark:text-green-400" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">持续进化</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            通过不断学习和更新，始终保持最新的知识和能力
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Seimoe</h3>
                    <p className="text-gray-400">可爱的智能AI助手</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">服务</h4>
                    <ul className="space-y-2">
                        <li><a href="/abc" className="text-gray-400 hover:text-white">智能对话</a></li>
                        <li><a href="/abc" className="text-gray-400 hover:text-white">Seimoe Search</a></li>
                        <li><a href="https://ocr.seimoe.com" className="text-gray-400 hover:text-white">Sanuki OCR</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">关于</h4>
                    <ul className="space-y-2">
                        <li><a href="/abc" className="text-gray-400 hover:text-white">关于我们</a></li>
                        <li><a href="/abc" className="text-gray-400 hover:text-white">使用条款</a></li>
                        <li><a href="/abc" className="text-gray-400 hover:text-white">隐私政策</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">联系我们</h4>
                    <p className="text-gray-400">有任何问题？随时联系我们获取帮助</p>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Seimoe AI. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

const App = () => {
    return (
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <Header />
                <main>
                    <Hero />
                    <Services />
                    <Features />
                </main>
                <Footer />
            </div>
    );
};

export default App;