
import { useState } from 'react';
import { JourneyMap } from './components/JourneyMap';
import { NodeData } from './data/graphData';
import { ExternalLink, Sparkles } from 'lucide-react';

function App() {
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

    return (
        <div className="min-h-screen w-screen bg-[var(--bg-primary)] overflow-hidden flex flex-col text-[var(--text-primary)]">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] h-16">
                <div className="mx-auto h-full max-w-7xl px-6 flex items-center justify-between">
                    {/* StarkLab CTA */}
                    <a
                        href="https://floatingpragma.io/starklab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent-purple)]/50 bg-[var(--accent-purple)]/10 hover:bg-[var(--accent-purple)]/20 transition-all"
                    >
                        <Sparkles className="w-4 h-4 text-[var(--accent-purple)]" />
                        <span className="text-xs font-medium text-[var(--accent-purple)] group-hover:text-white transition-colors">
                            Try STARK Lab
                        </span>
                        <span className="hidden sm:inline text-[10px] text-[var(--text-muted)]">
                            — Interactive Tutorial
                        </span>
                    </a>

                    {/* GitHub Link */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/muellerberndt/awesome-zk-proofs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-green)] transition-colors text-sm"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full relative overflow-y-auto">
                <JourneyMap
                    onNodeSelect={setSelectedNode}
                    selectedNodeId={selectedNode?.id || null}
                />
            </main>
        </div>
    );
}

export default App;
