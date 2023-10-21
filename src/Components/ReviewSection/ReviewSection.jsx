import React from "react";

const ReviewSection = () => {
  return (
    <div>
      <section id="testimonies" className="py-20 bg-base-200 mb-20 rounded-md">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div>
              <h1 className="mb-5 text-3xl font-semibold text-black md:text-center md:text-5xl">
                It's not just us.
              </h1>
              <p className="text-xl text-black md:text-center md:text-2xl">
                Here's what others have to say about us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul className="space-y-8">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/leijun"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://i05.appmifile.com/436_operator_cn/03/11/2022/2547ff7c2ff2854f7ffc98bfe2630f63!280x344.png"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Lei Jun"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Lei Jun
                          </h3>
                          <p className="text-gray-500 text-md">CEO of Xiaomi</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md h-72">
                        The Brand Shop has consistently exceeded my
                        expectations. The moment I stepped into the store, I was
                        surrounded by a wide array of premium brands and
                        products. What sets this shop apart is not only its
                        product range but also the staff's expertise. They
                        guided me through my purchase with valuable insights,
                        ensuring I made the right choice. The quality of the
                        products I've purchased from The Brand Shop has been
                        exceptional. I keep coming back for more because of
                        their commitment to excellence and customer
                        satisfaction.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Tim Cook
                          </h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md h-72">
                        The Brand Shop is a truly exceptional place. The moment
                        I walked in, I was welcomed by a fantastic array of
                        top-notch products and outstanding customer service.
                        They have a remarkable selection of the latest brands
                        and innovations, making it a paradise for brand
                        enthusiasts. The shop is well-organized, making it easy
                        to find what you need. The staff is knowledgeable and
                        always ready to assist. Their personalized
                        recommendations and in-depth insights helped me make the
                        perfect choice.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 sm:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/PGelsinger"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://www.intel.com/content/dam/www/public/us/en/newsroom/posts/galleries/2021-02-15-gelsinger/pat-gelsinger-1-16x9.jpg.rendition.intel.web.1648.927.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Pat Gelsinger"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Pat Gelsinger
                          </h3>
                          <p className="text-gray-500 text-md">CEO of Intel</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md h-72">
                        The Brand Shop is a hidden gem for brand aficionados. As
                        soon as I walked in, I was greeted by a chic and
                        inviting store layout. Their collection of brands and
                        innovative products is unmatched. Whether it's the
                        latest gadgets or fashionable apparel, I can always rely
                        on The Brand Shop for the best selection. The staff is
                        courteous and incredibly helpful. They go above and
                        beyond to ensure customers are satisfied. Shopping here
                        is a pleasure, and I always leave with my hands full of
                        top-tier products. If you're looking for a shopping
                        experience that combines quality and variety, The Brand
                        Shop is the place to visit.
                      </p>
                    </div>
                  </a>
                </div>
              </li>

              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/sundarpichai"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://cdn.britannica.com/42/193142-050-F69B1A23/Sundar-Pichai-Google.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Sundar Pichai"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Sundar Pichai
                          </h3>
                          <p className="text-gray-500 text-md">CEO of Google</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md h-72">
                        I can't say enough good things about The Brand Shop.
                        From the minute I entered the store, I felt like I was
                        in brand heaven. The shop is a treasure trove of the
                        latest and greatest brands and products. I always
                        discover something new and exciting during each visit.
                        The quality of the merchandise is consistently
                        top-notch. The staff at The Brand Shop is both friendly
                        and knowledgeable. They provide expert guidance and make
                        shopping a breeze. I'm a loyal customer because of the
                        fantastic shopping experiences I've had here.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 lg:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://www.linkedin.com/in/ks-choi-9a7a1461/"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://img.us.news.samsung.com/us/wp-content/uploads/2021/01/05111309/KS-Choi_3-e1609863202439.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="KS Choi"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            KS Choi
                          </h3>
                          <p className="text-gray-500 text-md">
                            CEO of Samsung
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md h-72">
                        The Brand Shop is my go-to destination for all things
                        brand-related. From the moment I entered, I was
                        impressed by the stylish and well-organized store
                        layout. The range of brands they offer is extensive, and
                        I always find the latest innovations and trends here.
                        Their selection is top-notch, and the quality of the
                        products is unmatched. The staff is friendly and
                        knowledgeable, always eager to provide recommendations.
                        Their customer service is excellent, making every visit
                        a pleasant experience. I can't recommend The Brand Shop
                        enough; it's a must-visit for any brand enthusiast!
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/OPPO"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://gadgetsmagazine.com.ph/wp-content/uploads/2021/01/1610697296313267.png"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tony Chen"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Tony Chen
                          </h3>
                          <p className="text-gray-500 text-md">CEO of Oppo</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md h-72">
                        The Brand Shop is a brand lover's paradise. As soon as
                        you walk in, you're surrounded by a carefully curated
                        selection of the finest brands. What sets The Brand Shop
                        apart is their commitment to quality. Every product they
                        offer is a testament to their dedication to excellence.
                        I appreciate the attention to detail and the diversity
                        of choices. The customer service here is exceptional.
                        The staff is always ready to assist and provide valuable
                        insights. Whether you're a seasoned brand enthusiast or
                        just looking for quality items, The Brand Shop is the
                        place to be.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
