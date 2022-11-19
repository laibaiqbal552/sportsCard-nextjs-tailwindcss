import Image from 'next/image'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
const index = () => {
  return (
    <div className="container py-20 mx-auto">
      <div className="relative mx-auto w-full max-w-[479px]  bg-white">
        <div className="flex items-center justify-between rounded-t-4xl bg-[#054CBA] px-6 pt-12 pb-[137px]">
          <div className="text-xl text-white">
            {' '}
            <FaChevronLeft />
          </div>
          <div>
            <Image
              src="/images/1.jpg"
              alt=""
              width={50}
              height="50"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="rounded-b-4xl border  border-[#ddd] pt-[200px] pb-6">
          <div className="absolute right-0 left-0 top-[120px] mx-auto w-full max-w-[431px] rounded-2xl border border-[#ddd] bg-white py-6 px-6 shadow-xl">
            <div>
              <p className="text-lg font-bold">Result</p>
              <p className="mb-2 text-sm">2011 WC Final ODI</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/images/Srilanka.webp"
                      alt=""
                      width={50}
                      height="50"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-gray-600">Sri Lanka</p>
                </div>
                <div>
                  <div className="flex text-base text-gray-700">
                    <p>274</p>
                    <p>/</p>
                    <p>6</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>(50ov)</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="bg-gray-200 px-[4px] text-gray-700">vs</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/images/flag-of-india-round-india-flag-png-transparent-clip-art-image.jpg"
                      alt=""
                      width={50}
                      height="50"
                      className="rounded-full"
                    />
                  </div>
                  <p>India</p>
                </div>
                <div>
                  <div className="flex justify-end text-base text-black">
                    <p>277</p>
                    <p>/</p>
                    <p>4</p>
                  </div>
                  <div className="text-sm text-black">
                    <p>(target 275, 48.2/50 ov)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-4 text-sm text-gray-500">
                India won by 6 wickets (with 10 balls remaining)
              </p>
            </div>
          </div>
          <div className="mx-auto mb-8  w-full max-w-[431px] overflow-scroll rounded-xl border border-[#ddd]  bg-white  shadow-xl">
            <div class="border-b border-gray-200 text-center text-lg font-medium text-gray-500  dark:text-gray-400">
              <ul class="-mb-px flex flex-wrap justify-between">
                <li class="mr-2">
                  <a
                    href="#"
                    class="inline-block rounded-t-lg border-b-2 border-transparent p-4 text-black"
                  >
                    Live
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 font-bold text-blue-600 dark:border-blue-500 dark:text-blue-500"
                    aria-current="page"
                  >
                    ScoreCard
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="inline-block rounded-t-lg border-b-2 border-transparent p-4 text-black"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mb-8 h-[324px] w-full max-w-[431px] overflow-scroll border border-[#ddd] bg-white   shadow-xl">
            <div className="flex justify-between gap-2 bg-[#FBFBFB] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#F2F2F2] py-2 px-4">
              <div>
                <p>batsman</p>
              </div>
              <div className="flex gap-6">
                <div>R</div>
                <div>B</div>
                <div>4s</div>
                <div>6s</div>
                <div>SR</div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="mx-auto h-[159px] w-full max-w-[431px] rounded-2xl border border-[#ddd] bg-white px-6 shadow-xl">
              <div className="flex justify-between">
                <div className="w-3/5 p-6 text-gray-700">
                  <p>Player Of The Match MS Dhoni</p>
                  <p>India</p>
                </div>

                <div className="absolute -top-[23px] right-8">
                  <Image
                    src="/images/MS-Dhoni-CWC19.png"
                    alt=""
                    width={131}
                    height={182}
                    className="p-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
