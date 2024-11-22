

export default function Home() {

  return (
    <>
      {/* <div className="container">
        <header>
          <nav className="nav-bar"> */}

      {/* <image className="rounded-full w-96 h-96" ref="/docs/images/examples/image-4@2x.jpg" /> */}

      {/* <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                  <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                </li>
                <li className="me-2">
                  <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
                </li>
                <li className="me-2">
                  <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
                </li>
                <li className="me-2">
                  <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
                </li>
                <li>
                  <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                </li>
              </ul>
            </div>

          </nav>
        </header>

      </div>
      <div className="main-content"> </div>

      <footer>

      </footer> */}

      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">

            <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <image href="logo.png" x="0" y="0" height="100" width="100" />
            </svg>
            <h1 className="text-2xl font-bold ml-4 text-red-600">Loa Thần Tài</h1>
          </div>
        </div>
      </header>


      <section className="bg-yellow-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-red-700 mb-10">4 Bước Đơn Giản Sử Dụng Loa Thần Tài</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <svg className="mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <image href="step1.png" x="0" y="0" height="100" width="100" />
              </svg>
              <p className="mt-4 text-gray-700">Mô tả bước 1</p>
            </div>


            <div className="bg-white p-6 shadow rounded-lg text-center">
              <svg className="mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <image href="step2.png" x="0" y="0" height="100" width="100" />
              </svg>
              <p className="mt-4 text-gray-700">Mô tả bước 2</p>
            </div>


            <div className="bg-white p-6 shadow rounded-lg text-center">
              <svg className="mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <image href="step3.png" x="0" y="0" height="100" width="100" />
              </svg>
              <p className="mt-4 text-gray-700">Mô tả bước 3</p>
            </div>


            <div className="bg-white p-6 shadow rounded-lg text-center">
              <svg className="mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <image href="step4.png" x="0" y="0" height="100" width="100" />
              </svg>
              <p className="mt-4 text-gray-700">Mô tả bước 4</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Người dùng nói gì về Loa Thần Tài</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 shadow rounded-lg">
              <p className="text-gray-600">"Dịch vụ tuyệt vời!"</p>
              <p className="mt-4 text-sm font-semibold text-gray-800">- Nguyễn Văn A</p>
            </div>
            <div className="bg-gray-50 p-6 shadow rounded-lg">
              <p className="text-gray-600">"Tăng hiệu quả bán hàng rõ rệt."</p>
              <p className="mt-4 text-sm font-semibold text-gray-800">- Trần Thị B</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Loa Thần Tài. Mọi quyền được bảo lưu.</p>
          <form action="#" method="POST" className="mt-4">
            <label htmlFor="email" className="block text-sm">Nhận thông tin khuyến mãi:</label>
            <div className="mt-2 flex justify-center">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập email của bạn"
                className="px-4 py-2 rounded-l-md border border-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </footer>
    </>
  )
}
