import { useEffect, useState } from 'react'
import { useAtomValue } from 'jotai'
import { pageScrollLocationAtom } from '@/store/scrollInfo'
import { floor } from 'lodash-es'

// Constants
const ARTICLE_SELECTOR = '#markdown-wrapper';

// Utility function to calculate the reading progress
function calculateReadingProgress(scroll_y: number, full_height: number): number {
  if (scroll_y > full_height) {
    return 100;
  }
  return floor((scroll_y / full_height) * 100);
}

export function ReadingProgress() {
  const [percent, set_percent] = useState(0)
  const scroll_y = useAtomValue(pageScrollLocationAtom)

  useEffect(() => {
    const articleElement = document.querySelector(ARTICLE_SELECTOR) as HTMLElement | null;
    if (!articleElement) return;

    const { offsetHeight, offsetTop } = articleElement;
    const full_height = offsetHeight + offsetTop - window.innerHeight;

    set_percent(calculateReadingProgress(scrollY, full_height));
  }, [scroll_y])

  return (
    <div>
      <span className="text-sm">Progress {percent}%</span>
    </div>
  )
}
