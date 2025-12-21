
import React from 'react';
import { motion } from 'framer-motion';
import { NodeData } from '../data/graphData';
import { BookOpen, Calculator, PenTool, Layout, Terminal, Code2, ShieldAlert, Cpu, Users, GitBranch, Wrench } from 'lucide-react';
import clsx from 'clsx';

interface NodeItemProps {
    node: NodeData;
    isSelected: boolean;
    onClick: () => void;
}

const CategoryIcon = ({ category }: { category: string }) => {
    const normalized = category.toLowerCase();
    if (normalized.includes('community')) return <Users className="w-6 h-6 text-cyan-200" />;
    if (normalized.includes('foundation')) return <BookOpen className="w-6 h-6 text-emerald-200" />;
    if (normalized.includes('math')) return <Calculator className="w-6 h-6 text-cyan-200" />;
    if (normalized.includes('mechanics')) return <PenTool className="w-6 h-6 text-rose-200" />;
    if (normalized.includes('arithmet')) return <GitBranch className="w-6 h-6 text-teal-200" />;
    if (normalized.includes('snark')) return <Code2 className="w-6 h-6 text-emerald-200" />;
    if (normalized.includes('stark')) return <Terminal className="w-6 h-6 text-amber-200" />;
    if (normalized.includes('tooling')) return <Wrench className="w-6 h-6 text-teal-200" />;
    if (normalized.includes('application')) return <Layout className="w-6 h-6 text-orange-200" />;
    if (normalized.includes('advanced')) return <Cpu className="w-6 h-6 text-cyan-200" />;
    if (normalized.includes('security')) return <ShieldAlert className="w-6 h-6 text-rose-200" />;
    if (normalized.includes('system')) return <Layout className="w-6 h-6 text-amber-200" />;
    return <Terminal className="w-6 h-6 text-emerald-200" />;
};

const CategoryColor = (category: string) => {
    const normalized = category.toLowerCase();
    if (normalized.includes('community')) return 'border-cyan-400/40 bg-cyan-400/10 hover:border-cyan-300/70';
    if (normalized.includes('foundation')) return 'border-emerald-400/40 bg-emerald-400/10 hover:border-emerald-300/70';
    if (normalized.includes('math')) return 'border-cyan-400/40 bg-cyan-400/10 hover:border-cyan-300/70';
    if (normalized.includes('mechanics')) return 'border-rose-400/40 bg-rose-400/10 hover:border-rose-300/70';
    if (normalized.includes('arithmet')) return 'border-teal-400/40 bg-teal-400/10 hover:border-teal-300/70';
    if (normalized.includes('snark')) return 'border-emerald-400/40 bg-emerald-400/10 hover:border-emerald-300/70';
    if (normalized.includes('stark')) return 'border-amber-400/40 bg-amber-400/10 hover:border-amber-300/70';
    if (normalized.includes('tooling')) return 'border-teal-400/40 bg-teal-400/10 hover:border-teal-300/70';
    if (normalized.includes('application')) return 'border-orange-400/40 bg-orange-400/10 hover:border-orange-300/70';
    if (normalized.includes('advanced')) return 'border-cyan-400/40 bg-cyan-400/10 hover:border-cyan-300/70';
    if (normalized.includes('security')) return 'border-rose-400/40 bg-rose-400/10 hover:border-rose-300/70';
    if (normalized.includes('system')) return 'border-amber-400/40 bg-amber-400/10 hover:border-amber-300/70';
    return 'border-emerald-400/30 bg-emerald-400/10';
};

export const NodeItem: React.FC<NodeItemProps> = ({ node, isSelected, onClick }) => {
    const colorClass = CategoryColor(node.category);

    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(
                "cursor-pointer relative w-full p-7 rounded-2xl backdrop-blur-xl transition-all duration-300 group border overflow-hidden bg-[#071019]/80",
                colorClass,
                isSelected
                    ? "ring-2 ring-emerald-300/40 shadow-[0_0_50px_rgba(56,245,155,0.3)] z-30"
                    : "z-10 shadow-[0_0_40px_rgba(12,20,30,0.6)]"
            )}
        >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-md bg-emerald-400/10 border border-emerald-400/30 group-hover:bg-emerald-400/20 transition-colors">
                    <CategoryIcon category={node.category} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-100/70 font-medium px-2 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30">
                    {node.resources.length} RES
                </span>
            </div>

            <h3 className="text-2xl font-semibold text-emerald-100 mb-2 leading-tight tracking-tight font-display">
                {node.title}
            </h3>

            <p className="text-sm text-emerald-100/70 line-clamp-3 leading-relaxed">
                {node.description}
            </p>

            {isSelected && (
                <div className="absolute inset-x-0 -bottom-2 mx-auto w-1/3 h-1 bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent blur-sm" />
            )}
        </motion.div>
    );
};
