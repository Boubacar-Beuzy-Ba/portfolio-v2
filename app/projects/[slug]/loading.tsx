export default function ProjectLoading() {
  return (
    <main className="min-h-screen bg-white dark:bg-secondary-900 pt-16">
      <div className="max-w-5xl mx-auto px-6 py-12 animate-pulse">

        {/* Back link skeleton */}
        <div className="h-4 w-32 bg-secondary-100 dark:bg-secondary-800 rounded mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-16">

          {/* Main column */}
          <div>
            {/* Category + title */}
            <div className="mb-8 space-y-3">
              <div className="flex gap-2">
                <div className="h-5 w-20 bg-primary-200 dark:bg-primary-900/40 rounded-full" />
              </div>
              <div className="h-9 w-3/4 bg-secondary-100 dark:bg-secondary-800 rounded" />
              <div className="h-4 w-full bg-secondary-100 dark:bg-secondary-800 rounded" />
              <div className="h-4 w-5/6 bg-secondary-100 dark:bg-secondary-800 rounded" />
            </div>

            {/* Cover image */}
            <div className="w-full aspect-video rounded-2xl bg-secondary-100 dark:bg-secondary-800 mb-10" />

            {/* Metrics */}
            <div className="mb-10">
              <div className="h-3 w-24 bg-secondary-100 dark:bg-secondary-800 rounded mb-4" />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-14 rounded-xl bg-secondary-100 dark:bg-secondary-800" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-secondary-100 dark:border-secondary-800 p-5 space-y-3">
              <div className="h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30" />
              <div className="h-10 rounded-lg bg-secondary-100 dark:bg-secondary-800" />
            </div>
            <div className="rounded-2xl border border-secondary-100 dark:border-secondary-800 p-5">
              <div className="h-3 w-20 bg-secondary-100 dark:bg-secondary-800 rounded mb-3" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-7 w-16 rounded-lg bg-secondary-100 dark:bg-secondary-800" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
