const img = (path) => `/img/${path}`

export const headerData = {
    logo: {
        src: img("logo.svg"),
        alt: "TOCOBO",
        href: "/",
        width: 120,
        height: 28,
    },
    menus: [
        { id: "Hero", label: "Hero", href: "#Hero", type: "section" },
        { id: "Brand", label: "Brand", href: "#Brand", type: "section" },
        { id: "Products", label: "Products", href: "#Products", type: "section" },
        { id: "Reviews", label: "Reviews", href: "#Reviews", type: "section" },
        { id: "Cta", label: "Cta", href: "#Cta", type: "section" },
    ],
    topBanner: {
        enabled: true,
        height: 64,                   // px
        items: [
            { id: "tb-1", text: "새로운 소식이 있습니다.", href: "#" },
            { id: "tb-2", text: "업데이트 안내", href: "#" },
            { id: "tb-3", text: "이벤트 진행 중!", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#DC272D",
        color: "#fff",
    },
    utils: [
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],
}