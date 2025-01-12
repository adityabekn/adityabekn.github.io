import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'
import { getDaysInYear, getDiffInDays, getStartOfDay, getStartOfYear } from '@/utils/date'

const MILLISECONDS_IN_A_DAY = 86400 * 1000 // Replace magic number for day calculation.

export function TimelineProgress() {
  // Combine all time-related state into a single object for clarity and easier updates.
  const [timeline, setTimeline] = useState({
    current_year: 0,
    day_of_year: 0,
    percent_of_year: 0,
    percent_of_today: 0,
  })

  const getTimelineInfo = () => {
    const now = new Date()
    const current_year = now.getFullYear()
    const past_days = getDiffInDays(getStartOfYear(now), now)
    const percent_of_year = (past_days / getDaysInYear(now)) * 100
    const past_time = now.getTime() - getStartOfDay(now).getTime()
    const percent_of_today = (past_time / MILLISECONDS_IN_A_DAY) * 100

    return {
      current_year,
      day_of_year: past_days,
      percent_of_year,
      percent_of_today,
    }
  }

  // Update state at regular intervals.
  useEffect(() => {
    const updateInfo = () => setTimeline(getTimelineInfo());
    updateInfo(); // Initialize immediately on mount.
    const intervalId = setInterval(updateInfo, 1000); // Update every second.
    return () => clearInterval(intervalId); // Cleanup interval on component unmount.
  }, []);

  const { current_year, day_of_year, percent_of_year, percent_of_today } = timeline;

  return (
    <>
      <p className="mt-4">
        Today is the <CountUp to={day_of_year} decimals={0} /> day of {current_year}
      </p>
      <p className="mt-4">
        This year has passed <CountUp to={percent_of_year} decimals={5} />%
      </p>
      <p className="mt-4">
        Today has passed <CountUp to={percent_of_today} decimals={5} />%
      </p>
    </>
  )
}

function CountUp({
  to,
  decimals,
  duration = 1,
}: {
  to: number
  decimals: number
  duration?: number
}) {
  const node = useRef<HTMLSpanElement>(null)
  const prev = useRef(0)

  useEffect(() => {
    if (!node.current) return

    const control = animate(prev.current, to, {
      duration,
      onUpdate: (value) => {
        node.current!.textContent = value.toFixed(decimals)
      },
    })
    prev.current = to

    return () => {
      control.stop()
    }
  }, [to, decimals, duration])

  return <span ref={node}></span>
}
