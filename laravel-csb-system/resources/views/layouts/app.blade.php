<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'AutoCare Plus') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-white scroll-smooth">
    <header class="fixed top-0 left-0 right-0 z-50">
        @include('partials.header')
    </header>

    <main class="pt-16">
        @yield('content')
    </main>

    @include('partials.footer')
</body>
<script>
    let lastScrollTop = 0;
    const navbar = document.getElementById("mainNav");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Scrolling down – hide navbar
            navbar.style.transform = "translateY(-100%)";
        } else {
            // Scrolling up – show navbar
            navbar.style.transform = "translateY(0)";
        }

        lastScrollTop = scrollTop;
    });
</script>

</html>
