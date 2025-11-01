'use client'

import {useEffect, useMemo, useState} from "react";

export default function Page() {
  const startDay = useMemo(() => new Date(2023, 7, 30, 20, 30, 0), [])
  const [elapsed, setElapsed] = useState<string[]>([])
  const background = `bg-[url('/us/mobile_background.jpg')] md:bg-[url('/us/desktop_background.jpg')] bg-no-repeat bg-cover bg-center bg-fixed`
  const shadow = 'shadow-[4px_4px_8px_#666666,-4px_-4px_6px_#ffffff]'
  const hover = 'hover:shadow-none hover:inset-shadow-[-4px_4px_8px_#666666,4px_-4px_6px_#ffffff]'

  useEffect(() => {
    const MS = {
      second: 1000,
      minute: 1000 * 60,
      hour: 1000 * 60 * 60,
      day: 1000 * 60 * 60 * 24,
      month: 1000 * 60 * 60 * 24 * 30, // approx month
      year: 1000 * 60 * 60 * 24 * 365, // approx year
    }

    function formatDiff(ms: number) {
      let r = ms
      const years = Math.floor(r / MS.year); r %= MS.year
      const months = Math.floor(r / MS.month); r %= MS.month
      const days = Math.floor(r / MS.day); r %= MS.day
      const hours = String(Math.floor(r / MS.hour)).padStart(2, '0'); r %= MS.hour
      const minutes = String(Math.floor(r / MS.minute)).padStart(2, '0'); r %= MS.minute
      const seconds = String(Math.floor(r / MS.second)).padStart(2, '0')

      const parts: string[] = []
      parts.push(`${years} ${years > 1 ? 'years' : 'year'}`)
      parts.push(`${months} ${months > 1 ? 'months' : 'month'}`)
      parts.push(`${days} ${days > 1 ? 'days' : 'day'}`)
      parts.push(`${hours}h`, `${minutes}m`, `${seconds}s`)
      return [parts.slice(0, 3).join(' '), parts.slice(3).join(' ')]
    }

    function tick() {
      const diff = Math.max(0, Date.now() - startDay.getTime())
      setElapsed(formatDiff(diff))
    }

    function updateMeta() {
      const now = new Date()
      const timeDiff = Math.floor((now.getTime() - startDay.getTime()) / 1000 / 60 / 60 / 24)
      // update title
      document.title = `Been ${timeDiff} ${timeDiff > 1 ? 'days' : 'day'} together`
    }

    tick()
    updateMeta()
    const id1 = setInterval(updateMeta, 1000 * 60)
    const id2 = setInterval(tick, 100)
    return () => {
      clearInterval(id1)
      clearInterval(id2)
    }
  }, [startDay])

  return (
      <div className={`h-screen w-screen ${background}`}>
        <div className={`absolute bottom-1/10 w-full flex flex-row justify-center`}>
          <div className={`bg-white/80 rounded-3xl p-5 w-7/10 text-center flex flex-col justify-center font-bold text-black shadow-lg ${shadow} ${hover}`}>
            <span className={`hidden md:block text-3xl`}>
              { elapsed[0] }, { elapsed[1] }
            </span>
            <span className={`md:hidden text-xl`}>
              { elapsed[0] }
            </span>
            <span className={`md:hidden text-xl`}>
              { elapsed[1] }
            </span>
          </div>
        </div>
      </div>
  )
}