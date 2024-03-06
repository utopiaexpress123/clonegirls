import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 text-center px-4 lg:px-40 py-4 h-12 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center space-y-3 sm:mb-0 mb-3 border-gray-200">
      <div className="text-gray-500">
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="#"
          className="group"
          aria-label="Twitter"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
          </svg>
        </Link>
        <a
          href="#"
          className="group"
          aria-label="GitHub"
          target="_blank"
        >

<svg className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 768 768">
<path d="M672 391.5q0-66-23.25-120t-63.75-93.75-92.25-60.75-108.75-21-108 21-92.25 60-64.5 93.75-23.25 122.25q-15 7.5-23.25 22.5t-8.25 33v63q0 27 18.75 45.75t44.25 18.75h33v-195q0-46.5 17.25-87t48-71.25 71.25-48 87-17.25 87 17.25 71.25 48 48 71.25 17.25 87v226.5h-255v64.5h255q27 0 45.75-18.75t18.75-45.75v-39q13.5-7.5 22.5-21t9-31.5v-73.5q0-16.5-9-30t-22.5-21zM256.5 415.5q0-13.5 9-22.5t22.5-9 22.5 9 9 22.5-9 23.25-22.5 9.75-22.5-9.75-9-23.25zM448.5 415.5q0-13.5 9-22.5t22.5-9 22.5 9 9 22.5-9 23.25-22.5 9.75-22.5-9.75-9-23.25zM576 352.5q-7.5-45-34.5-81.75t-67.5-57.75-88.5-21q-36 0-72 14.25t-64.5 41.25-44.25 65.25-12.75 86.25q60-25.5 102-75t54-114q21 42 55.5 74.25t78.75 50.25 93.75 18z"></path>
</svg>

        </a>
      </div>
    </footer>
  );
}
