export const MenuData = [
    {
        name: "Home",
        href: "/", 
        has_children: false,
    },
    {
        name: "Chi Siamo",
        href: "/about",
        has_children: false,
    },
    {
        name: "Servizi",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Servizi",
                href: "/service",
                has_children: false,
            },
            {
                name: "Servizi dettagliati",
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
        name: "Contatto",
        href: "/contact",
        has_children: false,
    },
    {
        name: "Di più",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Squadra",
                href: "/our_team",
                has_children: false,
            },
            {
                name: "Richiedi preventivo",
                href: "/request_quote",
                has_children: false,
            },
            {
                name: "Testimonianze",
                href: "/testimonials",
                has_children: false,
            },
            {
                name: "Galleria",
                href: "/gallery",
                has_children: false,
            },
            {
                name: "FAQ",
                href: "/faqs",
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
                name: "Politica sulla riservatezza",
                href: "/privacyPolicy",
                has_children: false,
            },
            {
                name: "Termini e condizioni",
                href: "/terms",
                has_children: false,
            }
        ]
    }
]