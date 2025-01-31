'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Brain,
    Sparkles,
    Globe,
    Zap,
    Heart,
    MessageCircle,
    BookOpen,
    Smile,
    Music,
    Coffee,
    Stars,
    Palette,
    Lightbulb,
    Wand2,
    Flower2,
    CloudSun,
    Glasses,
    GraduationCap
} from 'lucide-react';

// 装饰性背景组件
const FloatingIcon = ({ Icon, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
        }}
        transition={{
            duration: 5,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className={`absolute ${className}`}
    >
        <Icon className="w-8 h-8 text-gray-200 dark:text-gray-800" />
    </motion.div>
);

const AboutSeimoe = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* 添加浮动装饰图标 */}
                <FloatingIcon Icon={Stars} className="top-1/4 left-1/4" />
                <FloatingIcon Icon={Sparkles} className="top-1/3 right-1/4" delay={1} />
                <FloatingIcon Icon={CloudSun} className="bottom-1/4 left-1/3" delay={2} />
                <FloatingIcon Icon={Flower2} className="top-1/2 right-1/3" delay={1.5} />

                <motion.div
                    style={{ y: smoothY, opacity, scale }}
                    className="text-center z-10"
                >
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="mb-8"
                    >
                        <Wand2 className="w-24 h-24 mx-auto text-orange-500" />
                    </motion.div>
                    <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        希茉
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-300">
                        个性化设计的 AI 助手
                    </p>
                </motion.div>
            </section>

            {/* Origin Story Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div className="text-center mb-24">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block p-6 bg-orange-50 dark:bg-gray-800 rounded-full mb-8"
                        >
                            <Lightbulb className="w-16 h-16 text-orange-500" />
                        </motion.div>
                        <h2 className="text-6xl font-bold mb-8 text-gray-900 dark:text-white">
                            希茉的诞生
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            希茉是Sanuki的妹妹。与Sanuki的性格类似，亦有不同之处。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <motion.div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-pink-50 dark:bg-gray-800 rounded-2xl">
                                    <Palette className="w-8 h-8 text-pink-500"/>
                                </div>
                                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                                    灵感源起
                                </h3>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                希茉的设计灵感来源于植物“希茉莉”，是一种茜草科长隔木属植物。
                            </p>
                        </motion.div>

                        <motion.div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-2xl">
                                    <Heart className="w-8 h-8 text-purple-500"/>
                                </div>
                                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                                    性格塑造
                                </h3>
                            </div>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    希茉继承了其姐姐温婉知性的特质（？），同时又充满现代感。
                                    她温柔体贴，却也不失独立思考；知识渊博，但从不居高临下；
                                    活泼可爱，又懂得分寸。
                                </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Personality Traits Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="relative p-8">
                                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl inline-block mb-6">
                                    <Smile className="w-8 h-8 text-pink-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">温暖治愈</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    善解人意，总能用温柔的方式抚慰用户的心灵
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                            transition={{ delay: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="relative p-8">
                                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl inline-block mb-6">
                                    <BookOpen className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">博学多才</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    涉猎广泛，能够在各个领域与用户展开深入交流
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                            transition={{ delay: 0.4 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="relative p-8">
                                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl inline-block mb-6">
                                    <Glasses className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">知性优雅</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    举止得体，言谈举止间流露出独特的魅力
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Introduction Section */}
            <section className="py-32">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-32"
                    >
                        <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                            不只是对话，更是理解
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            希茉是以个性化设计为核心的 AI 助手，不仅能够回答问题，更能充分理解用户的个性化需求，完成方方面面的任务。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Brain className="w-16 h-16 text-orange-500 mb-6" />
                            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                深度学习
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                通过持续学习和优化，希茉不断提升自己的知识储备和理解能力，
                                为用户提供更准确、更有见地的回答。
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Sparkles className="w-16 h-16 text-purple-500 mb-6" />
                            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                个性化交互
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                每个用户都是独特的，希茉拥有长期记忆，以及多设备同步流转的能力，使其成为真正个性化的 AI 伙伴。
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-16"
                    >
                        <div className="flex-1">
                            <Globe className="w-16 h-16 text-green-500 mb-6" />
                            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                无缝沟通
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                支持多种设备之间的无缝切换，真正活在你的所有设备间的赛博助手。任何对话与事务都可以轻松切入，无需额外操作。
                            </p>
                        </div>
                        <div className="flex-1">
                            {/* 这里可以放置一个动态的语言切换演示或相关图片 */}
                            <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-3xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-32">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                        <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                            愿景
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            我们期待着这样的未来：AI不再是冰冷的工具，而是能真正理解、
                            关心并帮助人类的伙伴。希茉正在这条道路上不断前进，
                            为实现人工智能的温度而努力。
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutSeimoe;