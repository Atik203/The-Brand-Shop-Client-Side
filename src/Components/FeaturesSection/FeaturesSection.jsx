import React from "react";

const FeaturesSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 mt-16 mb-16">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">
          Discover Features from Top Tech Brands
        </h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          Explore the incredible features from leading technical brands like
          Apple, Intel, Oppo, Xiaomi, Google and Samsung
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="apple"
              width="25"
              height="25"
            >
              <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"></path>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Apple Innovation</h3>
            <p className="mt-1 text-gray-500">
              Explore the cutting-edge technology and innovation from Apple. Our
              code is well-documented and easy to customize.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Intel"
              role="img"
              viewBox="0 0 512 512"
              width="25"
              height="25"
            >
              <rect width="512" height="512" rx="15%" fill="#ffffff" />
              <path
                fill="#0071c5"
                d="M177 237v62h-20v-78h41c17 0 23 12 23 23v55h-19v-55c0-4-3-7-9-7zm133-1c-11 0-15 7-15 17h31c-1-9-4-17-16-17zm-15 30c0 10 7 17 18 17 9 0 13-2 18-7l12 12c-8 7-16 12-30 12-19 0-37-10-37-40 0-26 8-40 36-40s33 20 33 46zm-36 33c-16 0-23-11-23-23v-76h20v21h15v16h-15v38c0 5 2 7 7 7h8v17zm-119-89h-20v-19h20zm0 90c-15-2-20-11-20-21v-58h20zm237-2c-15-1-20-10-20-21v-88h20zm69-97c-18-88-188-93-298-26v7c110-56 265-56 280 25 4 27-11 55-38 71v21c33-12 66-51 56-98zM246 355c-75 7-155-4-166-63-5-29 8-60 26-80v-10c-32 28-49 63-39 105 12 53 80 84 184 74 41-4 95-18 132-38v-29c-34 20-90 37-137 41z"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Intel Excellence</h3>
            <p className="mt-1 text-gray-500">
              Experience excellence with Intel products. Our codebase is
              optimized for performance and customization.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <img
              src="https://i.ibb.co/KVxxgwF/oppo-logo-40767.png"
              className="w-6 h-5"
              alt=""
            />
          </span>
          <div>
            <h3 className="font-semibold text-xl">Oppo Quality</h3>
            <p className="mt-1 text-gray-500">
              Discover top-notch quality with Oppo. Our plugins are built to
              provide an excellent user experience.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="25"
              height="25"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path fill="#f57921" d="M0 0h800v800H0z" />

              <defs>
                <path id="a" d="M0 0h800v800H0z" />
              </defs>

              <clipPath id="b">
                <use xlink:href="#a" overflow="visible" />
              </clipPath>

              <path
                d="M541.82 603.47V311.85c0-66.258-53.699-119.979-119.95-119.979H84.68c-2.601 0-4.705 2.094-4.705 4.667v406.93c0 2.573 2.104 4.658 4.705 4.658h90.066a4.693 4.693 0 0 0 4.705-4.687V284.048a4.7 4.7 0 0 1 4.706-4.695h193.68c36.367 0 65.865 29.479 65.865 65.855v258.22a4.69 4.69 0 0 0 4.688 4.688h88.744c2.58 0 4.689-2.091 4.689-4.66"
                clip-path="url(#b)"
                fill="#faf9f5"
              />

              <g>
                <defs>
                  <path id="c" d="M0 0h800v800H0z" />
                </defs>

                <clipPath id="d">
                  <use xlink:href="#c" overflow="visible" />
                </clipPath>

                <path
                  d="M359.94 603.44a4.676 4.676 0 0 1-4.688 4.687h-90.046c-2.601 0-4.706-2.095-4.706-4.687V358.69a4.7 4.7 0 0 1 4.706-4.695h90.046a4.684 4.684 0 0 1 4.688 4.695v244.76-.01z"
                  clip-path="url(#d)"
                  fill="#faf9f5"
                />
              </g>

              <g>
                <defs>
                  <path id="e" d="M0 0h800v800H0z" />
                </defs>

                <clipPath id="f">
                  <use xlink:href="#e" overflow="visible" />
                </clipPath>

                <path
                  d="M720.02 603.44c0 2.592-2.104 4.687-4.707 4.687h-90.026c-2.603 0-4.727-2.095-4.727-4.687V196.58c0-2.602 2.124-4.705 4.727-4.705h90.026a4.702 4.702 0 0 1 4.707 4.705v406.86z"
                  clip-path="url(#f)"
                  fill="#faf9f5"
                />
              </g>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Xiaomi Reliability</h3>
            <p className="mt-1 text-gray-500">
              Trust in the reliability of Xiaomi. Our plugins are rigorously
              tested and compatible with various devices.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Google Innovation</h3>
            <p className="mt-1 text-gray-500">
              Embrace innovation with Google products. Our code is
              well-documented for easy customization.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="25"
              height="25"
              viewBox="0 -67.06 200.777 200.777"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M200.653 15.87C197.923.194 150.822-4.698 95.446 4.943 72.19 8.994 51.191 14.969 34.838 21.691c2.512.055 4.375.631 5.507 1.76.885.886 1.332 2.102 1.332 3.617v1.555h-5.43V27.25c0-1.144-.686-1.853-1.901-1.853-1.021 0-1.65.461-1.853 1.369a2.63 2.63 0 0 0 .022 1.084c.581 2.375 8.644 3.85 9.521 8.233.115.564.271 1.771.025 3.498-.503 3.535-3.609 4.899-7.563 4.899-5.519 0-7.761-2.614-7.761-6.218l.004-1.705h5.821l.003 2.124c0 1.194.868 1.853 2.05 1.853 1.12 0 1.774-.451 2-1.373.105-.424.151-1.049-.04-1.527-1.077-2.702-8.606-3.964-9.533-8.333-.207-.982-.224-1.818-.052-2.875a5.606 5.606 0 0 1 .482-1.511C9.333 33.398-1.278 42.732.124 50.791c2.733 15.678 49.833 20.565 105.208 10.924 24.342-4.237 46.226-10.58 62.881-17.688-.241.012-.475.038-.725.038-3.79 0-7.174-1.42-7.525-5.294-.062-.705-.073-1-.075-1.402l.002-8.906c0-.384.045-1.058.088-1.406.449-3.744 3.409-5.288 7.512-5.288 3.175 0 7.068.911 7.496 5.291.057.55.051 1.137.05 1.33v.841h-5.484v-1.255c0-.027-.008-.496-.068-.789-.09-.447-.471-1.483-2.033-1.483-1.543 0-1.943 1.038-2.043 1.484-.057.245-.084.597-.084.987v9.679c-.005.336.012.599.046.792.027.152.304 1.486 2.1 1.486 1.783 0 2.059-1.334 2.084-1.486.047-.262.053-.574.051-.792v-2.999h-2.158v-3.23h7.631v5.746c-.002.391-.008.68-.074 1.4-.092 1.016-.412 1.876-.914 2.611 17.663-8.387 27.947-17.57 26.563-25.512zM57.065 43.653l-2.778-18.876h-.1l-2.849 18.876h-5.855l3.938-21.317h9.553l3.914 21.317h-5.823zm28.162 0l-.129-18.511h-.094l-3.445 18.511h-5.495l-3.428-18.511h-.098l-.125 18.511h-5.445l.472-21.317h8.758l2.55 15.835h.125l2.557-15.835h8.754l.47 21.317h-5.427zm25.641-4.131c-.586 4.129-4.631 4.851-7.49 4.851-4.747 0-7.683-2.029-7.683-6.158l.003-1.684h5.751l.004 2.098c0 1.139.803 1.836 2.043 1.836 1.106 0 1.754-.444 1.979-1.356.104-.425.147-1.045-.037-1.513-1.06-2.651-8.53-3.95-9.438-8.251-.208-.975-.223-1.803-.052-2.849.632-3.899 4.374-4.709 7.386-4.709 2.694 0 4.655.588 5.831 1.764.877.878 1.321 2.083 1.321 3.582v1.538h-5.378v-1.357c0-1.162-.721-1.834-1.88-1.834-1.028 0-1.65.457-1.854 1.356a2.59 2.59 0 0 0 .026 1.072c.576 2.364 8.568 3.809 9.443 8.151.113.554.268 1.743.025 3.463zm19.918-1.937c.008.4-.031 1.199-.053 1.404-.328 3.512-2.84 5.297-7.447 5.297-4.625 0-7.139-1.785-7.465-5.297a16.957 16.957 0 0 1-.053-1.4V22.331h5.502V38.07c-.006.352.012.612.047.793.068.35.416 1.486 1.969 1.486 1.548 0 1.896-1.137 1.969-1.482.031-.186.05-.459.05-.798V22.331h5.481v15.254zm23.705 5.851h-7.656l-5.139-16.885h-.086l.285 16.885h-5.336v-21.1h7.977l4.75 16.22h.111l-.281-16.22h5.375v21.1z"
                fill="#2d4f9e"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Samsung Durability</h3>
            <p className="mt-1 text-gray-500">
              Discover the durability and performance of Samsung products. Our
              plugins are backed by sponsors who provide excellent support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
