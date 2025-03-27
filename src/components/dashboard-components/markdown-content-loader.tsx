import Markdown from 'react-markdown'

type MarkdownContentLoaderProps = {
  content: string
}

export default function MarkdownContentLoader({
  content,
}: MarkdownContentLoaderProps) {
  return (
    <Markdown
      components={{
        h2: ({ node, ...props }) => <h2 className="mb-2" {...props} />,
        h3: ({ node, ...props }) => <h3 className="mb-2" {...props} />,
        p: ({ node, ...props }) => <p className="mb-4" {...props} />,
        ul: ({ node, ...props }) => (
          <ul className="mt-2 list-disc space-y-1.5 pl-5" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="mb-4 list-decimal space-y-1.5 pl-5" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="[&_strong]:text-neutral-200" {...props} />
        ),
      }}
    >
      {content}
    </Markdown>
  )
}
