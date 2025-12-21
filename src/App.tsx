
import { useState } from 'react';
import { JourneyMap } from './components/JourneyMap';
import { NodeData } from './data/graphData';
import { ExternalLink } from 'lucide-react';

function App() {
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

    return (
        <div className="min-h-screen w-screen bg-[var(--bg-primary)] overflow-hidden flex flex-col text-[var(--text-primary)]">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] h-16">
                <div className="mx-auto h-full max-w-7xl px-6 flex items-center justify-end">
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
