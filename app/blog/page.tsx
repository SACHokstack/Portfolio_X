import { posts } from '@/data/site'

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-neutral-500">Notes and essays.</p>
      </div>
      <ul className="divide-y divide-neutral-100 border-y border-neutral-100">
        {posts.map((post) => (
          <li key={post.slug} className="py-4">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium">{post.title}</span>
              <span className="shrink-0 text-sm text-neutral-400">{post.date}</span>
            </div>
            <p className="mt-1 text-[15px] text-neutral-500">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
