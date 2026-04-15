import { useEffect, useState } from 'react'

export function DashboardFeature() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className='mx-auto flex min-h-dvh w-full max-w-md flex-col justify-between px-5 py-8'>
      <div className='space-y-5'>
        <div className='inline-flex items-center gap-2 rounded-full border border-eco-700/70 bg-eco-900/40 px-3 py-1.5 text-sm font-medium text-eco-200 backdrop-blur-md'>
          <LeafIcon />
          EcoScan
        </div>
        <h1 className='text-3xl font-semibold tracking-tight text-[#effaf3]'>Akıllı Atık Takibi</h1>
        <p className='text-sm text-eco-100/70'>
          Kurulum tamamlandı. Sonraki adımda dashboard veri bağlantısını ekleyeceğiz.
        </p>

        <div className='grid grid-cols-2 gap-3'>
          <div className='rounded-2xl border border-eco-800/60 bg-gradient-to-b from-eco-900/45 to-eco-950/55 p-4 shadow-[0_8px_28px_rgba(20,73,56,0.35)] backdrop-blur-sm'>
            <div className='mb-3 inline-flex rounded-lg bg-eco-400/20 p-2 text-eco-100'>
              {isLoading ? <LoadingRing className='h-5 w-5' /> : <SparkIcon />}
            </div>
            <p className='text-xs text-eco-100/70'>Toplam Tasarruf</p>
            {isLoading ? (
              <span className='mt-2 block h-6 w-24 animate-pulse rounded-md bg-eco-700/40' />
            ) : (
              <p className='mt-1 text-lg font-semibold text-[#f3fff7]'>0.00 kg CO2</p>
            )}
          </div>
          <div className='rounded-2xl border border-moss-700/50 bg-gradient-to-b from-moss-700/20 to-eco-950/55 p-4 shadow-[0_8px_28px_rgba(84,104,59,0.25)] backdrop-blur-sm'>
            <div className='mb-3 inline-flex rounded-lg bg-moss-300/20 p-2 text-moss-100'>
              {isLoading ? <LoadingRing className='h-5 w-5' /> : <TreeIcon />}
            </div>
            <p className='text-xs text-eco-100/70'>Etki Kartı</p>
            {isLoading ? (
              <span className='mt-2 block h-6 w-16 animate-pulse rounded-md bg-eco-700/40' />
            ) : (
              <p className='mt-1 text-lg font-semibold text-[#f3fff7]'>0 Ağaç</p>
            )}
          </div>
        </div>
      </div>

      <button
        type='button'
        className='inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-eco-400 to-moss-300 px-5 py-4 text-base font-semibold text-eco-950 shadow-[0_14px_26px_rgba(54,173,120,0.35)] transition-all duration-200 hover:scale-[1.01] hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-80'
        disabled={isLoading}
      >
        {isLoading ? <LoadingRing className='h-5 w-5' /> : <CameraIcon />}
        {isLoading ? 'Yükleniyor...' : 'Tarama Başlat'}
      </button>
    </section>
  )
}

function LoadingRing({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 24 24' fill='none' className={`animate-spin ${className ?? ''}`} aria-hidden='true'>
      <circle cx='12' cy='12' r='9' stroke='currentColor' strokeOpacity='0.25' strokeWidth='2.5' />
      <path d='M12 3a9 9 0 0 1 9 9' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='h-4 w-4' aria-hidden='true'>
      <path
        d='M19 5c-6.5 0-12 4.2-12 10 0 2.3 1.8 4 4.2 4 4 0 8.8-3.7 8.8-14Z'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M8 18c1.4-3.2 4.1-5.7 8-7.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden='true'>
      <path
        d='m12 3 1.9 4.8L19 9.7l-3.9 3.3L16.2 18 12 15.4 7.8 18 9 13 5 9.7l5.1-1.9L12 3Z'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function TreeIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden='true'>
      <path
        d='M12 21v-5m0 0 4-4h-3l3-4h-3l2-3h-6l2 3H8l3 4H8l4 4Z'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden='true'>
      <rect x='3' y='7' width='18' height='13' rx='3' stroke='currentColor' strokeWidth='1.8' />
      <path d='M9 7 10.2 4.8h3.6L15 7' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      <circle cx='12' cy='13.5' r='3.2' stroke='currentColor' strokeWidth='1.8' />
    </svg>
  )
}
