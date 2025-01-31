"use client";
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
            <div className="text-center px-4">
                {/* 圆形图片容器 */}
                <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-white dark:bg-gray-800 shadow-lg overflow-hidden border-4 border-orange-200 dark:border-orange-900/30">
                    <Image
                        src="/confused.png" // 这里放置你的表情图片
                        alt="Seimoe 404"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 文字内容 */}
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    页面正在建设中...
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    希茉正在努力建设这个页面，请稍后再来看看吧！
                </p>

                {/* 返回首页按钮 */}
                <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:opacity-90 transition-opacity"
                >
                    <ChevronLeft className="mr-2" size={20} />
                    返回首页
                </Link>
            </div>
        </div>
    );
};

export default NotFound;