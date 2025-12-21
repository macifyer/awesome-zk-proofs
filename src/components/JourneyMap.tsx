import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { graphData, NodeData } from '../data/graphData';
import { NodeItem } from './NodeItem';

interface JourneyMapProps {
    onNodeSelect: (node: NodeData) => void;
    selectedNodeId: string | null;
}

type ToneKey = 'sky' | 'blue' | 'rose' | 'teal' | 'emerald' | 'amber' | 'cyan' | 'orange';

type ChapterLane = {
    id: string;
    title: string;
    description: string;
    tone: ToneKey;
    core: string[];
    side?: string[];
};

type Chapter = {
    id: string;
    label: string;
    title: string;
    description: string;
    tone: ToneKey;
    core?: string[];
    side?: string[];
    mainQuest?: string[];
    sideQuest?: string[];
    lanes?: ChapterLane[];
};

const toneStyles: Record<ToneKey, { ring: string; badge: string; panel: string }> = {
    sky: {
        ring: 'border-emerald-400/50 bg-emerald-400/10 text-emerald-100',
        badge: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
        panel: 'border-emerald-400/30 bg-[#0b141f]/80'
    },
    blue: {
        ring: 'border-cyan-400/50 bg-cyan-400/10 text-cyan-100',
        badge: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-100',
        panel: 'border-cyan-400/30 bg-[#0b141f]/80'
    },
    rose: {
        ring: 'border-rose-400/50 bg-rose-400/10 text-rose-100',
        badge: 'border-rose-400/40 bg-rose-400/10 text-rose-100',
        panel: 'border-rose-400/30 bg-[#0b141f]/80'
    },
    teal: {
        ring: 'border-teal-400/50 bg-teal-400/10 text-teal-100',
        badge: 'border-teal-400/40 bg-teal-400/10 text-teal-100',
        panel: 'border-teal-400/30 bg-[#0b141f]/80'
    },
    emerald: {
        ring: 'border-emerald-400/50 bg-emerald-400/10 text-emerald-100',
        badge: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
        panel: 'border-emerald-400/30 bg-[#0b141f]/80'
    },
    amber: {
        ring: 'border-amber-400/50 bg-amber-400/10 text-amber-100',
        badge: 'border-amber-400/40 bg-amber-400/10 text-amber-100',
        panel: 'border-amber-400/30 bg-[#0b141f]/80'
    },
    cyan: {
        ring: 'border-cyan-400/50 bg-cyan-400/10 text-cyan-100',
        badge: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-100',
        panel: 'border-cyan-400/30 bg-[#0b141f]/80'
    },
    orange: {
        ring: 'border-orange-400/50 bg-orange-400/10 text-orange-100',
        badge: 'border-orange-400/40 bg-orange-400/10 text-orange-100',
        panel: 'border-orange-400/30 bg-[#0b141f]/80'
    }
};


const chapters: Chapter[] = [
    {
        id: 'foundations',
        label: 'Start Here',
        title: 'Math Foundations → Intuition',
        description: 'Start with the math toolkit, then build intuition and motivation.',
        tone: 'sky',
        core: ['math_foundations', 'intro']
    },
    {
        id: 'proof_systems',
        label: 'Proof Systems',
        title: 'Proof System Mechanics',
        description: 'Core mechanics as the main quest, with a contrasting side system.',
        tone: 'rose',
        mainQuest: ['proof_mechanics'],
        sideQuest: ['bulletproofs']
    },
    {
        id: 'lanes',
        label: 'Pick a Lane',
        title: 'SNARK vs. STARK Lanes',
        description: 'Choose a lane and follow the core building blocks in order.',
        tone: 'emerald',
        lanes: [
            {
                id: 'snark',
                title: 'SNARK Lane',
                description: 'R1CS arithmetization, tooling, and SNARK systems with setup tradeoffs.',
                tone: 'emerald',
                core: ['snark_r1cs', 'snark_tooling', 'snark_systems', 'trusted_setup']
            },
            {
                id: 'stark',
                title: 'STARK Lane',
                description: 'Trace/AIR arithmetization, tooling, and transparent STARK systems.',
                tone: 'amber',
                core: ['stark_trace', 'stark_tooling', 'stark_systems']
            }
        ]
    },
    {
        id: 'outcomes',
        label: 'Real World',
        title: 'Applications, zkEVMs, Security, and Media',
        description: 'Ship systems, explore execution proving, track exploits, and stay connected.',
        tone: 'orange',
        core: ['applications', 'advanced', 'security_exploitation', 'media_community']
    }
];

const StoryNodeCard = ({
    node,
    isSelected,
    onClick
}: {
    node: NodeData;
    isSelected: boolean;
    onClick: () => void;
}) => {
    return (
        <div className="relative">
            <NodeItem node={node} isSelected={isSelected} onClick={onClick} />
        </div>
    );
};

