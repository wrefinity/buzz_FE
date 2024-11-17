import { Button } from '@/components/ui/button'
import React from 'react'

const AdsBanner = () => {
  return (
    <section className="bg-[#183B56] text-white py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold">Small Tasks on BuzzRoom, with good Rewards</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg">
          Complete quick, enjoyable tasks on BuzzRoom and earn real rewards. Each task is designed to fit into your day, making it easy to boost your earnings on the go!
          </p>
          
          <Button size="lg" className='bg-[#FFC947] px-5 py-3 text-black rounded-xl hover:bg-yellow-500'>Start Earning Now!</Button>
        </div>
      </section>
  )
}

export default AdsBanner