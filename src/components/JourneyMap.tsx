import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { graphData, NodeData } from '../data/graphData';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface JourneyMapProps {
    onNodeSelect: (node: NodeData) => void;
    selectedNodeId: string | null;
}

// Simplified structure: sequential flow with parallel lanes
const journeyStructure = {
    // Phase 1: Sequential foundation
    foundation: {
        title: 'Foundation',
        nodes: ['intro', 'math_foundations', 'proof_mechanics']
    },
    // Phase 2: Parallel lanes
    lanes: {
        snark: {
            title: 'SNARK',
            color: 'green',
            nodes: ['snark_r1cs', 'snark_systems', 'snark_tooling', 'trusted_setup']
        },
        stark: {
            title: 'STARK',
            color: 'purple',
            nodes: ['stark_trace', 'stark_systems', 'stark_tooling']
        }
    },
    // Phase 3: Convergence
    advanced: {
        title: 'Applications',
        nodes: ['bulletproofs', 'advanced', 'applications', 'security_exploitation', 'media_community']
    }
};

export const JourneyMap: React.FC<JourneyMapProps> = ({ onNodeSelect, selectedNodeId }) => {
    const nodeMap = useMemo(() => new Map(graphData.map(node => [node.id, node])), []);

    const getNode = (id: string) => nodeMap.get(id);

    const selectedNode = selectedNodeId ? getNode(selectedNodeId) : null;

    // Sort resources by rating
    const sortedResources = selectedNode
        ? [...selectedNode.resources].sort((a, b) => b.rating - a.rating)
        : [];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            {/* Scan line effect */}
            <div className="scan-line" />

            {/* Header */}
            <div className="pt-24 pb-8 px-6 border-b border-[var(--border-color)]">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                        Awesome Zero-Knowledge Proofs
                    </h1>
                    <p className="text-[var(--text-muted)] text-sm">
                        A curated learning path from fundamentals to production systems
                    </p>
                </div>
            </div>

            {/* Compact Timeline Navigation */}
            <div className="sticky top-16 z-30 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border-color)] py-4 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {/* Foundation nodes */}
                        {journeyStructure.foundation.nodes.map((nodeId, idx) => {
                            const node = getNode(nodeId);
                            if (!node) return null;
                            return (
                                <React.Fragment key={nodeId}>
                                    <button
                                        onClick={() => onNodeSelect(node)}
                                        className={clsx(
                                            'timeline-node flex-shrink-0 px-3 py-1.5 rounded text-xs font-medium border transition-all',
                                            selectedNodeId === nodeId
                                                ? 'bg-[var(--accent-green)]/20 border-[var(--accent-green)] text-[var(--accent-green)] glow-green'
                                                : 'bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-green)]/50'
                                        )}
                                    >
                                        {node.title.split(' ')[0]}
                                    </button>
                                    {idx < journeyStructure.foundation.nodes.length - 1 && (
                                        <ChevronRight className="w-4 h-4 text-[var(--border-color)] flex-shrink-0" />
                                    )}
                                </React.Fragment>
                            );
                        })}

                        <ChevronRight className="w-4 h-4 text-[var(--border-color)] flex-shrink-0" />

                        {/* SNARK/STARK split indicator */}
                        <div className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                            <span className="text-[10px] text-[var(--accent-green)]">SNARK</span>
                            <span className="text-[10px] text-[var(--text-muted)]">/</span>
                            <span className="text-[10px] text-[var(--accent-purple)]">STARK</span>
                        </div>

                        <ChevronRight className="w-4 h-4 text-[var(--border-color)] flex-shrink-0" />

                        {/* Advanced nodes */}
                        {journeyStructure.advanced.nodes.slice(0, 3).map((nodeId) => {
                            const node = getNode(nodeId);
                            if (!node) return null;
                            return (
                                <button
                                    key={nodeId}
                                    onClick={() => onNodeSelect(node)}
                                    className={clsx(
                                        'timeline-node flex-shrink-0 px-3 py-1.5 rounded text-xs font-medium border transition-all',
                                        selectedNodeId === nodeId
                                            ? 'bg-[var(--accent-green)]/20 border-[var(--accent-green)] text-[var(--accent-green)] glow-green'
                                            : 'bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-green)]/50'
                                    )}
                                >
                                    {node.title.split(' ')[0]}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Topic Navigation */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Foundation Section */}
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                                Foundation
                            </h3>
                            {journeyStructure.foundation.nodes.map((nodeId) => {
                                const node = getNode(nodeId);
                                if (!node) return null;
                                return (
                                    <TopicCard
                                        key={nodeId}
                                        node={node}
                                        isSelected={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                    />
                                );
                            })}
                        </div>

                        {/* SNARK Lane */}
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-green)] mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse-dot" />
                                SNARK Track
                            </h3>
                            {journeyStructure.lanes.snark.nodes.map((nodeId) => {
                                const node = getNode(nodeId);
                                if (!node) return null;
                                return (
                                    <TopicCard
                                        key={nodeId}
                                        node={node}
                                        isSelected={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                        accentColor="green"
                                    />
                                );
                            })}
                        </div>

                        {/* STARK Lane */}
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-purple)] mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--accent-purple)] animate-pulse-dot" />
                                STARK Track
                            </h3>
                            {journeyStructure.lanes.stark.nodes.map((nodeId) => {
                                const node = getNode(nodeId);
                                if (!node) return null;
                                return (
                                    <TopicCard
                                        key={nodeId}
                                        node={node}
                                        isSelected={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                        accentColor="purple"
                                    />
                                );
                            })}
                        </div>

                        {/* Advanced Section */}
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                                Applications & Beyond
                            </h3>
                            {journeyStructure.advanced.nodes.map((nodeId) => {
                                const node = getNode(nodeId);
                                if (!node) return null;
                                return (
                                    <TopicCard
                                        key={nodeId}
                                        node={node}
                                        isSelected={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Resource Display */}
                    <div className="lg:col-span-2">
                        {selectedNode ? (
                            <motion.div
                                key={selectedNode.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-6"
                            >
                                {/* Topic Header */}
                                <div className="border-b border-[var(--border-color)] pb-6">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {selectedNode.title}
                                    </h2>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        {selectedNode.description}
                                    </p>
                                    <div className="mt-3 flex items-center gap-3">
                                        <span className="text-xs px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                                            {selectedNode.resources.length} resources
                                        </span>
                                        <span className="text-xs px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                                            {selectedNode.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Resources List */}
                                <div className="space-y-1 stagger-children">
                                    {sortedResources.map((resource) => (
                                        <a
                                            key={resource.url}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="resource-item group flex items-start gap-3 py-3 px-3 -mx-3 rounded border border-transparent hover:border-[var(--border-color)]"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] px-1.5 py-0.5 rounded bg-[var(--bg-tertiary)]">
                                                        {resource.type}
                                                    </span>
                                                </div>
                                                <h4 className="text-sm font-medium text-white group-hover:text-[var(--accent-green)] transition-colors truncate">
                                                    {resource.title}
                                                </h4>
                                                <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2">
                                                    {resource.description}
                                                </p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <div className="flex items-center justify-center h-[60vh] text-center">
                                <div>
                                    <div className="text-6xl mb-4 opacity-20">📚</div>
                                    <p className="text-[var(--text-muted)] text-sm">
                                        Select a topic to view resources
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Compact Topic Card Component
const TopicCard: React.FC<{
    node: NodeData;
    isSelected: boolean;
    onClick: () => void;
    accentColor?: 'green' | 'purple';
}> = ({ node, isSelected, onClick, accentColor }) => {
    const borderColor = isSelected
        ? accentColor === 'purple'
            ? 'border-[var(--accent-purple)]'
            : 'border-[var(--accent-green)]'
        : 'border-[var(--border-color)]';

    const glowClass = isSelected
        ? accentColor === 'purple'
            ? 'glow-purple'
            : 'glow-green'
        : '';

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(
                'w-full text-left px-4 py-3 rounded border bg-[var(--bg-secondary)] transition-all',
                borderColor,
                glowClass,
                'hover:bg-[var(--bg-tertiary)]'
            )}
        >
            <div className="flex items-center justify-between">
                <h4 className={clsx(
                    'text-sm font-medium truncate',
                    isSelected ? 'text-white' : 'text-[var(--text-secondary)]'
                )}>
                    {node.title}
                </h4>
                <span className="text-[10px] text-[var(--text-muted)] ml-2 flex-shrink-0">
                    {node.resources.length}
                </span>
            </div>
        </motion.button>
    );
};
