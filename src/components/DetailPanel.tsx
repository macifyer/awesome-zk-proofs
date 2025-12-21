
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NodeData, Resource } from '../data/graphData';
import { X, ExternalLink, Terminal } from 'lucide-react';

interface DetailPanelProps {
    node: NodeData | null;
    onClose: () => void;
}

const ResourceRow = ({ resource, index }: { resource: Resource; index: number }) => (
    <motion.a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group flex flex-col p-4 border-b border-emerald-400/15 hover:bg-emerald-400/10 transition-colors"
    >
        <div className="flex justify-between items-start mb-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-100/70">
                {resource.type}
            </span>
        </div>
        <h4 className="text-sm font-semibold text-emerald-100 group-hover:text-emerald-200 transition-colors flex items-center mb-1">
            <span className="mr-2 text-emerald-300/70">{'>'}</span>
            {resource.title}
            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h4>
        <p className="text-xs text-emerald-100/70 line-clamp-2">
            {resource.description}
        </p>
    </motion.a>
);

export const DetailPanel: React.FC<DetailPanelProps> = ({ node, onClose }) => {
    // Sort resources by rating (highest first)
    const sortedResources = (node?.resources ?? [])
        .slice()
        .sort((a, b) => b.rating - a.rating);

    return (
        <AnimatePresence>
            {node && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#04070d]/80 backdrop-blur-sm z-40"
                    />

                    {/* Terminal Window Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#05090f] border-l border-emerald-400/20 shadow-[0_0_40px_rgba(4,8,12,0.6)] z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-emerald-400/10 border-b border-emerald-400/20">
                            <div className="flex items-center space-x-2">
                                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-400/10 border border-emerald-400/30">
                                    <Terminal className="w-4 h-4 text-emerald-300" />
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-[0.35em] text-emerald-200">Node Intel</div>
                                    <div className="text-xs text-emerald-100/70">{node.category}</div>
                                </div>
                            </div>
                            <button onClick={onClose} className="text-emerald-100/70 hover:text-emerald-100">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-0">
                            <div className="p-6 border-b border-emerald-400/20">
                                <h2 className="text-3xl font-display text-emerald-100 mb-2">
                                    {node.title}
                                </h2>
                                <div className="flex flex-wrap gap-2 text-xs text-emerald-100/70 mb-4">
                                    <span className="px-2 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30">
                                        {node.category}
                                    </span>
                                    <span className="px-2 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30">
                                        {node.resources.length} resources
                                    </span>
                                </div>
                                <p className="text-sm text-emerald-100/70 leading-relaxed border-l-2 border-emerald-400/30 pl-3">
                                    {node.description}
                                </p>
                            </div>

                            <div className="bg-[#04070d]">
                                <div className="px-6 py-2 bg-emerald-400/10 text-[10px] text-emerald-100/70 uppercase tracking-[0.35em] border-b border-emerald-400/20">
                                    Resources
                                </div>
                                {sortedResources.map((res, i) => (
                                    <ResourceRow
                                        key={res.url || res.title}
                                        resource={res}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-3 border-t border-emerald-400/20 bg-[#04070d] text-[10px] text-emerald-100/50 text-center uppercase tracking-[0.4em]">
                            Trace the proof. Close the loop.
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
