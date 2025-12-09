"use client";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div
      className={`font-sans prose prose-sm max-w-none text-muted-foreground leading-relaxed ${className}`}
    >
      <ReactMarkdown
        components={{
          p: (props) => <p className="text-sm text-gray-700 mb-2" {...props} />,
          ul: (props) => (
            <ul
              className="list-disc pl-5 my-2 space-y-1.5 text-sm text-gray-700"
              {...props}
            />
          ),
          li: (props) => <li className="marker:text-gray-400" {...props} />,
          strong: (props) => (
            <strong className="font-semibold text-gray-900" {...props} />
          ),
          h4: (props) => (
            <h4
              className="font-semibold text-sm mt-3 mb-1 text-gray-900"
              {...props}
            />
          ),
          a: (props) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-gray-300 hover:decoration-gray-500 text-gray-800 transition-colors"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
