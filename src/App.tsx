
import { useState, useEffect, useRef } from 'react';
import { JourneyMap } from './components/JourneyMap';
import { DetailPanel } from './components/DetailPanel';
import { NodeData } from './data/graphData';
import { Terminal, Twitter, Github } from 'lucide-react';

function App() {
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
    const [showFooter, setShowFooter] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mainRef.current) {
                setShowFooter(mainRef.current.scrollTop > 100);
            }
        };

        const mainElement = mainRef.current;
        if (mainElement) {
            mainElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (mainElement) {
                mainElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="min-h-screen w-screen bg-[var(--ctf-bg)] overflow-hidden flex flex-col text-[var(--ctf-text)]">

            <header className="fixed top-0 left-0 w-full z-40 bg-[#060b12]/80 backdrop-blur-xl border-b border-emerald-400/20 h-16 animate-fade-rise">
                <div className="mx-auto h-full max-w-6xl px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-400/10 border border-emerald-400/30 shadow-[0_0_20px_rgba(56,245,155,0.25)]">
                            <Terminal className="w-5 h-5 text-emerald-300" />
                        </div>
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.45em] text-emerald-200">
                                Awesome Zero-Knowledge Proofs
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Graph Canvas */}r
            <main ref={mainRef} className="flex-1 w-full relative overflow-y-auto">
                <JourneyMap
                    onNodeSelect={setSelectedNode}
                    selectedNodeId={selectedNode?.id || null}
                />
            </main>

            {/* Detail Overlay */}
            <DetailPanel
                node={selectedNode}
                onClose={() => setSelectedNode(null)}
            />

            {/* Footer */}
            <footer className={`fixed bottom-0 left-0 w-full z-40 bg-[#060b12]/80 backdrop-blur-xl border-t border-emerald-400/20 py-4 px-6 transition-opacity duration-300 ${showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="mx-auto max-w-6xl flex items-center justify-between text-sm">
                    <div className="text-emerald-200">
                        © muellerberndt
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://x.com/muellerberndt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-emerald-300 hover:text-emerald-100 transition-colors"
                        >
                            <Twitter className="w-4 h-4" />
                            <span>X</span>
                        </a>
                        <a
                            href="https://github.com/muellerberndt/awesome-zk-proofs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-emerald-300 hover:text-emerald-100 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