export const JourneyMap: React.FC<JourneyMapProps> = ({ onNodeSelect, selectedNodeId }) => {
    const nodeMap = useMemo(() => new Map(graphData.map(node => [node.id, node])), []);

    const resolveNodes = (ids: string[]) =>
        ids.map(id => nodeMap.get(id)).filter(Boolean) as NodeData[];

    return (
        <div className="relative w-full min-h-full text-[var(--ctf-text)] overflow-x-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(1200px circle at 12% 10%, rgba(56,245,155,0.18) 0%, #050a10 45%, #04070d 100%)'
                }}
            />
            <div className="absolute inset-0 pointer-events-none ctf-grid opacity-40" />
            <div className="absolute inset-0 pointer-events-none ctf-scanlines opacity-40" />
            <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-emerald-400/10 to-transparent" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-16 bg-emerald-400/10 blur-3xl animate-flicker" />
                <div className="absolute inset-x-0 top-1/3 h-24 bg-cyan-400/10 blur-3xl animate-flicker" />
            </div>
            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-emerald-400/10 blur-[140px] rounded-full animate-float-slow" />
            <div className="absolute -bottom-52 left-[-120px] w-[620px] h-[620px] bg-cyan-400/10 blur-[160px] rounded-full animate-float-slow" />
            <div className="absolute inset-0 pointer-events-none animate-scanline">
                <div className="absolute inset-x-0 h-24 bg-emerald-400/10 blur-2xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.45em] text-emerald-100">
                        Awesome List
                    </span>
                    <h1 className="mt-5 text-4xl md:text-5xl font-display text-emerald-100 leading-tight">
                        Awesome zero-knowledge proofs
                    </h1>
                    <p className="mt-4 text-sm md:text-base text-emerald-100/70 leading-relaxed">
                        A curated list of primers, papers, tools, and systems. Tackle the core
                        milestones first, then branch into SNARK or STARK lanes.
                    </p>
                </div>

                <div className="mt-12 space-y-12">
                    {chapters.map((chapter, index) => {
                        const tone = toneStyles[chapter.tone];
                        return (
                            <motion.section
                                key={chapter.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.25 }}
                                className="relative flex gap-6"
                            >
                                <div className="flex flex-col items-center">
                                    <div
                                        className={clsx(
                                            'flex h-12 w-12 items-center justify-center rounded-md border text-sm font-semibold shadow-[0_0_30px_rgba(56,245,155,0.2)]',
                                            tone.ring
                                        )}
                                    >
                                        {index + 1}
                                    </div>
                                    {index < chapters.length - 1 && (
                                        <div className="mt-3 w-px flex-1 bg-emerald-400/20" />
                                    )}
                                </div>

                                <div className="flex-1 rounded-2xl border border-emerald-400/20 bg-[#09131f]/70 p-6 backdrop-blur-xl">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span
                                            className={clsx(
                                                'inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em]',
                                                tone.badge
                                            )}
                                        >
                                            {chapter.label}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-display text-emerald-100">
                                            {chapter.title}
                                        </h2>
                                    </div>
                                    <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed">
                                        {chapter.description}
                                    </p>

                                    {chapter.mainQuest ? (
                                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                                            <div className="rounded-xl border border-emerald-400/20 bg-[#0b141f]/70 p-5 backdrop-blur-xl">
                                                <div className="text-[10px] uppercase tracking-[0.35em] text-emerald-100/80">
                                                    Main Quest
                                                </div>
                                                <div className="mt-4 grid gap-5">
                                                    {resolveNodes(chapter.mainQuest).map(node => (
                                                        <StoryNodeCard
                                                            key={node.id}
                                                            node={node}
                                                            isSelected={selectedNodeId === node.id}
                                                            onClick={() => onNodeSelect(node)}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="rounded-xl border border-cyan-400/20 bg-[#0b141f]/70 p-5 backdrop-blur-xl">
                                                <div className="text-[10px] uppercase tracking-[0.35em] text-cyan-100/80">
                                                    Side Quest
                                                </div>
                                                <div className="mt-4 grid gap-5">
                                                    {resolveNodes(chapter.sideQuest || []).map(node => (
                                                        <StoryNodeCard
                                                            key={node.id}
                                                            node={node}
                                                            isSelected={selectedNodeId === node.id}
                                                            onClick={() => onNodeSelect(node)}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : chapter.lanes ? (
                                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                                            {chapter.lanes.map(lane => {
                                                const laneTone = toneStyles[lane.tone];
                                                return (
                                                    <div
                                                        key={lane.id}
                                                        className={clsx(
                                                            'rounded-xl border p-5 backdrop-blur-xl',
                                                            laneTone.panel
                                                        )}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-100">
                                                                {lane.title}
                                                            </div>
                                                            <span
                                                                className={clsx(
                                                                    'rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.3em]',
                                                                    laneTone.badge
                                                                )}
                                                            >
                                                                Lane
                                                            </span>
                                                        </div>
                                                        <p className="mt-2 text-xs text-emerald-100/70">
                                                            {lane.description}
                                                        </p>
                                                        <div className="mt-4 grid gap-5">
                                                            {resolveNodes(lane.core).map(node => (
                                                                <StoryNodeCard
                                                                    key={node.id}
                                                                    node={node}
                                                                    isSelected={selectedNodeId === node.id}
                                                                    onClick={() => onNodeSelect(node)}
                                                                />
                                                            ))}
                                                            {(lane.side || []).length > 0 && (
                                                                <div className="grid gap-5">
                                                                    {resolveNodes(lane.side || []).map(node => (
                                                                        <StoryNodeCard
                                                                            key={node.id}
                                                                            node={node}
                                                                            isSelected={selectedNodeId === node.id}
                                                                            onClick={() => onNodeSelect(node)}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                                            {resolveNodes(chapter.core || []).map(node => (
                                                <StoryNodeCard
                                                    key={node.id}
                                                    node={node}
                                                    isSelected={selectedNodeId === node.id}
                                                    onClick={() => onNodeSelect(node)}
                                                />
                                            ))}
                                            {resolveNodes(chapter.side || []).map(node => (
                                                <StoryNodeCard
                                                    key={node.id}
                                                    node={node}
                                                    isSelected={selectedNodeId === node.id}
                                                    onClick={() => onNodeSelect(node)}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.section>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};
