// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 md-4 md:md-0'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>

          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className=' hover:text-blue-400 duration-300'>Blog</a>
          </nav>

        </div>
      </header>
      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode<br />
              My Portfolio WebSite</h1>
            <p className='mb-8 leading-relaxed'>現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML,CSS,JavaScript,TypeScript,PHP,SQL,ReactなどWeb全般とPythonです。
              自分が作ったものを公開しておりますので、ぜひ見ていってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:maxw-lg w-5/6'>
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてWebサイトやWebAppを個人として受注しています。
              また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしています。
            </p>
            <p>以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactのJSやTSで実装しています。またPythonを使ってAIによる下部かの予想サイトを構築しました。
              また数件の事務所のWebサイトの構築など多岐にわたります。
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className='flex flex-wrap'>
            {/* =ここからカード①SNSチャットApp~~~~~~~~~~~~~~~~~~~~~ */}
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 9H7V7H17V9Z" fill="currentColor" />
                      <path d="M7 13H17V11H7V13Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>{/* bg-green-500 text-white rounded-full */}
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>{/* flex items-center */}
                <div>
                  <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css, firebase, AWS。ログイン・ログアウト認証機能、
                    メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
                </div>
              </div>{/* bg-gray-100 rounded-lg */}
            </div>{/* md:w-1/3 */}
            {/* ==============①ここまでカードSNSチャットApp======== */}

            {/* =ここからカード②~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19 9C19 11.3787 17.8135 13.4804 16 14.7453V22H13.4142L12 20.5858L10.5858 22H8V14.7453C6.18652 13.4804 5 11.3787 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9ZM10 19.7573L12 17.7573L14 19.7574V15.7101C13.3663 15.8987 12.695 16 12 16C11.305 16 10.6337 15.8987 10 15.7101V19.7573Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>{/* bg-green-500 text-white rounded-full */}
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>{/* flex items-center */}
                <div>
                  <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css, firebase, AWS。ログイン・ログアウト認証機能、
                    メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
                </div>
              </div>{/* bg-gray-100 rounded-lg */}
            </div>{/* md:w-1/3 */}
            {/* ==============②ここまでカード=============== */}

            {/* =ここからカード③~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19 9C19 11.3787 17.8135 13.4804 16 14.7453V22H13.4142L12 20.5858L10.5858 22H8V14.7453C6.18652 13.4804 5 11.3787 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9ZM10 19.7573L12 17.7573L14 19.7574V15.7101C13.3663 15.8987 12.695 16 12 16C11.305 16 10.6337 15.8987 10 15.7101V19.7573Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>{/* bg-green-500 text-white rounded-full */}
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>{/* flex items-center */}
                <div>
                  <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css, firebase, AWS。ログイン・ログアウト認証機能、
                    メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
                </div>
              </div>{/* bg-gray-100 rounded-lg */}
            </div>{/* md:w-1/3 */}
            {/* ==============③ここまでカード=============== */}

          </div>{/* flex flex-wrap */}
        </div>{/* flex flex-wrap */}
      </section>{/* About Me */}

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>

          {/* left side */}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" alt="" className='rounded' />
          </div>

          {/* right side */}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
            <div>
              <h2>HTML/CSS</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%</div>
              </div>{/* HTMLここまで=================== */}
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%</div>
              </div>{/* HTMLここまで=================== */}
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%</div>
              </div>{/* HTMLここまで=================== */}
              <h2>Python</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>85%</div>
              </div>{/* HTMLここまで=================== */}

            </div>
          </div>{/* right lg:pl-12 lg:py-6 */}

        </div>

      </section>
    </>
  )
}

export default App
