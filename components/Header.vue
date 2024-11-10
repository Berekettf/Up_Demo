<template>
  <header class="bg-white border-b border-gray-400/30">
    <nav
      class="mx-auto flex max-w-7xl items-center lg:px-8 relative z-[1010] bg-white h-[6rem] text-sm font-normal leading-tight"
      aria-label="Global"
    >
      <div class="flex items-center">
        <!-- Logo section -->
        <div class="flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img
              class="h-8 w-auto"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy Logo"
            />
          </a>
        </div>

        <!-- Category Link section -->
        <div class="ml-4">
          <a
            href="#"
            class="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
            aria-expanded="false"
          >
            Category
          </a>
        </div>
      </div>

      <!-- Search section -->
      <form class="mx-3 flex-1">
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full p-2 bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search for anything"
          />
        </div>
      </form>

      <!-- Right-side links (Udemy Business, Teach on Udemy) -->
      <div class="hidden lg:flex lg:gap-x-12 ml-4">
        <div>
          <a href="#" class="text-sm font-semibold text-gray-900"
            >Udemy Business</a
          >
        </div>
        <div>
          <a href="#" class="text-sm font-semibold text-gray-900"
            >Teach on Udemy</a
          >
        </div>
      </div>

      <!-- Cart Button -->
      <div class="relative ml-4">
        <button
          @click="toggleCartDropdown"
          aria-expanded="false"
          aria-controls="cart-dropdown"
          tabindex="0"
          class="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
            aria-label="Shopping cart with 0 items"
          >
            <path
              d="M3 3h2l.342 2.71a1 1 0 00.991.834h13.472a1 1 0 00.991-.834L21 5h2M5 7h14l-1.5 9H6.5L5 7zM10 21a2 2 0 104 0H10z"
            />
          </svg>
        </button>
      </div>
      <span class="hidden sm:block">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-white border border-slate-700 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Login
        </button>
      </span>
      <span
        class="ml-3 hidden sm:block bg-slate-600 text-white border border-slate-700"
      >
        <button
          type="button"
          class="inline-flex items-center px-1 rounded-md bg-gray-800 py-2 text-sm text-white font-semibold shadow-sm"
        >
          Sign Up
        </button>
      </span>
      <span
        class="ml-3 hidden sm:block  border border-slate-700"
      >
        <button
          type="button"
          class="inline-flex items-center px-1 rounded-md  py-2 text-sm text-black font-semibold shadow-sm ring-1 ring-inset"
        >
          Lang
        </button>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
