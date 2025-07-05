<nav id="mainNav" class="bg-white shadow-sm fixed top-0 w-full z-50 transition-transform duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <a href="{{ url('/') }}" class="flex items-center cursor-pointer">
                {{-- Replace with your own SVG or logo --}}
                <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9-9 9-9-9z" />
                </svg>
                <span class="ml-2 text-xl font-bold text-gray-900">
                    AutoCare Plus
                </span>
            </a>
            <div class="hidden md:flex items-center space-x-4">
                <a href="#hero" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#services" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
            <div class="flex items-center">
                @auth
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium mr-2">
                            Logout
                        </button>
                    </form>
                @else
                    <a href="{{ route('login') }}" class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mr-2">
                        Sign In
                    </a>
                    <a href="{{ route('register') }}" class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                        Register
                    </a>
                @endauth
            </div>
        </div>
    </div>
</nav>

