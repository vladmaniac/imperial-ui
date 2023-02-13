export const MenuData = [
    {
        name: "Home",
        href: "/", 
        has_children: false,
    },
    {
        name: "About",
        href: "/about",
        has_children: false,
    },
    {
        name: "Services",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Services",
                href: "/service",
                has_children: false,
            },
            {
                name: "Service Details",
                href: "/service_details",
                has_children: false,
            }
        ]
    },
    {
        name: "Blog",
        href: "/blog_details",
        has_children: false
    },
    {
        name: "Contact",
        href: "/contact",
        has_children: false,
    },
    {
        name: "More",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Team",
                href: "/our_team",
                has_children: false,
            },
            {
                name: "Pricing",
                href: "/pricing",
                has_children: false,
            },
            {
                name: "Request Quote",
                href: "/request_quote",
                has_children: false,
            },
            {
                name: "Testimonials",
                href: "/testimonials",
                has_children: false,
            },
            {
                name: "Gallery",
                href: "/gallery",
                has_children: false,
            },
            {
                name: "FAQ",
                href: "/faqs",
                has_children: false,
            },
            {
                name: "Track Your Shipment",
                href: "/track_ship",
                has_children: false,
            },
            {
                name: "User",
                href: "#!",
                has_children: true,
                children: [
                    {
                        name: "SignIn",
                        href: "/signIn",
                        has_children: false,
                    },
                    {
                        name: "SignUp",
                        href: "/signup",
                        has_children: false,
                    },
                ]
            },
            {
                name: "Privacy Policy",
                href: "/privacyPolicy",
                has_children: false,
            },
            {
                name: "Terms & Condition",
                href: "/terms",
                has_children: false,
            },
            {
                name: "404 Error Page",
                href: "/error",
                has_children: false,
            },
        ]
    }
]