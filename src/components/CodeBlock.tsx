// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export default function CodeBlock({ code, language = "solidity" }: CodeBlockProps) {
    return (
        <SyntaxHighlighter
            language={language}
            style={oneDark}
            wrapLongLines={true}
            customStyle={{
                fontSize: '0.9rem',
                borderRadius: '10px',
                padding: '16px',
            }}
        >
            {code}
        </SyntaxHighlighter>
    );
}
