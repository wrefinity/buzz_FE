import React from 'react'
import { MainLayout } from '../MainLayout'
import Image from 'next/image';

const DownloadNow = () => {
  return (
    <section className="w-full bg-[#F3F9FD]">
        <MainLayout className='py-12 flex items-center justify-between gap-5'>
            <div className='space-y-3'>
                <h1 className='font-jost text-xl font-bold'>Download our mobile app ⚡️</h1>
                <p className='max-w-md text-muted-foreground'>Get the BuzzRoom mobile app today and start earning rewards by watching videos on the go. Download now and take control of your earnings anytime, anywhere!</p>
            </div>

            <div className="flex gap-4">
            <a href="#" className="inline-block">
              <Image
                src="/apple-download.png"
                alt="Download on App Store"
                width={140}
                height={42}
                className="h-[42px] w-[140px]"
              />
            </a>
            <a href="#" className="inline-block">
              <Image
                src="/googlePlay.png"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-[42px] w-[140px]"
              />
            </a>
          </div>
        </MainLayout>
    </section>
  )
}

export default DownloadNow