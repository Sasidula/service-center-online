<footer class="bg-gray-800 text-white ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-lg font-bold mb-4">AutoCare Plus</h3>
                <p class="text-gray-300 mb-4">
                    Professional car service and maintenance center dedicated to keeping your vehicle in top condition.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-300 hover:text-white">
                        {{-- Replace with social icons as needed --}}
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><!-- Facebook --></svg>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-white">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><!-- Twitter --></svg>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-white">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><!-- Instagram --></svg>
                    </a>
                </div>
            </div>
            <div>
                <h3 class="text-lg font-bold mb-4">Contact Us</h3>
                <ul class="space-y-3 text-sm text-gray-300">
                    <li class="flex items-start">
                        <span class="mr-2 text-blue-400">📍</span>
                        <span>123 Auto Street, Cartown, CA 90210</span>
                    </li>
                    <li class="flex items-center">
                        <span class="mr-2 text-blue-400">📞</span>
                        <span>(555) 123-4567</span>
                    </li>
                    <li class="flex items-center">
                        <span class="mr-2 text-blue-400">✉️</span>
                        <span>service@autocareplus.com</span>
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-bold mb-4">Business Hours</h3>
                <ul class="text-sm text-gray-300">
                    <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {{ now()->year }} AutoCare Plus. All rights reserved.</p>
        </div>
    </div>
</footer>

